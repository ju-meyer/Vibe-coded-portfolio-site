# Stackbridge Portfolio (React + Vite)

## Preview options

Use one of the following commands to preview the portfolio without opening it in VS Code:

- `npm run dev:preview`
  - Starts the Vite dev server on `http://localhost:4173`.
  - Best for live editing/development.

- `npm run build && npm run preview`
  - Builds the production bundle, then serves it on `http://localhost:4173`.
  - Best for checking the production preview.

Both preview scripts are configured with `--host 0.0.0.0` so they can be reached from container/dev environments more easily.

## Screenshot workflow

### Local screenshot
1. Install dependencies: `npm install`
2. Build and start preview: `npm run build && npm run preview`
3. In another terminal, capture screenshot: `npm run screenshot`

This will save a full-page screenshot to `artifacts/homepage.png`.

You can also provide custom values:
- `SCREENSHOT_URL=http://127.0.0.1:4173 npm run screenshot`
- `SCREENSHOT_OUTPUT=artifacts/custom-home.png npm run screenshot`

### GitHub Actions workflow
A GitHub Actions workflow is included at `.github/workflows/preview-screenshot.yml`.
It automatically:
- Installs dependencies
- Builds the app
- Starts the preview server
- Captures `artifacts/homepage.png`
- Uploads the image as a downloadable build artifact
