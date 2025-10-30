// Environment Configuration Loader
// This file loads environment variables from .env file for static sites

class EnvLoader {
    constructor() {
        this.env = {};
        this.loadEnvironment();
    }

    async loadEnvironment() {
        try {
            // For static sites, we'll load from a local .env file if available
            // In production, these should be set via build-time environment variables
            const response = await fetch('.env');
            if (response.ok) {
                const envText = await response.text();
                this.parseEnvFile(envText);
            }
        } catch (error) {
            console.warn('No .env file found or accessible. Using default values.');
        }
        
        // Fallback to inline values if .env is not available
        this.setDefaults();
    }

    parseEnvFile(envText) {
        const lines = envText.split('\n');
        lines.forEach(line => {
            line = line.trim();
            if (line && !line.startsWith('#')) {
                const [key, ...valueParts] = line.split('=');
                const value = valueParts.join('=').trim();
                this.env[key] = value;
            }
        });
    }

    setDefaults() {
        // Set default values if not found in .env
        if (!this.env.CHATBOT_API) {
            this.env.CHATBOT_API = 'https://a53uyqa4oc.execute-api.us-east-1.amazonaws.com/prod/chat';
        }
        if (!this.env.CONTACT_FORM_URL) {
            this.env.CONTACT_FORM_URL = 'https://formspree.io/f/mblzpwqr';
        }
        if (!this.env.CREDLY_USER_ID) {
            this.env.CREDLY_USER_ID = 'ousseini-oumarou.fa8d6a81';
        }
        if (!this.env.CONTACT_EMAIL) {
            this.env.CONTACT_EMAIL = 'meandyougtn@gmail.com';
        }
        if (!this.env.CONTACT_PHONE) {
            this.env.CONTACT_PHONE = '+1(917) 672-6792';
        }
        if (!this.env.SOCIAL_LINKEDIN) {
            this.env.SOCIAL_LINKEDIN = 'https://www.linkedin.com/in/marubozu';
        }
        if (!this.env.SOCIAL_GITHUB) {
            this.env.SOCIAL_GITHUB = 'https://github.com/Marubozu-Ousseini';
        }
        if (!this.env.SOCIAL_TWITTER) {
            this.env.SOCIAL_TWITTER = 'https://twitter.com/O%27Marubozu%20Sensei';
        }
        if (!this.env.GITHUB_REPO_URL) {
            this.env.GITHUB_REPO_URL = 'https://github.com/Marubozu-Ousseini/Static-Portfolio-Website/raw/main';
        }
    }

    get(key) {
        return this.env[key] || '';
    }

    getAll() {
        return { ...this.env };
    }
}

// Create global instance
window.envLoader = new EnvLoader();

// Helper function to get environment variables
window.getEnv = (key) => window.envLoader.get(key);