const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const log = console.log;

function replaceScssWithCss(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      log(chalk.blue(`📂 Entering directory: ${file}`));
      replaceScssWithCss(fullPath);
    } else if (fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('.scss')) {
        content = content.replace(/\.scss/g, '.css');
        fs.writeFileSync(fullPath, content, 'utf-8');
        log(chalk.green(`✅ Updated imports in: ${file}`));
      }
    }
  }
}

log(chalk.yellow('🚀 Starting import replacement process...'));
const targetDir = path.join(__dirname, '../dist');
replaceScssWithCss(targetDir);
log(chalk.magenta('🎉 All .scss imports replaced with .css!'));
