// chatbot-widget.js - Standalone JavaScript (clean robust version)
(function () {
  try {
    // Avoid duplicate initialization
    if (document.getElementById('chatbot-btn')) {
      console.log('Chatbot widget already present.');
      return;
    }

    const api = window.CHATBOT_API || 'https://a53uyqa4oc.execute-api.us-east-1.amazonaws.com/prod/chat';

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
    btn.setAttribute('aria-label', 'Open chat');

