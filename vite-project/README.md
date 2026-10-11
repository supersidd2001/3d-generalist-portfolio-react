# Soham Shinde — 3D Artist Portfolio

A responsive portfolio for 3D generalist and environment artist Soham Shinde. It showcases selected modeling and environment projects, production disciplines, and an interactive Three.js viewport.

## Features

- Portfolio projects grouped by category, with project details and image galleries
- Interactive Three.js viewport with shaded, wireframe, and point-cloud modes, lighting presets, and auto-rotation
- Sections for skills, workflow, about, and contact information
- Responsive layout for desktop and mobile screens

## Tech stack

- React 19 and TypeScript
- Vite
- Three.js
- Bootstrap and Lucide React

## Getting started

Install a current version of Node.js and npm, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project structure

```text
public/assets/       Portfolio artwork and project images
src/components/      Page sections, project cards, modal, and 3D viewport
src/data/            Project, skill, and workflow content
src/App.tsx          Application layout
src/index.css        Global styles
```

## Project content

Project descriptions and gallery data are maintained in `src/data/projectsData.ts`. Local artwork is served from `public/assets/`; the project also references selected images hosted on ArtStation.

The contact form currently displays a client-side confirmation only. It does not send or store messages; use the listed email address or ArtStation link to contact the artist.

## Environment files

No environment variables are required to run this project. Local `.env` files are ignored by Git and should not be committed.
