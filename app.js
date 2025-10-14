/**
 * Portfolio Website Application Logic
 * 
 * This file handles:
 * - Dynamic content loading from config.js
 * - Credly certification integration with CORS proxy
 * - Interactive navigation and form handling
 * - Smooth scrolling and animations
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    loadDynamicContent();
    loadCredlyCertifications();
    initializeContactForm();
    initializeScrollEffects();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Load dynamic content from config.js
 */
function loadDynamicContent() {
    if (typeof siteContent === 'undefined') {
        console.error('siteContent is not defined. Make sure config.js is loaded.');
        return;
    }

    // Load personal information
    updateElement('nav-name', siteContent.personalInfo.name);
    updateElement('hero-title', siteContent.personalInfo.title);
    updateElement('hero-subtitle', siteContent.personalInfo.subtitle);
    updateElement('about-description', siteContent.personalInfo.description);
    
    // Load profile picture
    loadProfilePicture();
    
    // Load statistics
    updateElement('years-experience', siteContent.stats.yearsExperience);
    updateElement('projects-completed', siteContent.stats.projectsCompleted);
    updateElement('clients-served', siteContent.stats.clientsServed);
    
    // Load contact information
    updateElement('contact-email', siteContent.personalInfo.email);
    updateElement('contact-phone', siteContent.personalInfo.phone);
    updateElement('contact-linkedin', siteContent.personalInfo.linkedin);
    
    // Load projects
    loadProjects();
    
    // Load skills
    loadSkills();
    
    // Load footer content
    updateElement('footer-text', siteContent.footer.copyright);
    
    // Update page title and meta
    document.title = siteContent.seo.title;
    
    // Update social links in footer
    updateSocialLinks();
}

/**
 * Load projects from config
 */
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !siteContent.projects) return;

    projectsGrid.innerHTML = '';
    
    siteContent.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

/**
 * Create a project card element
 */
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    
    card.innerHTML = `
        <div class="project-image">
            <i class="fas fa-${project.image || 'project-diagram'}"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links.live !== '#' ? `<a href="${project.links.live}" class="project-link" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                ${project.links.github !== '#' ? `<a href="${project.links.github}" class="project-link" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Load skills from config
 */
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer || !siteContent.skills) return;

    skillsContainer.innerHTML = '';
    
    Object.entries(siteContent.skills).forEach(([category, skills]) => {
        const skillCategory = createSkillCategory(category, skills);
        skillsContainer.appendChild(skillCategory);
    });
}

/**
 * Create a skill category element
 */
function createSkillCategory(categoryName, skills) {
    const category = document.createElement('div');
    category.className = 'skill-category fade-in';
    
    category.innerHTML = `
        <h3 class="skill-category-title">${categoryName}</h3>
        <div class="skill-list">
            ${skills.map(skill => `
                <div class="skill-item">
                    <i class="${skill.icon} skill-icon"></i>
                    <span class="skill-name">${skill.name}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    return category;
}

/**
 * Load Credly certifications dynamically
 */
async function loadCredlyCertifications() {
    const loadingElement = document.getElementById('certifications-loading');
    const errorElement = document.getElementById('certifications-error');
    const gridElement = document.getElementById('certifications-grid');
    
    if (!siteContent.credly || siteContent.credly.userId === 'YOUR_CREDLY_USER_ID') {
        showErrorMessage('Please update your Credly User ID in config.js');
        return;
    }

    try {
        // Show loading state
        if (loadingElement) loadingElement.style.display = 'block';
        if (errorElement) errorElement.style.display = 'none';
        if (gridElement) gridElement.innerHTML = '';

        // Check if manual certifications should be used
        if (siteContent.credly.useManualCertifications && siteContent.credly.manualCertifications) {
            console.log('Using manual certifications');
            displayCertifications(siteContent.credly.manualCertifications);
            if (loadingElement) loadingElement.style.display = 'none';
            return;
        }

        console.log('Fetching certifications for user:', siteContent.credly.userId);

        // Try multiple CORS proxy services for better reliability
        const credlyUrl = `https://www.credly.com/users/${siteContent.credly.userId}/badges.json`;
        
        // Try different proxy services
        const proxyServices = [
            `https://api.allorigins.win/get?url=${encodeURIComponent(credlyUrl)}`,
            `https://cors-anywhere.herokuapp.com/${credlyUrl}`,
            `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(credlyUrl)}`
        ];
        
        let badges = null;
        let lastError = null;

        // Try each proxy service
        for (let i = 0; i < proxyServices.length; i++) {
            try {
                console.log(`Trying proxy service ${i + 1}:`, proxyServices[i]);
                
                const response = await fetch(proxyServices[i], {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                    // Add timeout
                    signal: AbortSignal.timeout(10000)
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Parse the response based on the proxy service
                if (data.contents) {
                    // allorigins format
                    badges = JSON.parse(data.contents);
                } else if (Array.isArray(data)) {
                    // Direct response
                    badges = data;
                } else if (data.data) {
                    // Some proxies wrap the response
                    badges = data.data;
                } else {
                    badges = data;
                }
                
                console.log('Successfully fetched badges:', badges);
                break; // Success, exit the loop
                
            } catch (error) {
                console.warn(`Proxy service ${i + 1} failed:`, error.message);
                lastError = error;
                continue; // Try next proxy service
            }
        }
        
        if (!badges) {
            throw lastError || new Error('All proxy services failed');
        }
        
        if (!Array.isArray(badges)) {
            throw new Error('Invalid response format from Credly - expected array');
        }

        if (badges.length === 0) {
            showErrorMessage('No certifications found in your Credly profile. Please ensure your profile is public and has badges.');
            return;
        }

        // Filter certifications if specified
        let filteredBadges = badges;
        if (siteContent.credly.filterCertifications && siteContent.credly.allowedCertifications) {
            filteredBadges = badges.filter(badge => 
                siteContent.credly.allowedCertifications.some(allowed => 
                    badge.badge_template && badge.badge_template.name && 
                    badge.badge_template.name.includes(allowed)
                )
            );
        }

        // Display certifications
        displayCertifications(filteredBadges);
        
        // Hide loading
        if (loadingElement) loadingElement.style.display = 'none';
        
    } catch (error) {
        console.error('Error loading Credly certifications:', error);
        
        // Provide more specific error messages
        let errorMessage = 'Failed to load certifications. ';
        
        if (error.message.includes('fetch')) {
            errorMessage += 'Network error - please check your internet connection.';
        } else if (error.message.includes('404')) {
            errorMessage += 'User profile not found - please verify your Credly User ID.';
        } else if (error.message.includes('timeout')) {
            errorMessage += 'Request timed out - please try again.';
        } else {
            errorMessage += 'Please check your Credly User ID and try again.';
        }
        
        // Show error with suggestion to use manual certifications
        const finalErrorMessage = errorMessage + 
            (siteContent.credly.manualCertifications && siteContent.credly.manualCertifications.length > 0 
                ? ' You can enable manual certifications in config.js by setting useManualCertifications to true.' 
                : '');
        
        showErrorMessage(finalErrorMessage);
        
        if (loadingElement) loadingElement.style.display = 'none';
    }
}

/**
 * Display certifications in the grid
 */
function displayCertifications(badges) {
    const gridElement = document.getElementById('certifications-grid');
    if (!gridElement) return;

    if (badges.length === 0) {
        gridElement.innerHTML = '<p class="text-center">No certifications found. Please check your Credly profile.</p>';
        return;
    }

    gridElement.innerHTML = '';
    
    badges.forEach((badge, index) => {
        const certificationCard = createCertificationCard(badge);
        certificationCard.style.animationDelay = `${index * 0.1}s`;
        gridElement.appendChild(certificationCard);
    });
}

/**
 * Create a certification card element
 */
function createCertificationCard(badge) {
    const card = document.createElement('div');
    card.className = 'certification-card fade-in';
    
    // Format the issued date
    const issuedDate = badge.issued_at_date ? 
        new Date(badge.issued_at_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
        }) : 'Date not available';
    
    // Construct the public URL
    const publicUrl = `https://www.credly.com/badges/${badge.id}/public_url`;
    
    // Get certification name and description
    const certName = badge.badge_template ? badge.badge_template.name : badge.name;
    const certDescription = badge.description || '';
    
    card.innerHTML = `
        <div class="certification-image">
            <img src="${badge.image_url}" alt="${certName}" loading="lazy">
        </div>
        <h3 class="certification-name">${certName}</h3>
        <p class="certification-date">Issued: ${issuedDate}</p>
        ${certDescription ? `<p class="certification-description">${certDescription}</p>` : ''}
        <a href="${publicUrl}" class="certification-link" target="_blank" rel="noopener">
            <i class="fas fa-external-link-alt"></i>
            View Credly Badge
        </a>
    `;
    
    return card;
}

/**
 * Show error message for certifications
 */
function showErrorMessage(message) {
    const errorElement = document.getElementById('certifications-error');
    if (errorElement) {
        errorElement.style.display = 'block';
        errorElement.querySelector('p').textContent = message;
    }
}

/**
 * Initialize contact form
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Note: This is a static form. For production use, you'll need to implement
        // a backend service or use a service like Formspree, Netlify Forms, etc.
        alert(siteContent.contact.successMessage);
        
        // Reset form
        contactForm.reset();
    });
}

/**
 * Initialize scroll effects
 */
function initializeScrollEffects() {
    // Add fade-in animation to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .certification-card');
    animateElements.forEach(el => observer.observe(el));
}

/**
 * Load profile picture
 */
function loadProfilePicture() {
    const profilePicture = document.getElementById('profile-picture');
    const defaultIcon = document.getElementById('default-avatar-icon');
    
    if (!profilePicture || !siteContent.personalInfo) return;
    
    const pictureUrl = siteContent.personalInfo.profilePicture;
    
    if (pictureUrl && pictureUrl.trim() !== '') {
        // Create a new image to test if the URL is valid
        const testImage = new Image();
        
        testImage.onload = function() {
            // Image loaded successfully
            profilePicture.src = pictureUrl;
            profilePicture.style.display = 'block';
            if (defaultIcon) {
                defaultIcon.style.display = 'none';
            }
        };
        
        testImage.onerror = function() {
            // Image failed to load, show default icon
            console.warn('Profile picture failed to load:', pictureUrl);
            profilePicture.style.display = 'none';
            if (defaultIcon) {
                defaultIcon.style.display = 'block';
            }
        };
        
        testImage.src = pictureUrl;
    } else {
        // No profile picture configured, show default icon
        profilePicture.style.display = 'none';
        if (defaultIcon) {
            defaultIcon.style.display = 'block';
        }
    }
}

/**
 * Update social links in footer
 */
function updateSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    if (siteContent.footer && siteContent.footer.socialLinks) {
        siteContent.footer.socialLinks.forEach((link, index) => {
            if (socialLinks[index]) {
                socialLinks[index].href = link.url;
                socialLinks[index].innerHTML = `<i class="${link.icon}"></i>`;
            }
        });
    }
}

/**
 * Utility function to update element content
 */
function updateElement(elementId, content) {
    const element = document.getElementById(elementId);
    if (element && content) {
        element.textContent = content;
    }
}

/**
 * Utility function to update element HTML content
 */
function updateElementHTML(elementId, content) {
    const element = document.getElementById(elementId);
    if (element && content) {
        element.innerHTML = content;
    }
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Add loading state management
 */
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.opacity = '0.5';
        element.style.pointerEvents = 'none';
    }
}

function hideLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }
}

/**
 * Error handling utility
 */
function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    
    // You can add more sophisticated error handling here
    // For example, sending errors to a logging service
}

/**
 * Debounce utility for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadCredlyCertifications,
        createCertificationCard,
        createProjectCard,
        createSkillCategory
    };
}
