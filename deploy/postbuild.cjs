const fs = require('fs');
const path = require('path');
const https = require('https');
const showdown = require('showdown');

const converter = new showdown.Converter();
converter.setFlavor('github');

const rootDir = path.resolve(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const readmePath = path.join(rootDir, 'README.md');
const templatePath = path.join(__dirname, 'index.html');
const outputPath = path.join(buildDir, 'index.html');
const cssUrl =
  'https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/github-markdown.css';
const cssPath = path.join(buildDir, 'github-markdown.css');

function ensureBuildDir() {
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }
}

function readFileSafe(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeFileSafe(filePath, content) {
  console.log('Writing file:', filePath);
  fs.writeFileSync(filePath, content, 'utf8');
}

function fetchCss(url, destPath) {
  console.log('Fetching CSS from:', url);
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download CSS: ${res.statusCode}`));
          return;
        }

        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          try {
            const cssContent = Buffer.concat(chunks).toString('utf8');
            writeFileSafe(destPath, cssContent);
            resolve();
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });
}

async function main() {
  ensureBuildDir();

  const markdown = readFileSafe(readmePath);
  const htmlContent = converter.makeHtml(markdown);

  const template = readFileSafe(templatePath);
  const finalHtml = template.replace('${markdownContent}', htmlContent);

  writeFileSafe(outputPath, finalHtml);
  await fetchCss(cssUrl, cssPath);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
