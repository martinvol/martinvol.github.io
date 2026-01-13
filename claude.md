# Claude Context - martinvol.github.io

This file contains important context about this project for future Claude Code sessions.

## Project Overview

Personal website for Martin Volpe, built with Jekyll and Tailwind CSS, deployed via GitHub Actions to GitHub Pages.

## Technical Stack

- **Static Site Generator**: Jekyll 4.3
- **CSS Framework**: Tailwind CSS 3.4
- **Build System**: GitHub Actions
- **Deployment**: GitHub Pages
- **Custom Domain**: martinvol.pe

## Important Preferences

### Build Process
- **Do NOT build locally before committing** - all builds happen in CI
- The `dist/` folder is gitignored and generated during CI
- GitHub Actions builds both Tailwind CSS and Jekyll on every push to main
- `.nojekyll` file must be present to prevent GitHub from running its own Jekyll build

### Project Structure
```
├── _layouts/          # Jekyll layouts
│   └── default.html   # Base layout with header/footer includes
├── _includes/         # Reusable components
│   ├── header.html    # Navigation bar (Home, Blog links on right)
│   └── footer.html    # Copyright notice
├── src/
│   └── input.css      # Tailwind CSS source
├── dist/              # Generated CSS (gitignored, built in CI)
│   └── output.css
├── index.html         # Home page (uses Jekyll frontmatter)
└── _config.yml        # Jekyll configuration
```

### Site Structure Preferences
- **Header**: Horizontal navigation bar with links aligned to the right
- **Navigation links**: Home, Blog (to martinvol.com)
- **Footer**: Simple copyright notice with current year
- **Name**: Martin Volpe (display name) / martinvol (GitHub username)

### Local Development
- Use `npm run dev` to run both Tailwind watch and Jekyll serve with live reload
- Site runs on `http://localhost:4000`
- Requires Ruby 3.2+ (managed with rbenv)

## Key Files

### `.github/workflows/deploy.yml`
CI pipeline that:
1. Sets up Ruby and Node.js
2. Installs dependencies (bundle and npm)
3. Builds Tailwind CSS (`npm run build`)
4. Builds Jekyll site (`bundle exec jekyll build`)
5. Copies CNAME and .nojekyll to _site
6. Deploys to GitHub Pages

### `tailwind.config.js`
Configured to scan Jekyll layouts, includes, and posts for Tailwind classes.

### `_config.yml`
Jekyll configuration excluding build artifacts (node_modules, src, etc.)

## GitHub Pages Setup

**Critical**: In repository Settings → Pages → Build and deployment:
- Source must be set to **"GitHub Actions"**
- This prevents GitHub from running automatic Jekyll builds that would conflict with our custom workflow

## Common Commands

```bash
# Local development (auto-reload)
npm run dev

# Build CSS only
npm run build

# Watch CSS (auto-rebuild on changes)
npm run watch:css

# Serve Jekyll only
npm run serve

# Install dependencies
bundle install    # Ruby/Jekyll gems
npm install       # Node packages
```

## Notes for Future Sessions

- The site uses a custom domain (martinvol.pe) configured via CNAME file
- All HTML should use Jekyll layouts - avoid standalone HTML files
- Tailwind classes are preferred over custom CSS
- Keep navigation simple and minimal
- The build process is fully automated - don't commit built files
