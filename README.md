# Web Tutorials

A modern, scalable tutorial website built with Astro and hosted on GitHub Pages.

## Features

- 📚 **Content Collections** - Organized tutorials by category
- 🎨 **Modern Design** - Clean, responsive interface
- 🔍 **Search & Filter** - Find tutorials by difficulty and topic
- 📱 **Mobile-First** - Optimized for all devices
- ⚡ **Fast Performance** - Static site generation with Astro
- 🚀 **Auto-Deploy** - Automatic deployment to GitHub Pages

## Tech Stack

- **Astro** - Static site generator
- **Markdown** - Content authoring
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automatic deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tutorialwebsite.git
cd tutorialwebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Adding New Tutorials

### 1. Create a Markdown file

Create a new `.md` file in the appropriate content collection directory:

```
src/content/html-tutorials/my-new-tutorial.md
```

### 2. Add frontmatter

```markdown
---
title: "My New Tutorial"
description: "A brief description of what this tutorial covers."
difficulty: "beginner" # beginner, intermediate, advanced
readTime: "5 min read"
category: "HTML"
tags: ["basics", "elements"]
published: true
date: 2024-01-15
---

# My New Tutorial

Your tutorial content goes here...
```

### 3. Write your content

Use Markdown syntax to write your tutorial:

```markdown
## Section Title

Your content here...

```html
<code example>
```

### 4. Deploy

Push your changes to GitHub, and the site will automatically rebuild and deploy!

## Content Collections

Tutorials are organized into categories. Currently available:

- **HTML** - `src/content/html-tutorials/`

To add more categories, create the directory and add the collection definition to `src/content/config.ts`.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### Styling

- Main styles: `public/style.css`
- Component styles: `src/styles/`

### Layouts

- Base layout: `src/layouts/BaseLayout.astro`
- Tutorial layout: `src/layouts/TutorialLayout.astro`

### Components

- Reusable components: `src/components/`

## Analytics & Monetization

The site is configured for:

- **Google Analytics** - Replace `GA_MEASUREMENT_ID` in `BaseLayout.astro`
- **Google AdSense** - Replace `ca-pub-XXXXXXXXXX` in `BaseLayout.astro`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your tutorials
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).