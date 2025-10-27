# Static Portfolio Website

## Structure

- `index.html`, `app.js`, `styles.css`, `config.js` — Main site files (project root)
- `images/` — Image assets
- `widget/` — External widgets (e.g., chatbot) as submodule or local code
- `README.md`, `FORM_SETUP.md` — Documentation

## Widget Integration

If using a widget as a submodule:
```
git submodule add <widget-repo-url> widget
```

Update your HTML to reference widget assets from `widget/`.

## Notes
- There is currently no `frontend/` or `backend/` directory. All main files are in the project root.
- The `widget/` directory is present and contains the chatbot widget files.


