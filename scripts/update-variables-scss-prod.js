const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const vulpixPrefix = '$vulpix-';
const FULL_LOG = false;

const PROJECT_ROOT = path.join(__dirname, '../'); // Root of the project
const DIST_FOLDER = path.join(PROJECT_ROOT, 'dist'); // Path to the dist folder

const VARIABEL_REGEX = /\$(\w+[-\w]*)/g; // Regex to match any Sass variable

// Função para formatar o caminho dos arquivos
function formatPath(path) {
  const parts = path.split('\\');
  const lastTwo = parts.slice(-2);
  return lastTwo.join(' > ');
}

let filesProcessed = 0;

// Função para substituir variáveis no arquivo
function addVulpixPrefixToVariables(dir) {
  FULL_LOG && console.log(chalk.blueBright(`📂 Checking folder: ${dir}`));

  const files = fs.readdirSync(dir);
  let foundSomething = false;

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      FULL_LOG && console.log(chalk.yellow(`📂 Entering subdirectory: ${file}`));
      addVulpixPrefixToVariables(filePath);
    } else if (file.endsWith('.scss')) {
      foundSomething = true;
      filesProcessed++;

      FULL_LOG && console.log(chalk.cyan(`📄 Processing file: ${file}`));
      const content = fs.readFileSync(filePath, 'utf8');

      // Substituindo as variáveis com o prefixo
      const updatedContent = content.replace(VARIABEL_REGEX, (match, variableName) => {
        return `${vulpixPrefix}${variableName}`;
      }).trim();

      // Se o conteúdo mudou, reescreve o arquivo
      if (content !== updatedContent) {
        console.log(chalk.green(`🧹 Replacing Sass variables in: ${formatPath(dir)} > ${file}`));
        fs.writeFileSync(filePath, updatedContent, 'utf8');
      } else {
        FULL_LOG && console.log(chalk.gray(`⚪ No Sass variables to replace in: ${file}`));
      }
    }
  }

  if (!foundSomething) {
    FULL_LOG && console.log(chalk.gray(`⚪ No .scss files found in: ${dir}`));
  }
}

console.log(chalk.bold.greenBright('🚀 Starting Sass variable prefixing script...'));
addVulpixPrefixToVariables(DIST_FOLDER);

if (filesProcessed === 0) {
  console.log(chalk.redBright(`❌ No .scss files found to process in: ${DIST_FOLDER} or its subdirectories.`));
} else {
  console.log(chalk.bold.green(`✅ Prefixing complete! ${filesProcessed} file(s) processed.`));
}
