// Lightweight app.js rebuilt to provide dynamic rendering and translation support

// DOM Elements (may be null if element not present)
const langToggle = document.getElementById('lang-toggle');
const chatToggle = document.getElementById('chat-toggle');
const chatPanel = document.getElementById('chat-panel');
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const profilePicture = document.getElementById('profile-picture');
const defaultAvatarIcon = document.getElementById('default-avatar-icon');

// Safe guards in case config is missing
if (typeof siteContent === 'undefined') {
    console.error('siteContent (config.js) is missing or not loaded.');
    window.siteContent = {};
}

// Translations: will refer to siteContent where useful
// Initialize language from localStorage or default to 'en'
let currentLang = localStorage.getItem('preferred-language') || 'en';
const translations = {
    en: {
        nav: { home: 'Home', about: 'About', certifications: 'Certifications', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
        hero: {
            title: siteContent.personalInfo?.title || 'Cloud & AI Consultant',
            subtitle: siteContent.personalInfo?.subtitle || 'Transforming businesses with cutting-edge cloud solutions and AI technologies',
            purpose: siteContent.personalInfo?.heroPurpose || "Welcome to my interactive portfolio! The star feature here is Sensei, your AI Knowledge Assistant. Ask Sensei about my projects, skills, or experience to get instant, tailored responses."
        },
        sections: { about: 'About Me', certifications: 'AWS Certifications', projects: 'Featured Projects', skills: 'Technical Skills', contact: 'Get In Touch' },
        about: { description: siteContent.personalInfo?.description || '', stats: { yearsLabel: 'Years Experience', projectsLabel: 'Projects Completed', clientsLabel: 'Clients Served' } },
        buttons: { viewWork: 'View My Work', getInTouch: 'Get In Touch', sendMessage: 'Send Message' },
        contact: { labels: { email: 'Email', phone: 'Phone', linkedin: 'LinkedIn' }, placeholders: { name: 'Your Name', email: 'Your Email', subject: 'Subject', message: 'Your Message' } },
        chat: { title: 'Chat', placeholder: 'Ask me about my work...', welcome: siteContent.chatbot?.welcomeMessage || 'Hello! I can help you learn more about my projects, skills, and experience.' },
        footer: { copyright: siteContent.footer?.copyright || '' },
        certifications: { loading: 'Loading certifications...', error: 'Unable to load certifications. Please check your Credly profile URL in the configuration.' }
    },
    fr: {
        nav: { home: 'Accueil', about: 'À propos', certifications: 'Certifications', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
        hero: {
            title: 'Consultant Cloud & IA',
            subtitle: 'Transformer les entreprises avec des solutions cloud et des technologies IA de pointe',
            purpose: siteContent.personalInfo?.heroPurposeFr || "Bienvenue sur mon portfolio interactif ! La fonctionnalité principale est Sensei, votre assistant de connaissances IA. Demandez à Sensei mes projets, compétences ou expériences pour obtenir des réponses instantanées et personnalisées."
        },
        sections: { about: 'À propos de moi', certifications: 'Certifications AWS', projects: 'Projets en vedette', skills: 'Compétences techniques', contact: 'Me contacter' },
        about: { description: siteContent.personalInfo?.description || '', stats: { yearsLabel: "Années d'expérience", projectsLabel: 'Projets réalisés', clientsLabel: 'Clients servis' } },
        buttons: { viewWork: 'Voir mes travaux', getInTouch: 'Me contacter', sendMessage: 'Envoyer' },
        contact: { labels: { email: 'Email', phone: 'Téléphone', linkedin: 'LinkedIn' }, placeholders: { name: 'Votre nom', email: 'Votre email', subject: 'Sujet', message: 'Votre message' } },
        chat: { title: 'Chat', placeholder: 'Demandez-moi à propos de mon travail...', welcome: siteContent.chatbot?.welcomeMessageFr || 'Bonjour ! Je peux vous aider à en savoir plus sur mes projets, compétences et expériences.' },
        footer: { copyright: siteContent.footer?.copyright || '' },
        certifications: { loading: 'Chargement des certifications...', error: 'Impossible de charger les certifications. Veuillez vérifier l\'URL de votre profil Credly dans la configuration.' }
    }
};

// DOMContentLoaded: populate initial content
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language toggle button text
    if (langToggle) langToggle.textContent = currentLang.toUpperCase();
    
    // Basic personal info
    document.getElementById('nav-name').textContent = siteContent.personalInfo?.name || 'Your Name';
    document.getElementById('hero-title').textContent = translations[currentLang].hero.title;
    document.getElementById('hero-subtitle').textContent = translations[currentLang].hero.subtitle;

    // Respect manual hero-purpose in HTML unless config explicitly provides heroPurpose
    const heroPurposeEl = document.getElementById('hero-purpose');
    if (heroPurposeEl && siteContent.personalInfo?.heroPurpose) {
        heroPurposeEl.innerHTML = siteContent.personalInfo.heroPurpose;
    }

    // About
    if (document.getElementById('about-description')) {
        document.getElementById('about-description').textContent = siteContent.personalInfo?.description || '';
    }
    document.getElementById('years-experience').textContent = siteContent.stats?.yearsExperience || '';
    document.getElementById('projects-completed').textContent = siteContent.stats?.projectsCompleted || '';
    document.getElementById('clients-served').textContent = siteContent.stats?.clientsServed || '';

    // Chat setup
    document.getElementById('chat-title').textContent = translations[currentLang].chat.title;
    document.getElementById('chat-input').placeholder = translations[currentLang].chat.placeholder;

    // Profile picture
    if (siteContent.personalInfo?.profilePicture) {
        profilePicture.src = siteContent.personalInfo.profilePicture;
        profilePicture.style.display = 'block';
        defaultAvatarIcon.style.display = 'none';
    }

    // Contact info
    if (document.getElementById('contact-email')) document.getElementById('contact-email').textContent = siteContent.personalInfo?.email || '';
    if (document.getElementById('contact-phone')) document.getElementById('contact-phone').textContent = siteContent.personalInfo?.phone || '';
    if (document.getElementById('contact-linkedin')) document.getElementById('contact-linkedin').textContent = siteContent.personalInfo?.socialLinks?.linkedin || '';

    // Load dynamic sections
    loadCertifications();
    loadProjects();
    loadSkills();

    // Footer
    if (document.getElementById('footer-text')) document.getElementById('footer-text').textContent = siteContent.footer?.copyright || '';
    initializeSocialLinks();

    // Background fallback: ensure overlay is stronger if no bg image
    try {
        const heroEl = document.querySelector('.hero');
        if (heroEl) {
            const cs = window.getComputedStyle(heroEl);
            const bg = cs.backgroundImage || cs.getPropertyValue('background-image');
            if (!bg || bg === 'none' || bg.indexOf('url(') === -1) heroEl.classList.add('no-bg');
        }
    } catch (e) { console.warn('bg check failed', e); }
});

// updateContent applies translations across the page
function updateContent() {
    // nav
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('href').substring(1);
        if (translations[currentLang].nav[key]) link.textContent = translations[currentLang].nav[key];
    });

    // hero
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroTitle) heroTitle.textContent = translations[currentLang].hero.title;
    if (heroSubtitle) heroSubtitle.textContent = translations[currentLang].hero.subtitle;
    // hero-purpose: only replace if config supplies it (otherwise preserve authored HTML)
    const heroPurposeEl = document.getElementById('hero-purpose');
    if (heroPurposeEl && siteContent.personalInfo?.heroPurpose) {
        const val = (currentLang === 'fr') ? (siteContent.personalInfo.heroPurposeFr || translations.fr.hero.purpose) : (siteContent.personalInfo.heroPurpose || translations.en.hero.purpose);
        heroPurposeEl.innerHTML = val;
    }

    // about
    const aboutDescEl = document.getElementById('about-description');
    if (aboutDescEl) aboutDescEl.textContent = translations[currentLang].about.description || aboutDescEl.textContent;
    // stats labels
    const yearsLabel = document.querySelector('#years-experience')?.nextElementSibling;
    const projectsLabel = document.querySelector('#projects-completed')?.nextElementSibling;
    const clientsLabel = document.querySelector('#clients-served')?.nextElementSibling;
    if (yearsLabel) yearsLabel.textContent = translations[currentLang].about.stats.yearsLabel;
    if (projectsLabel) projectsLabel.textContent = translations[currentLang].about.stats.projectsLabel;
    if (clientsLabel) clientsLabel.textContent = translations[currentLang].about.stats.clientsLabel;

    // buttons
    const heroPrimary = document.querySelector('.hero-buttons .btn-primary');
    const heroSecondary = document.querySelector('.hero-buttons .btn-secondary');
    if (heroPrimary) heroPrimary.textContent = translations[currentLang].buttons.viewWork;
    if (heroSecondary) heroSecondary.textContent = translations[currentLang].buttons.getInTouch;

    // section titles
    Object.entries(translations[currentLang].sections).forEach(([key, value]) => {
        const el = document.getElementById(`${key}-title`);
        if (el) el.textContent = value;
    });

    // subtitles
    ['certifications','projects','skills','contact'].forEach(k => {
        const s = document.getElementById(`${k}-subtitle`);
        if (s && translations[currentLang].sections[`${k}Subtitle`]) s.textContent = translations[currentLang].sections[`${k}Subtitle`];
    });

    // contact labels and placeholders
    const contactH4s = document.querySelectorAll('.contact-item h4');
    if (contactH4s.length >= 3) {
        contactH4s[0].textContent = translations[currentLang].contact.labels.email;
        contactH4s[1].textContent = translations[currentLang].contact.labels.phone;
        contactH4s[2].textContent = translations[currentLang].contact.labels.linkedin;
    }
    const placeholders = translations[currentLang].contact.placeholders;
    if (placeholders) {
        document.getElementById('name').placeholder = placeholders.name;
        document.getElementById('email').placeholder = placeholders.email;
        document.getElementById('subject').placeholder = placeholders.subject;
        document.getElementById('message').placeholder = placeholders.message;
        const submitBtn = document.querySelector('#contact-form button[type="submit"]');
        if (submitBtn) submitBtn.textContent = translations[currentLang].buttons.sendMessage;
    }

    // chat
    const chatTitleEl = document.getElementById('chat-title');
    if (chatTitleEl) chatTitleEl.textContent = translations[currentLang].chat.title;
    const chatInputEl = document.getElementById('chat-input');
    if (chatInputEl) chatInputEl.placeholder = translations[currentLang].chat.placeholder;

    // footer
    const footerEl = document.getElementById('footer-text');
    if (footerEl) footerEl.textContent = translations[currentLang].footer.copyright;

    // cert messages
    const certLoadP = document.querySelector('#certifications-loading p');
    if (certLoadP) certLoadP.textContent = translations[currentLang].certifications.loading;
    const certErrorP = document.querySelector('#certifications-error p');
    if (certErrorP) certErrorP.textContent = translations[currentLang].certifications.error;
}

// Language toggle handler
langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    // Save language preference
    localStorage.setItem('preferred-language', currentLang);
    langToggle.textContent = currentLang.toUpperCase();
    updateContent();
});

// Load Certifications
async function loadCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    const loadingIndicator = document.getElementById('certifications-loading');
    const errorMessage = document.getElementById('certifications-error');

    try {
        if (loadingIndicator) loadingIndicator.style.display = 'flex';
        if (certificationsGrid) certificationsGrid.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';

        let certifications = [];
        if (siteContent.credly?.useManualCertifications) certifications = siteContent.credly.manualCertifications || [];
        
        if (!certifications || certifications.length === 0) throw new Error('No certifications available');

        certificationsGrid.innerHTML = '';
        certifications.forEach(cert => certificationsGrid.appendChild(createCertificationCard(cert)));

        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (certificationsGrid) certificationsGrid.style.display = 'grid';
    } catch (err) {
        console.error('Error loading certifications', err);
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'block';
    }
}

// Create Certification Card
function createCertificationCard(cert) {
    const name = currentLang === 'fr' && cert.nameFr ? cert.nameFr : cert.name;
    const description = currentLang === 'fr' && cert.descriptionFr ? cert.descriptionFr : cert.description;
    const card = document.createElement('div');
    card.className = 'certification-card fade-in';
    card.innerHTML = `
        <div class="certification-image">
            <img src="${cert.image_url}" alt="${name}" loading="lazy">
        </div>
        <h3 class="certification-name">${name}</h3>
        <p class="certification-date">Issued: ${new Date(cert.issued_at_date).toLocaleDateString()}</p>
        <p class="certification-description">${description}</p>
        <a href="${cert.public_url}" target="_blank" class="certification-link">Verify <i class="fas fa-external-link-alt"></i></a>
    `;
    return card;
}

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    (siteContent.projects || []).forEach(project => projectsGrid.appendChild(createProjectCard(project)));
}

// Create Project Card
function createProjectCard(project) {
    const title = currentLang === 'fr' && project.titleFr ? project.titleFr : project.title;
    const description = currentLang === 'fr' && project.descriptionFr ? project.descriptionFr : project.description;
    const technologies = currentLang === 'fr' && project.technologiesFr ? project.technologiesFr : project.technologies;
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    const imageContent = (project.image || '').startsWith('http') || (project.image || '').startsWith('data:')
        ? `<img src="${project.image}" alt="${title}">`
        : `<i class="fas fa-image"></i>`;
    card.innerHTML = `
        <div class="project-image">
            ${imageContent}
        </div>
        <div class="project-content">
            <h3 class="project-title">${title}</h3>
            <p class="project-description">${description}</p>
            <div class="project-tech">
                ${(technologies || []).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links?.github ? `<a href="${project.links.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> View Code</a>` : ''}
                ${project.links?.live ? `<a href="${project.links.live}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
            </div>
        </div>
    `;
    return card;
}

// Load Skills
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    skillsContainer.innerHTML = '';
    Object.entries(siteContent.skills || {}).forEach(([category, skills]) => skillsContainer.appendChild(createSkillCategory(category, skills)));
}

// Create Skill Category
function createSkillCategory(category, skills) {
    // Use French category name if available
    const categoryName = currentLang === 'fr' && siteContent.skillCategoriesFr && siteContent.skillCategoriesFr[category] ? siteContent.skillCategoriesFr[category] : category;
    const div = document.createElement('div');
    div.className = 'skill-category fade-in';
    div.innerHTML = `
        <h3 class="skill-category-title">${categoryName}</h3>
        <div class="skill-list">
            ${(skills || []).map(skill => `
                <div class="skill-item">
                    <i class="${skill.icon} skill-icon"></i>
                    <span class="skill-name">${currentLang === 'fr' && skill.nameFr ? skill.nameFr : skill.name}</span>
                </div>
            `).join('')}
        </div>
    `;
    return div;
}

// Initialize Social Links
function initializeSocialLinks() {
    const socialLinksContainer = document.querySelector('.social-links');
    if (!socialLinksContainer) return;
    socialLinksContainer.innerHTML = '';
    const personal = siteContent.personalInfo?.socialLinks || {};
    const mapping = { github: 'fab fa-github', linkedin: 'fab fa-linkedin', twitter: 'fab fa-twitter' };
    Object.entries(personal).forEach(([platform, url]) => {
        const a = document.createElement('a');
        a.href = url;
        a.className = 'social-link';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `<i class="${mapping[platform] || 'fab fa-link'}"></i>`;
        socialLinksContainer.appendChild(a);
    });
}

// Navigation Toggle (mobile)
navToggle?.addEventListener('click', () => { navToggle.classList.toggle('active'); navMenu.classList.toggle('active'); });
// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => { navToggle.classList.remove('active'); navMenu.classList.remove('active'); }));

// Chat widget behavior
let chatOpen = false;
chatToggle?.addEventListener('click', () => {
    chatOpen = !chatOpen;
    chatPanel.classList.toggle('open');
    chatPanel.setAttribute('aria-hidden', (!chatOpen).toString());
    if (chatOpen && chatMessages.childNodes.length === 0) addBotMessage(translations[currentLang].chat.welcome || siteContent.chatbot?.welcomeMessage || 'Hello!');
});

document.getElementById('chat-close')?.addEventListener('click', () => { chatOpen = false; chatPanel.classList.remove('open'); chatPanel.setAttribute('aria-hidden', 'true'); });

chatForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    addUserMessage(message);
    chatInput.value = '';
    await handleUserMessage(message);
});

function addUserMessage(message) {
    const div = document.createElement('div'); div.className = 'chat-message user fade-in'; div.textContent = message; chatMessages.appendChild(div); chatMessages.scrollTop = chatMessages.scrollHeight;
}
function addBotMessage(message) {
    const div = document.createElement('div'); div.className = 'chat-message bot fade-in'; div.textContent = message; chatMessages.appendChild(div); chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Use backend AI for chatbot responses
async function handleUserMessage(message) {
    addBotMessage('...');
    try {
        const api = window.CHATBOT_API || siteContent.chatbot?.api || '/api/chatbot';
        const res = await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await res.json();
        chatMessages.lastChild.innerText = data.message || 'No response.';
        if (data.sources) {
            const src = document.createElement('div');
            src.className = 'sources';
            src.innerText = 'Sources: ' + data.sources.map(s => s.title || s.name).join(', ');
            chatMessages.appendChild(src);
        }
    } catch (e) {
        chatMessages.lastChild.innerText = 'Error: ' + e.message;
    }
}

// Contact form
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    try {
        const res = await fetch(siteContent.contact?.submitUrl || '#', { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
        if (res.ok) { alert(siteContent.contact?.successMessage || 'Message sent'); contactForm.reset(); }
        else throw new Error('Network error');
    } catch (err) { console.error(err); alert(siteContent.contact?.errorMessage || 'Error sending message'); }
});

// Intersection observer animations
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver((entries, obs) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; obs.unobserve(entry.target); } }); }, observerOptions);
document.querySelectorAll('.fade-in').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'; observer.observe(el); });
