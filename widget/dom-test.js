// Minimal test for DOMContentLoaded and widget logic
// This file will log when DOMContentLoaded fires and when the widget is initialized

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded fired');
  if (window.__CHATBOT_WIDGET_LOADED) {
    console.log('Widget already loaded');
  } else {
    console.log('Widget not loaded yet');
  }
});
