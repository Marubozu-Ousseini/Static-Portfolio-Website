// chatbot-widget.js - Standalone JavaScript (clean robust version)
(function () {
  try {
    // Avoid duplicate initialization
    if (document.getElementById('chatbot-btn')) {
      console.log('Chatbot widget already present.');
      return;
    }

    // Resolve API lazily to allow env-loader + late assignment
    const resolveApi = () => {
      return (
        window.CHATBOT_API ||
        (typeof window.getEnv === 'function' ? window.getEnv('CHATBOT_API') : '') ||
        ''
      );
    };
    // Warn if loaded from file:// which breaks fetch and CORS
    if (window.location.protocol === 'file:') {
      console.warn('[chatbot] Running from file://. Start a local server (e.g., http://localhost:8000) so .env loads and CORS works.');
    }

    // Ensure CSS is loaded (only once)
    if (!document.querySelector('link[href*="widget/chatbot-widget.css"]')) {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'widget/chatbot-widget.css';
      document.head.appendChild(style);
    }

    // Floating button with inline fallback styles
    const btn = document.createElement('button');
    btn.id = 'chatbot-btn';
    btn.innerHTML = '💬';
    btn.setAttribute('aria-label', 'Open chat');
    btn.style.cssText = [
      'position: fixed !important',
      'bottom: 20px !important',
      'right: 20px !important',
      'width: 60px !important',
      'height: 60px !important',
      'border-radius: 50% !important',
      'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
      'color: #fff !important',
      'border: none !important',
      'font-size: 24px !important',
      'cursor: pointer !important',
      'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important',
      'z-index: 9999 !important',
      'display: flex !important',
      'align-items: center !important',
      'justify-content: center !important'
    ].join('; ');
    document.body.appendChild(btn);

    // Container
    const container = document.createElement('div');
    container.id = 'chatbot-container';
    container.innerHTML = [
      '<div id="chatbot-header">',
      '  <span class="title">Sensei🤖</span>',
      '  <div class="header-actions">',
      '    <button id="chatbot-faq-toggle" class="faq-toggle" title="Show FAQs">FAQ</button>',
      '    <span id="chatbot-close" title="Close">×</span>',
      '  </div>',
      '</div>',
      '<div id="chatbot-faq" class="hidden"></div>',
      '<div id="chatbot-messages"></div>',
      '<form id="chatbot-form">',
      '  <input id="chatbot-input" autocomplete="off" placeholder="Ask me anything..."/>',
      '  <button type="submit">Send</button>',
      '</form>'
    ].join('');
    document.body.appendChild(container);

    // Elements
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
    const faqPanel = document.getElementById('chatbot-faq');
    const faqToggle = document.getElementById('chatbot-faq-toggle');
    const closeBtn = document.getElementById('chatbot-close');

    let welcomeShown = false;
    const STOP_WORDS = new Set([
      'a', 'about', 'am', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'can',
      'could', 'do', 'does', 'for', 'from', 'has', 'have', 'he', 'help', 'how',
      'i', 'in', 'is', 'it', 'me', 'my', 'of', 'on', 'or', 'our', 'please',
      'tell', 'that', 'the', 'their', 'this', 'to', 'what', 'whats', 'when',
      'where', 'which', 'who', 'with', 'work', 'you', 'your'
    ]);

    function asArray(value) {
      return Array.isArray(value) ? value : [];
    }

    function normalize(text) {
      return String(text || '').toLowerCase().replace(/[^a-z0-9+#.]+/g, ' ').trim();
    }

    function tokenize(text) {
      return normalize(text).split(/\s+/).filter(token => token && token.length > 1 && !STOP_WORDS.has(token));
    }

    function uniqueList(items) {
      return [...new Set(items.filter(Boolean))];
    }

    function formatList(items, maxItems) {
      const cleanItems = uniqueList(items).slice(0, maxItems || items.length);
      if (cleanItems.length <= 1) return cleanItems.join('');
      return cleanItems.slice(0, -1).join(', ') + ', and ' + cleanItems[cleanItems.length - 1];
    }

    function getSiteContent() {
      return window.siteContent || {};
    }

    function getSkillNames() {
      const skills = getSiteContent().skills || {};
      return Object.keys(skills).flatMap(category => asArray(skills[category]).map(skill => skill.name));
    }

    function buildKnowledgeIndex() {
      const site = getSiteContent();
      const personal = site.personalInfo || {};
      const contact = site.contact || {};
      const stats = site.stats || {};
      const facts = [];

      const pushFact = (category, title, text, keywords) => {
        const factText = String(text || '').replace(/\s+/g, ' ').trim();
        if (!factText) return;
        facts.push({
          category,
          title,
          text: factText,
          keywords: uniqueList([category, title, ...(keywords || [])]).join(' ')
        });
      };

      pushFact(
        'profile',
        personal.name || 'Ousseini Oumarou',
        [
          personal.name,
          personal.title,
          personal.subtitle,
          personal.heroPurpose,
          personal.description,
          stats.yearsExperience ? stats.yearsExperience + ' years experience' : '',
          stats.projectsCompleted ? stats.projectsCompleted + ' projects completed' : '',
          stats.clientsServed ? stats.clientsServed + ' clients served' : ''
        ].filter(Boolean).join('. '),
        ['about', 'bio', 'experience', 'consultant']
      );

      pushFact(
        'contact',
        'Contact',
        [
          contact.email || personal.email ? 'Email: ' + (contact.email || personal.email) : '',
          personal.phone ? 'Phone: ' + personal.phone : '',
          personal.socialLinks && personal.socialLinks.linkedin ? 'LinkedIn: ' + personal.socialLinks.linkedin : '',
          personal.socialLinks && personal.socialLinks.github ? 'GitHub: ' + personal.socialLinks.github : ''
        ].filter(Boolean).join('. '),
        ['email', 'phone', 'linkedin', 'github', 'hire', 'contact']
      );

      asArray(site.projects).forEach(project => {
        pushFact(
          'project',
          project.title,
          [
            project.title,
            project.description,
            project.technologies && project.technologies.length ? 'Technologies: ' + project.technologies.join(', ') : '',
            project.links && project.links.github && project.links.github !== '#' ? 'GitHub: ' + project.links.github : '',
            project.links && project.links.live && project.links.live !== '#' ? 'Live: ' + project.links.live : ''
          ].filter(Boolean).join('. '),
          ['portfolio', 'project', ...(project.technologies || [])]
        );
      });

      Object.entries(site.skills || {}).forEach(([category, skills]) => {
        pushFact(
          'skill',
          category,
          category + ': ' + asArray(skills).map(skill => skill.name).join(', '),
          ['skills', 'capabilities', category]
        );
      });

      asArray(site.credly && site.credly.manualCertifications).forEach(cert => {
        pushFact(
          'certification',
          cert.name,
          [
            cert.name,
            cert.issued_at_date ? 'Issued: ' + cert.issued_at_date : '',
            cert.description,
            cert.public_url && cert.public_url !== 'ongoing' ? 'Credential: ' + cert.public_url : ''
          ].filter(Boolean).join('. '),
          ['certification', 'credential', 'badge', cert.id]
        );
      });

      asArray(site.clientOutcomes).forEach(outcome => {
        pushFact(
          'client outcome',
          outcome.region + ' - ' + outcome.sector,
          [
            outcome.region,
            outcome.sector,
            outcome.summary,
            outcome.situation ? 'Situation: ' + outcome.situation : '',
            outcome.task ? 'Task: ' + outcome.task : '',
            outcome.action ? 'Action: ' + outcome.action : '',
            outcome.result ? 'Result: ' + outcome.result : '',
            asArray(outcome.metrics).map(metric => metric.label + ': ' + metric.value + ' (' + metric.detail + ')').join('; ')
          ].filter(Boolean).join('. '),
          ['case study', 'client', 'outcome', outcome.region, outcome.sector]
        );
      });

      return facts;
    }

    let cachedKnowledge = null;

    function getKnowledgeIndex() {
      if (!cachedKnowledge) cachedKnowledge = buildKnowledgeIndex();
      return cachedKnowledge;
    }

    function retrieveFacts(question, limit) {
      const query = normalize(question);
      const queryTokens = tokenize(question);
      if (!queryTokens.length) return [];

      return getKnowledgeIndex()
        .map(fact => {
          const haystack = normalize([fact.category, fact.title, fact.text, fact.keywords].join(' '));
          let score = 0;
          queryTokens.forEach(token => {
            if (haystack.includes(token)) score += 1;
            if (normalize(fact.title).includes(token)) score += 2;
            if (normalize(fact.category).includes(token)) score += 1.5;
          });
          if (query.includes('uae') && haystack.includes('uae')) score += 3;
          if (query.includes('gcc') && haystack.includes('gcc')) score += 3;
          if (query.includes('pdpl') && haystack.includes('pdpl')) score += 4;
          if (query.includes('bedrock') && haystack.includes('bedrock')) score += 4;
          if (query.includes('chatbot') && haystack.includes('chatbot')) score += 4;
          return { ...fact, score };
        })
        .filter(fact => fact.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit || 5);
    }

    function buildGroundingPayload(question) {
      const matches = retrieveFacts(question, 6);
      return matches.map(fact => ({
        title: fact.title,
        category: fact.category,
        text: fact.text.slice(0, 900)
      }));
    }

    function answerFromSiteContent(question) {
      const site = getSiteContent();
      const personal = site.personalInfo || {};
      const contact = site.contact || {};
      const query = normalize(question);
      const tokens = new Set(tokenize(question));
      const has = (...words) => words.some(word => query.includes(word) || tokens.has(word));

      if (has('contact', 'email', 'phone', 'hire', 'linkedin')) {
        const details = [
          contact.email || personal.email ? 'email ' + (contact.email || personal.email) : '',
          personal.phone ? 'phone ' + personal.phone : '',
          personal.socialLinks && personal.socialLinks.linkedin ? 'LinkedIn ' + personal.socialLinks.linkedin : '',
          personal.socialLinks && personal.socialLinks.github ? 'GitHub ' + personal.socialLinks.github : ''
        ].filter(Boolean);
        return {
          message: 'You can reach Ousseini by ' + formatList(details) + '.',
          sources: ['config.js: contact', 'config.js: personalInfo']
        };
      }

      if (has('certification', 'certifications', 'credential', 'credentials', 'badge', 'badges', 'certified')) {
        const certs = asArray(site.credly && site.credly.manualCertifications);
        const current = certs.filter(cert => normalize(cert.issued_at_date) === 'ongoing').map(cert => cert.name);
        const earned = certs.filter(cert => normalize(cert.issued_at_date) !== 'ongoing').map(cert => cert.name);
        return {
          message: [
            'Ousseini has credentials across AWS, Google, GitHub, Microsoft learning, and AI foundations.',
            earned.length ? 'Earned credentials include ' + formatList(earned, 8) + '.' : '',
            current.length ? 'Ongoing credentials include ' + formatList(current, 3) + '.' : ''
          ].filter(Boolean).join('\n'),
          sources: ['config.js: credly.manualCertifications']
        };
      }

      if (has('skill', 'skills', 'stack', 'tools', 'technologies', 'capabilities')) {
        const skillCategories = Object.keys(site.skills || {});
        const highlights = getSkillNames().filter(name => /aws|bedrock|agentic|terraform|docker|python|javascript|pdpl|cloud|data|sagemaker/i.test(name));
        return {
          message: [
            'Core capability areas: ' + formatList(skillCategories) + '.',
            'Highlighted tools and skills include ' + formatList(highlights, 14) + '.'
          ].join('\n'),
          sources: ['config.js: skills']
        };
      }

      if (has('project', 'projects', 'portfolio', 'built', 'github')) {
        const projects = asArray(site.projects);
        const matches = retrieveFacts(question, 5).filter(fact => fact.category === 'project');
        const selected = matches.length ? matches : projects.slice(0, 5).map(project => ({
          title: project.title,
          text: project.description
        }));
        return {
          message: 'Relevant projects include:\n' + selected.slice(0, 5).map(project => '- ' + project.title + ': ' + project.text.replace(project.title + '. ', '').slice(0, 220)).join('\n'),
          sources: ['config.js: projects']
        };
      }

      if (has('about', 'bio', 'experience', 'background', 'consultant') || query.includes('who is')) {
        return {
          message: [
            personal.name + ' is an ' + personal.title + '.',
            personal.description,
            site.stats ? 'Portfolio stats: ' + site.stats.yearsExperience + ' experience, ' + site.stats.projectsCompleted + ' projects completed, and ' + site.stats.clientsServed + ' clients served.' : ''
          ].filter(Boolean).join('\n'),
          sources: ['config.js: personalInfo', 'config.js: stats']
        };
      }

      if (has('uae', 'gcc', 'pdpl', 'sovereign', 'readiness', 'compliance', 'case', 'outcome', 'client')) {
        const matches = retrieveFacts(question, 4).filter(fact => fact.category === 'client outcome' || /readiness|pdpl|sovereign|compliance/i.test(fact.text));
        if (matches.length) {
          return {
            message: 'Here are the strongest matching portfolio outcomes:\n' + matches.slice(0, 4).map(fact => '- ' + fact.title + ': ' + fact.text.slice(0, 260)).join('\n'),
            sources: matches.map(fact => fact.title)
          };
        }
      }

      return null;
    }

    function addWelcomeMessage() {
      if (welcomeShown) return;
      const msgDiv = document.createElement('div');
      msgDiv.className = 'msg bot';
      msgDiv.innerHTML = "Welcome! 👨🏾‍🏫 I'm Sensei.🤖 Ask me anything about Ousseini's experiences, projects, or skills!";
      messages.appendChild(msgDiv);
      messages.scrollTop = messages.scrollHeight;
      welcomeShown = true;
    }

    btn.addEventListener('click', () => {
      const wasOpen = container.classList.contains('open');
      container.classList.toggle('open');
      if (!wasOpen && !welcomeShown) addWelcomeMessage();
    });

    closeBtn && closeBtn.addEventListener('click', () => {
      container.classList.remove('open');
    });

    function addMsg(text, from) {
      const div = document.createElement('div');
      div.className = 'msg ' + from;
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    // Resolve FAQs from config with safe defaults
    const resolveFaqs = () => {
      const fromGlobal = (window.PortfolioChatbotConfig && Array.isArray(window.PortfolioChatbotConfig.faqs))
        ? window.PortfolioChatbotConfig.faqs
        : [];
      const fromSiteContent = (window.siteContent && window.siteContent.chatbot && Array.isArray(window.siteContent.chatbot.faqs))
        ? window.siteContent.chatbot.faqs
        : [];
      const defaults = [
        'What are your key projects?',
        'What AI/Machine Learning projects have you worked on?',
        'What certifications do you have?',
        'What are your core skills?',
        'Tell me about yourself',
        'How can I contact you?'
      ];
      const merged = [...fromGlobal, ...fromSiteContent];
      return merged.length ? merged : defaults;
    };

    function renderFaqs() {
      const faqs = resolveFaqs();
      if (!faqs || !faqs.length) {
        faqPanel.innerHTML = '';
        return;
      }
      const escapeAttribute = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
      const html = [
        '<div class="faq-list" role="list">',
        ...faqs.map(q => `<button type="button" class="faq-item" role="listitem" data-q="${escapeAttribute(q)}">? ${escapeAttribute(q)}</button>`),
        '</div>'
      ].join('');
      faqPanel.innerHTML = html;
      // Wire clicks
      faqPanel.querySelectorAll('.faq-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const q = btn.getAttribute('data-q') || '';
          if (!q) return;
          sendMessage(q);
          // Close FAQ after sending
          faqPanel.classList.add('hidden');
        });
      });
    }

    function toggleFaq() {
      if (!faqPanel) return;
      if (faqPanel.classList.contains('hidden')) {
        renderFaqs();
        faqPanel.classList.remove('hidden');
      } else {
        faqPanel.classList.add('hidden');
      }
    }

    faqToggle && faqToggle.addEventListener('click', toggleFaq);

    async function sendMessage(q) {
      addMsg(q, 'user');
      input.value = '';
      const loadingMsg = document.createElement('div');
      loadingMsg.className = 'msg bot';
      loadingMsg.textContent = '...';
      messages.appendChild(loadingMsg);
      messages.scrollTop = messages.scrollHeight;

      const localAnswer = answerFromSiteContent(q);
      if (localAnswer) {
        loadingMsg.textContent = localAnswer.message;
        if (localAnswer.sources && localAnswer.sources.length > 0) {
          const src = document.createElement('div');
          src.className = 'sources';
          src.textContent = 'Sources: ' + localAnswer.sources.join(', ');
          messages.appendChild(src);
          messages.scrollTop = messages.scrollHeight;
        }
        return;
      }

      try {
        const api = resolveApi();
        if (!api) {
          const matches = retrieveFacts(q, 3);
          if (matches.length) {
            loadingMsg.textContent = 'I found these portfolio facts:\n' + matches.map(fact => '- ' + fact.title + ': ' + fact.text.slice(0, 220)).join('\n');
          } else {
            loadingMsg.textContent = 'I can answer questions about Ousseini, his projects, skills, certifications, client outcomes, and contact details. For broader questions, configure CHATBOT_API in .env and open the site through a local server.';
          }
          return;
        }
        const portfolioContext = buildGroundingPayload(q);
        const res = await fetch(api, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: q,
            portfolioContext,
            instructions: 'Answer using portfolioContext when it is relevant. If the context does not contain the answer, say so briefly instead of guessing.'
          })
        });
        if (!res.ok) {
          throw new Error('API returned ' + res.status + ' ' + res.statusText);
        }
        const data = await res.json();
        const apiMessage = (data.message || '').replace(/\r\n/g, '\n').trim();
        if (apiMessage) {
          loadingMsg.textContent = apiMessage;
        } else if (portfolioContext.length) {
          loadingMsg.textContent = 'I found these portfolio facts:\n' + portfolioContext.slice(0, 3).map(fact => '- ' + fact.title + ': ' + fact.text.slice(0, 220)).join('\n');
        } else {
          loadingMsg.textContent = 'I do not have enough portfolio context to answer that accurately.';
        }
        if (data.sources && data.sources.length > 0) {
          const src = document.createElement('div');
          src.className = 'sources';
          const labels = data.sources.map(s => {
            if (typeof s === 'string') return s;
            return s?.title || s?.name || '';
          }).filter(Boolean);
          src.textContent = 'Sources: ' + labels.join(', ');
          messages.appendChild(src);
          messages.scrollTop = messages.scrollHeight;
        } else if (portfolioContext.length) {
          const src = document.createElement('div');
          src.className = 'sources';
          src.textContent = 'Sources: ' + portfolioContext.map(fact => fact.title).join(', ');
          messages.appendChild(src);
          messages.scrollTop = messages.scrollHeight;
        }
      } catch (err) {
        const matches = retrieveFacts(q, 3);
        if (matches.length) {
          loadingMsg.textContent = 'I could not reach the AI API, but I found these portfolio facts:\n' + matches.map(fact => '- ' + fact.title + ': ' + fact.text.slice(0, 220)).join('\n');
        } else {
          loadingMsg.textContent = 'Error: ' + err.message;
        }
      }
    }

    form && form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      // Delegate to shared sender
      await sendMessage(q);
    });

    console.log('Chatbot widget initialized');
  } catch (err) {
    console.error('Failed to initialize chatbot widget:', err);
  }
})();
