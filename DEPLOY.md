GitHub Pages deployment

Overview
- This app uses Next.js static export via `output: "export"`.
- Build artifacts emit to the `out/` directory and are compatible with GitHub Pages.

Build locally
- Install deps: `npm i`
- Build + add `.nojekyll`: `npm run export`
- Preview `out/` folder with any static server if desired.

Project Pages (repo.github.io/<repo>)
- Set env var before build so paths work under a subfolder:
  - PowerShell: `$env:NEXT_PUBLIC_BASE_PATH = "/andrewkim_resume_2025"`
  - bash/zsh: `export NEXT_PUBLIC_BASE_PATH="/andrewkim_resume_2025"`
- Then run: `npm run export`
- Publish the `out/` folder to the `gh-pages` branch and enable Pages for that branch.

User/Org Pages (username.github.io)
- No base path needed. Just run: `npm run export`
- Publish the `out/` folder to the `main` (or `gh-pages`) branch configured for Pages.

Notes
- Images are unoptimized and all routes use trailing slashes for static hosting compatibility.
- Contact form is static (mailto) to avoid server/API requirements on Pages.

