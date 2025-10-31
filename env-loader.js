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
        // Minimal safe defaults for local dev; production should inject real values at build time
        this.env.CHATBOT_API = this.env.CHATBOT_API || '';
        this.env.CONTACT_FORM_URL = this.env.CONTACT_FORM_URL || '';
        this.env.CREDLY_USER_ID = this.env.CREDLY_USER_ID || '';
        this.env.CONTACT_EMAIL = this.env.CONTACT_EMAIL || '';
        this.env.CONTACT_PHONE = this.env.CONTACT_PHONE || '';
        this.env.SOCIAL_LINKEDIN = this.env.SOCIAL_LINKEDIN || '';
        this.env.SOCIAL_GITHUB = this.env.SOCIAL_GITHUB || '';
        this.env.SOCIAL_TWITTER = this.env.SOCIAL_TWITTER || '';
        this.env.GITHUB_REPO_URL = this.env.GITHUB_REPO_URL || '';
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