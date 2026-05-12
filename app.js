// Lightweight app.js rebuilt to provide dynamic rendering and translation support

// DOM Elements (may be null if element not present)
// Removed language toggle (English only)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const profilePicture = document.getElementById('profile-picture');
const defaultAvatarIcon = document.getElementById('default-avatar-icon');

// Safe guards in case config is missing
if (typeof siteContent === 'undefined') {
    console.error('siteContent (config.js) is missing or not loaded.');
    window.siteContent = {};
}

// English-only content, no translations or language toggle

// DOMContentLoaded: populate initial content
document.addEventListener('DOMContentLoaded', () => {
    // Basic personal info
    document.getElementById('nav-name').textContent = siteContent.personalInfo?.name || 'Your Name';
    document.getElementById('hero-title').textContent = siteContent.personalInfo?.title || 'AI & Cloud Consultant';
    document.getElementById('hero-subtitle').textContent = siteContent.personalInfo?.subtitle || 'Transforming businesses with cutting-edge cloud solutions and AI technologies';

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
    loadClientOutcomes();
    loadCertifications();
    loadProjects();
    loadSkills();
    initializeMotionEffects();

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





// Load anonymized client outcomes
function loadClientOutcomes() {
    const clientsGrid = document.getElementById('clients-grid');
    if (!clientsGrid) return;
    clientsGrid.innerHTML = '';
    (siteContent.clientOutcomes || []).forEach((client, index) => clientsGrid.appendChild(createClientOutcomeCard(client, index)));
}

function createClientOutcomeCard(client, index) {
    const card = document.createElement('details');
    card.className = 'client-card fade-in';
    if (index === 0) card.open = true;
    card.innerHTML = `
        <summary class="client-summary">
            <span class="client-card-topline">
                <span class="client-index">${String(index + 1).padStart(2, '0')}</span>
                <span class="client-region">${client.region}</span>
            </span>
            <span class="client-summary-main">
                <span class="client-sector">${client.sector}</span>
                <span class="client-brief">${client.summary || client.result}</span>
            </span>
            <span class="client-toggle" aria-hidden="true"><i class="fas fa-chevron-down"></i></span>
        </summary>
        <div class="client-details">
            <div class="client-metrics">
                ${(client.metrics || []).map(metric => `
                    <div class="client-metric">
                        <span class="metric-value">${metric.value}</span>
                        <span class="metric-label">${metric.label}</span>
                        <span class="metric-detail">${metric.detail}</span>
                    </div>
                `).join('')}
            </div>
            <dl class="client-star">
                <div>
                    <dt>Situation</dt>
                    <dd>${client.situation}</dd>
                </div>
                <div>
                    <dt>Task</dt>
                    <dd>${client.task}</dd>
                </div>
                <div>
                    <dt>Action</dt>
                    <dd>${client.action}</dd>
                </div>
                <div class="client-result">
                    <dt>Outcome</dt>
                    <dd>${client.result}</dd>
                </div>
            </dl>
        </div>
    `;
    return card;
}

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
    const name = cert.name;
    const description = cert.description;
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
    const title = project.title;
    const description = project.description;
    const technologies = project.technologies;
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    const imageContent = (project.image || '').startsWith('http') || (project.image || '').startsWith('data:')
        ? `<img src="${project.image}" alt="${title}">`
        : `<i class="fas fa-image"></i>`;
    const linkTarget = (url) => (url || '').startsWith('#') ? '' : ' target="_blank" rel="noopener noreferrer"';
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
                ${project.links?.github ? `<a href="${project.links.github}"${linkTarget(project.links.github)} class="project-link"><i class="fab fa-github"></i> View Code</a>` : ''}
                ${project.links?.live ? `<a href="${project.links.live}"${linkTarget(project.links.live)} class="project-link"><i class="fas fa-external-link-alt"></i> ${project.links.live.startsWith('#') ? 'Start Conversation' : 'Live Demo'}</a>` : ''}
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
    const categoryName = category;
    const div = document.createElement('div');
    div.className = 'skill-category fade-in';
    div.innerHTML = `
        <h3 class="skill-category-title">${categoryName}</h3>
        <div class="skill-list">
            ${(skills || []).map(skill => `
                <div class="skill-item">
                    <i class="${skill.icon} skill-icon"></i>
                    <span class="skill-name">${skill.name}</span>
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

// ...existing code...

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
function initializeMotionEffects() {
    const animatedItems = document.querySelectorAll('.fade-in, .section-title, .section-subtitle, .about-profile-content, .about-text p, .contact-item, .contact-form');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animatedItems.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observerOptions = { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedItems.forEach((el, index) => {
        el.classList.add('motion-reveal');
        el.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 70}ms`);
        observer.observe(el);
    });
}
