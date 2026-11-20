# Shreyas Yandapalli — Portfolio

A personal portfolio for **Shreyas Yandapalli**, a Computer Science student, full-stack developer, and problem solver. The site brings projects, experience, education, skills, achievements, campus activities, and contact links into one responsive, motion-rich experience.

## Highlights

- A calmer, robot-guide-inspired landing page that directs visitors to the content they want.
- Five direct destination links for projects, experience, skills, communities, and contact.
- A conventional, responsive project grid instead of a forced horizontal scroll journey.
- Subtle scroll reveals, an animated experience timeline, and a gradient reading-progress indicator.
- Responsive navigation with a mobile menu.
- Projects linked to their GitHub repositories, plus downloadable résumé and internship certificates.
- Reduced-motion support for visitors who prefer less animation.
- Semantic page sections, keyboard focus indicators, descriptive metadata, and accessible link labels.

## Technology

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Build and development server | Vite 7 |
| Animation | Framer Motion |
| Icons | React Icons |
| Styling | CSS with responsive layouts and custom properties |
| Language | JavaScript (ES modules) |

This project intentionally uses a lightweight Vite setup: it is a static portfolio, so a server-rendered framework or a separate backend would add complexity without improving its current needs.

## Requirements

- Node.js 20.19+ or 22.12+ (required by Vite 7)
- npm (included with Node.js)

Check your installed versions:

```bash
node --version
npm --version
```

## Run locally

From the project directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The development server supports hot module replacement, so edits appear in the browser as you work.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally for a final check. Run the build first. |
| `npm run lint` | Check the project with ESLint. |

Example production check:

```bash
npm run lint
npm run build
npm run preview
```

## Project structure

```text
.
├── index.html                 # HTML entry point and SEO/social metadata
├── public/
│   └── certificates/          # Publicly served internship certificates
├── src/
│   ├── App.jsx                # Portfolio content, data, and interactions
│   ├── index.css              # Design system, animation, and responsive styles
│   ├── main.jsx               # React application entry point
│   └── assets/
│       ├── Shreyas_Resume.pdf # Résumé linked from the hero
│       └── *.png              # Community and coding-platform imagery
├── eslint.config.js           # ESLint configuration
├── package.json               # Dependencies and project scripts
└── vite.config.js             # Vite configuration
```

## Updating portfolio content

Most portfolio content is maintained as data near the top of [`src/App.jsx`](./src/App.jsx):

- `projects` — project title, summary, technologies, GitHub URL, and card accent.
- `experience` — internship role, dates, description, and certificate URL.
- `skills` — technology labels.
- `achievements` — contest results and other milestones.
- `communities` — student organizations and the corresponding image assets.
- `profiles` — competitive-programming profile URLs.

Update those entries to change the page content. Use real project URLs and verified details; cards and profile links open in a new tab.

### Résumé and certificates

- Replace `src/assets/Shreyas_Resume.pdf` to update the résumé. Keep the same filename or update its import in `src/App.jsx`.
- Internship certificates are served from `public/certificates/`. Keep the existing filenames or update the `certificate` URLs in the `experience` data.
- Community logos are stored in `src/assets/` and imported in `src/App.jsx`.

### Styling and animation

The visual system and responsive breakpoints live in [`src/index.css`](./src/index.css). Shared colors, typography, and other design tokens are defined under `:root`. The robot illustration is drawn with CSS; guide messaging, destination links, reveal effects, and the scroll-linked timeline are implemented in `src/App.jsx`. Animation is reduced when the operating system's reduced-motion preference is enabled.

The font families are loaded from Google Fonts in the stylesheet; a system sans-serif fallback is provided. If self-hosted fonts are preferred, replace the `@import` in `src/index.css` and keep the fallback fonts.

## Deployment

Build the static site:

```bash
npm run build
```

Deploy the contents of `dist/` to any static hosting provider (for example, GitHub Pages, Netlify, Vercel, or Cloudflare Pages). Configure the provider to use:

- **Build command:** `npm run build`
- **Output directory:** `dist`

The app uses client-side in-page anchors rather than application routes, so no single-page-app route fallback is required. If deploying to a project subpath rather than a domain root, set Vite's `base` option in `vite.config.js` to the deployment path and verify asset and certificate URLs.

## Accessibility and performance notes

- Navigation, content sections, cards, and lists use semantic HTML.
- The mobile menu communicates its expanded state and supports keyboard interaction.
- Decorative graphics are hidden from assistive technology; community image alternatives are empty because their adjacent text supplies the organization names.
- Focus indicators are visible for keyboard users.
- Motion is disabled or minimized in response to `prefers-reduced-motion`.
- Images below the first screen are lazy-loaded, and Vite emits a static optimized build.

## License

This repository is a personal portfolio. Contact the author before reusing personal details, résumé content, or project materials.
