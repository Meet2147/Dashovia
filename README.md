# Dashovia

Dashovia is a Vite + React frontend application.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app will usually be available at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Render deployment

This repository includes a `render.yaml` blueprint for deploying the app as a Render static site.

Render build settings:

- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
