Widget integration

This folder consumes the shared widget from the submodule `../portfolio-chatbot-widget`.

To sync the latest assets into this folder:

    bash sync-widget.sh

Ensure the submodule is initialized and updated before syncing.
# Widget Submodule

This directory is intended for widget code included as a git submodule.

- Place or link the chatbot widget repository here.
- Do not edit widget code directly in this folder; update via submodule commands.

Example usage:
```
git submodule add <widget-repo-url> frontend/widget
```
