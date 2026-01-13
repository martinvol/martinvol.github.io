# Martin Volpe's Personal Website

This is my personal website, built with Jekyll and Tailwind CSS, and deployed automatically via GitHub Actions.

## Tech Stack

- **Jekyll** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting

## Features

This repository demonstrates how to:
- Build Jekyll sites dynamically with Tailwind CSS
- Use GitHub Actions to build and deploy to GitHub Pages
- Avoid committing build artifacts (CSS is generated in CI)
- Set up local development with live reload
- Structure a Jekyll site with reusable layouts and includes

## Local Development

```bash
# Install dependencies
bundle install
npm install

# Run development server (with live reload)
npm run dev
```

Visit `http://localhost:4000` to see your changes in real-time.

## How It Works

1. **Tailwind CSS** scans Jekyll templates for utility classes
2. **Build process** (in GitHub Actions):
   - Installs Ruby and Node.js dependencies
   - Builds Tailwind CSS from source
   - Runs Jekyll to generate static site
   - Deploys to GitHub Pages
3. **No local builds required** - just commit and push!

## Project Structure

```
├── _layouts/          # Jekyll layouts
├── _includes/         # Reusable components (header, footer)
├── _config.yml        # Jekyll configuration
├── src/input.css      # Tailwind source
├── dist/              # Generated CSS (gitignored)
├── .github/workflows/ # CI/CD pipeline
└── index.html         # Pages with Jekyll frontmatter
```

## Using This as a Template

Feel free to fork this repository as a starting point for your own Jekyll + Tailwind site with GitHub Actions deployment!

---

Contact: public@martinvol.pe
