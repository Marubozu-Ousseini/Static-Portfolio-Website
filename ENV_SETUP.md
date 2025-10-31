# Environment Variables Setup

This project uses environment variables to manage sensitive information and configuration. Follow these steps to set up your environment properly.

## Quick Setup

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** with your actual values:
   ```bash
   nano .env  # or use your preferred editor
   ```

3. **Never commit `.env` to version control** - it's already in `.gitignore`

## Local development (important)

Opening `index.html` directly with a file:// URL will break fetching `.env` and CORS to the API. Run a local web server instead:

```bash
cd static-portfolio-website
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Notes:
- The API Gateway is configured to allow CORS from `http://localhost:8000` (and 127.0.0.1). File:// origins are blocked by browsers.
- Ensure `.env` contains `CHATBOT_API=...` (your deployed endpoint). The `env-loader.js` will fetch it over HTTP when served locally.

## Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `CHATBOT_API` | Your chatbot API endpoint | `https://your-api.com/chat` |
| `CONTACT_FORM_URL` | Formspree or other form service URL | `https://formspree.io/f/YOUR_ID` |
| `CREDLY_USER_ID` | Your Credly user ID for certificates | `your-user-id.12345` |
| `CONTACT_EMAIL` | Your contact email address | `your.email@example.com` |
| `CONTACT_PHONE` | Your phone number | `+1(xxx) xxx-xxxx` |

### Social Media Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SOCIAL_LINKEDIN` | LinkedIn profile URL | `https://linkedin.com/in/yourprofile` |
| `SOCIAL_GITHUB` | GitHub profile URL | `https://github.com/yourusername` |
| `SOCIAL_TWITTER` | Twitter profile URL | `https://twitter.com/yourhandle` |

### Asset Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GITHUB_REPO_URL` | Base URL for GitHub raw files | `https://github.com/user/repo/raw/main` |

## How It Works

### Static Site Environment Loading

Since this is a static site, environment variables are loaded using a custom `env-loader.js` script that:

1. **Attempts to load from `.env` file** (if accessible via HTTP)
2. **Falls back to default values** if `.env` is not available
3. **Provides a global `getEnv()` function** for accessing variables

### Usage in Code

```javascript
// Get an environment variable
const apiUrl = window.getEnv('CHATBOT_API');

// Used in config.js
email: window.getEnv ? window.getEnv('CONTACT_EMAIL') : "default@example.com"
```

## Security Best Practices

### ✅ Do's
- Keep `.env` file in your `.gitignore`
- Use `.env.example` for documentation
- Set real values only in your local `.env`
- Use build-time environment variables in production

### ❌ Don'ts
- Never commit `.env` to version control
- Don't put sensitive data in JavaScript files
- Don't expose API keys in client-side code
- Don't use production secrets in development

## Production Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

For production deployments, set environment variables in your hosting platform:

#### Netlify
1. Go to Site Settings → Environment Variables
2. Add each variable and its value
3. Redeploy your site

#### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables for Production environment
3. Redeploy

#### GitHub Pages
Since GitHub Pages doesn't support server-side environment variables:
1. Use GitHub Actions to build your site
2. Set secrets in repository settings
3. Use build-time replacement

### Build-Time Replacement

For maximum security, you can replace environment variables at build time:

```bash
# Example build script
#!/bin/bash
sed -i "s/{{CHATBOT_API}}/$CHATBOT_API/g" config.js
sed -i "s/{{CONTACT_EMAIL}}/$CONTACT_EMAIL/g" config.js
```

## Troubleshooting

### Environment Variables Not Loading
1. Check that `env-loader.js` is included before `config.js`
2. Verify `.env` file format (no spaces around `=`)
3. Check browser console for loading errors

### CORS Issues with .env File
If `.env` can't be loaded via HTTP:
1. The fallback defaults will be used
2. Set variables via build process instead
3. Use hosting platform environment variables

### Values Not Updating
1. Clear browser cache
2. Check that `window.getEnv` is available
3. Verify variable names match exactly

## Example .env File

```bash
# API Configuration
CHATBOT_API=https://your-chatbot-api.amazonaws.com/prod/chat
CONTACT_FORM_URL=https://formspree.io/f/your-form-id

# Personal Information
CREDLY_USER_ID=your-credly-id.12345
CONTACT_EMAIL=your.email@example.com
CONTACT_PHONE=+1(555) 123-4567

# Social Media
SOCIAL_LINKEDIN=https://linkedin.com/in/yourprofile
SOCIAL_GITHUB=https://github.com/yourusername
SOCIAL_TWITTER=https://twitter.com/yourhandle

# Assets
GITHUB_REPO_URL=https://github.com/yourusername/yourrepo/raw/main
```

## Support

If you encounter issues with environment variable setup:
1. Check the browser console for errors
2. Verify your `.env` file format
3. Ensure all required variables are set
4. Test with the fallback values first