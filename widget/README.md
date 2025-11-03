## Chatbot widget (Sensei)

This folder holds the embedded chatbot widget used by the site. It is sourced from the shared repo `../portfolio-chatbot-widget` and can be synced locally.

### Sync the widget assets

Run the helper script to copy the latest widget files:

```bash
bash sync-widget.sh
```

Ensure the shared widget repo is present and up to date at `../portfolio-chatbot-widget`.

### Embedding

Add the stylesheet and script to your HTML (paths assume this repo’s structure):

```html
<link rel="stylesheet" href="widget/chatbot-widget.css" />
<script defer src="env-loader.js"></script>
<script defer src="widget/chatbot-widget.js"></script>
```

The floating button (💬) will appear at the bottom-right of the page. Click it to open the chat.

### API configuration

The widget looks for the chatbot API endpoint in this order:

1. `window.CHATBOT_API`
2. `getEnv('CHATBOT_API')` provided by `env-loader.js`

Recommended: create a `.env` file at the project root with:

```
CHATBOT_API=https://<api-id>.execute-api.<region>.amazonaws.com/prod/chat
```

or set it directly:

```html
<script>window.CHATBOT_API = 'https://<api-id>.execute-api.<region>.amazonaws.com/prod/chat';</script>
```

### FAQ panel configuration

Clicking the “FAQ” button in the widget header toggles a panel of quick questions. You can customize these in `config.js`:

```js
window.siteContent.chatbot = window.siteContent.chatbot || {};
window.siteContent.chatbot.faqs = [
    'What are your key projects?',
    'What AI/Machine Learning projects have you worked on?',
    'What certifications do you have?',
    'How can I contact you?'
];
```

If no FAQs are provided, the widget uses a default list.

### Health check

The backend exposes `GET /status`. After deployment, verify connectivity with:

```bash
curl -sS https://<api-id>.execute-api.<region>.amazonaws.com/prod/status
```

Expected JSON includes `status: "ok"`, `region`, `modelId`, and the S3 bucket info used for RAG.
