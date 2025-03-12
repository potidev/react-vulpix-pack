const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const successEmoji = '✅';
const folderEmoji = '📂';
const fileEmoji = '📄';
const cleanEmoji = '🧹';

const FULL_LOG = false;

const PROJECT_ROOT = path.join(__dirname, '../'); // Root of the project
const DIST_FOLDER = path.join(PROJECT_ROOT, 'dist'); // Path to the dist folder
const IMPORT_REGEX = /@use\s+['"]([^'"]*\/)?variables\.module\.scss['"]\s+as\s+\*;/g;

function formatPath(path) {
  // Divida o caminho pelo separador '\'
  const parts = path.split('\\');
  
  // Pegue os dois últimos segmentos
  const lastTwo = parts.slice(-2);
  
  // Junte-os com o símbolo ' > '
  return lastTwo.join(' > ');
}

let filesProcessed = 0;

function cleanDefaultImports(dir) {
  FULL_LOG && console.log(chalk.blueBright(`${folderEmoji} Checking folder: ${dir}`));

  const files = fs.readdirSync(dir);
  let foundSomething = false;

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      FULL_LOG && console.log(chalk.yellow(`${folderEmoji} Entering subdirectory: ${file}`));
      cleanDefaultImports(filePath);
    } else if (file.endsWith('.module.scss')) {
      foundSomething = true;
      filesProcessed++;

      FULL_LOG && console.log(chalk.cyan(`${fileEmoji} Processing file: ${file}`));
      const content = fs.readFileSync(filePath, 'utf8');
      const updatedContent = content.replace(IMPORT_REGEX, '').trim();

      if (content !== updatedContent) {
        console.log(chalk.green(`${cleanEmoji} Cleaning Sass variables imports in: ${formatPath(dir)} > ${file}}`));
        fs.writeFileSync(filePath, updatedContent, 'utf8');
      } else {
        FULL_LOG && console.log(chalk.gray(`⚪ No Sass variables imports to clean in: ${file}`));
      }
    }
  }

  if (!foundSomething) {
    FULL_LOG && console.log(chalk.gray(`⚪ No .module.scss files found in: ${dir}`));
  }
}

console.log(chalk.bold.greenBright('🚀 Starting Sass variables import cleanup script...'));
cleanDefaultImports(DIST_FOLDER);

if (filesProcessed === 0) {
  console.log(chalk.redBright(`❌ No .module.scss files found to process in: ${DIST_FOLDER} or its subdirectories.`));
} else {
  console.log(chalk.bold.green(`${successEmoji} Cleanup complete! ${filesProcessed} file(s) processed.`));
}
