const fs = require('fs');
const path = require('path');

function replaceScssWithCss(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      replaceScssWithCss(fullPath);
    } else if (fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      content = content.replace(/\.scss/g, '.css');
      fs.writeFileSync(fullPath, content, 'utf-8');
    }
  }
}

replaceScssWithCss(path.join(__dirname, '../dist'));
