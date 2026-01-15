const { execSync } = require('child_process');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const dataDir = path.join(__dirname, '..', '_data');

// Ensure directories exist
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

// Clean old hashed files
fs.readdirSync(distDir)
  .filter(f => f.match(/^output\.[a-f0-9]+\.css$/))
  .forEach(f => fs.unlinkSync(path.join(distDir, f)));

// Build CSS with Tailwind
execSync('npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify', {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..')
});

// Generate hash from content
const cssContent = fs.readFileSync(path.join(distDir, 'output.css'));
const hash = crypto.createHash('md5').update(cssContent).digest('hex').slice(0, 8);

// Rename file with hash
const hashedFilename = `output.${hash}.css`;
fs.renameSync(
  path.join(distDir, 'output.css'),
  path.join(distDir, hashedFilename)
);

// Write to Jekyll data file
fs.writeFileSync(
  path.join(dataDir, 'assets.json'),
  JSON.stringify({ css: `/dist/${hashedFilename}` }, null, 2)
);

console.log(`Built: ${hashedFilename}`);
