const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const readline = require('readline');

// Caminho do README.md
const readmePath = path.resolve(__dirname, '../README.md');

// Cria interface para entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para atualizar a versão no README.md
function updateReadmeVersion(version) {
  try {
    // Lê o conteúdo do README.md
    const readmeContent = fs.readFileSync(readmePath, 'utf8');

    // Expressão regular para encontrar e substituir a versão
    const updatedContent = readmeContent.replace(
      /\[!\[\]\(https:\/\/img\.shields\.io\/badge\/Beta-([\d.]+)-purple\)\]\(https:\/\/www\.npmjs\.com\/package\/@potidev\/react-vulpix-pack\)/,
      `[![](https://img.shields.io/badge/Beta-${version}-purple)](https://www.npmjs.com/package/@potidev/react-vulpix-pack)`
    );

    // Sobrescreve o arquivo README.md com a nova versão
    fs.writeFileSync(readmePath, updatedContent, 'utf8');
    console.log(chalk.greenBright(`✨ Version updated to ${chalk.bold(version)} in README.md!`));
    console.log(chalk.blue('📘  Check the README.md to confirm the changes.'));
  } catch (error) {
    console.error(chalk.red('❌  Error updating README.md:', error.message));
    process.exit(1);
  }
}

// Pergunta ao usuário pela nova versão
function askForVersion() {
  console.log(chalk.yellow('⚙️  Welcome to the version updater!'));
  rl.question(chalk.cyan('🚀  Please enter the new version (e.g., 0.0.20): '), (version) => {
    if (!/^\d+\.\d+\.\d+$/.test(version)) {
      console.log(chalk.red('❌  Invalid version format. Use the format x.x.x.'));
      rl.close();
      return;
    }

    updateReadmeVersion(version);
    rl.close();
  });
}

// Inicia o processo
askForVersion();
