# Md Faiz Khan — Portfolio

A responsive React + Vite portfolio with a personal portrait, selected AI/ML projects, project filters, research and education, technical skills, a downloadable CV, and contact options.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite (normally http://localhost:5173).

## Production build

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. The current Vite base is `/`; update it if deploying under a repository subpath.

## Update content

- `src/components/Home.jsx`: introduction, portrait, social links, highlights.
- `src/components/Projects.jsx`: selected projects, filters, details, and demo URLs.
- `src/components/About.jsx`: research experience, education, certifications.
- `src/components/Skills.jsx`: grouped technical skills.
- `src/components/Contact.jsx`: contact details and form behavior.
- `src/App.css` and `src/index.css`: responsive design and typography.
- `public/faiz-khan.jpeg`: supplied original portrait, cropped for display with CSS.
- `public/Faiz-Khan-CV.pdf`: supplied CV for download.

Content is based on the supplied CV and portfolio. The CYStar internship is dated January–July 2026. Project graphics are illustrative artwork, not screenshots of live applications.

## Contact form

The form retains the original Getform endpoint: `https://getform.io/f/awnygxqb`. It validates required fields and email format, prevents duplicate submissions, and displays success or failure based on the HTTP response. Confirm that this endpoint is active and connected to your inbox before publishing. Email and telephone links are available as alternatives.

## Verification

Production build passed. Browser checks covered desktop and mobile layouts, project filters and details, mobile navigation, image loading, and email validation. Live email delivery was not tested.
