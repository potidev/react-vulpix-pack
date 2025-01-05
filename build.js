// Importa o módulo necessário para executar comandos no terminal
const { execSync } = require('child_process');
const chalk = require('chalk');

let total = 0;
let step = 1;

const clearBuild = () => {
  console.log(chalk.blueBright(`🧹 ${step}/${total} Cleaning build folder...`));
  console.log();
  execSync('npm run clear-build', { stdio: 'inherit' });
  console.log();
}

const buildTypescript = () => {
  console.log(chalk.blueBright(`🔨 ${step}/${total} Building Typescript (Tsup)...`));
  console.log();
  execSync('npm run build-tsup', { stdio: 'inherit' });
  console.log();
}

const run = (commands) => {
  total = commands.length;
  commands.forEach(command => {
    command();
    step++;
  });
}

try {
  console.log(chalk.bold.greenBright('🚀 Starting build script...'));

  run([
    clearBuild, 
    buildTypescript,
  ]);

  console.log(chalk.bold.green(`🎉 Build complete!`));
  console.log();
} catch (error) {
  console.error('Erro durante o processo de build:', error.message);
  process.exit(1); // Finaliza o script com código de erro
}
