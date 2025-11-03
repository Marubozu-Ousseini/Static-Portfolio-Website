# Static Portfolio Website

## Structure

- `index.html`, `app.js`, `styles.css`, `config.js` — Main site files (project root)
- `images/` — Image assets
- `widget/` — External widgets (e.g., chatbot) as submodule or local code
- `README.md`, `FORM_SETUP.md` — Documentation

## Widget Integration (Submodule)

The chatbot widget is included as a git submodule in the `widget/` directory.

### How to Add as Submodule

```
git submodule add <widget-repo-url> widget
```

### How to Update Submodule

```
git submodule update --remote widget
```

### How to Initialize Submodules After Cloning

```
git submodule update --init --recursive
```

Update your HTML to reference widget assets from `widget/`.

## Notes
- There is currently no `frontend/` or `backend/` directory. All main files are in the project root.
- The `widget/` directory is present and contains the chatbot widget files.

## Chatbot widget setup

The site embeds a lightweight chatbot widget (Sensei) that talks to an AWS API (API Gateway + Lambda + Bedrock). The widget now includes:

- A header FAQ button that opens a panel of frequently asked questions
- Configurable FAQ items via `window.siteContent.chatbot.faqs` in `config.js`
- Lazy API resolution that works with `.env` (via `env-loader.js`) or a global `window.CHATBOT_API`

### 1) Include the assets

In `index.html`, ensure the CSS and JS are loaded (paths assume this repo’s layout):

```html
<link rel="stylesheet" href="widget/chatbot-widget.css" />
<script defer src="env-loader.js"></script>
<script defer src="widget/chatbot-widget.js"></script>
```

### 2) Configure the API endpoint

Preferred: add a `.env` file at the project root with:

```
CHATBOT_API=https://<api-id>.execute-api.<region>.amazonaws.com/prod/chat
```

The widget will read it via `env-loader.js` using `getEnv('CHATBOT_API')`. Alternatively, set it directly in a script tag:

```html
<script>window.CHATBOT_API = 'https://<api-id>.execute-api.<region>.amazonaws.com/prod/chat';</script>
```

### 3) Customize FAQ entries (optional)

Edit `config.js` to customize the list shown when clicking the FAQ button:

```js
window.siteContent.chatbot = window.siteContent.chatbot || {};
window.siteContent.chatbot.faqs = [
	'What are your key projects?',
	'What AI/Machine Learning projects have you worked on?',
	'What certifications do you have?',
	'How can I contact you?'
];
```

If not provided, sensible defaults are used.

## Health check (/status)

The backend exposes a simple health endpoint you can use to verify deployment and configuration:

- Method/Path: `GET /status`
- Example (replace with your API base):

```bash
curl -sS https://<api-id>.execute-api.<region>.amazonaws.com/prod/status
```

Example response:

```json
{
	"status": "ok",
	"region": "us-east-1",
	"modelId": "meta.llama3-8b-instruct-v1:0",
	"bucket": "portfolio-chatbot-data-prod",
	"prefix": "rag-data/",
	"time": "2025-11-01T23:54:07.711Z"
}
```

If this returns `status: ok`, the API, model ID, and S3 config are wired correctly.


