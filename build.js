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

const buildColorsSass = () => {
  console.log(chalk.blueBright(`🔨 ${step}/${total} Building Sass Variables...`));
  console.log();
  execSync('npm run variables', { stdio: 'inherit' });
  console.log();
}

const buildTypescript = () => {
  console.log(chalk.blueBright(`🔨 ${step}/${total} Building Typescript...`));
  console.log();
  execSync('npx tsc', { stdio: 'inherit' });
  console.log();
}


const fixAliasImports = () => {
  console.log(chalk.blueBright(`⚙️  ${step}/${total} Fixing alias imports...`));
  console.log();
  execSync('npx tscpaths -p tsconfig.json -s ./src -o ./dist', { stdio: 'inherit' });
  console.log();
}

const buildSass = () => {
  console.log(chalk.blueBright(`🔨 ${step}/${total} Building Sass...`));
  console.log();
  execSync('npx sass --load-path=src/styles/sass src:dist --no-source-map', { stdio: 'inherit' });
  console.log();
}

const copySassFiles = () => {
  console.log(chalk.blueBright(`⚙️  ${step}/${total} Copping .module.scss files to build folder...`));
  console.log();
  execSync('npx copyfiles -u 1 \"src/**/*.module.scss\" dist', { stdio: 'inherit' });
  console.log();
}

const removeSassVariables = () => {
  console.log(chalk.blueBright(`⚙️  ${step}/${total} Removing Sass variables imports in build folder...`));
  console.log();
  execSync('npm run remove-variables-scss-imports', { stdio: 'inherit' });
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
    buildColorsSass, 
    buildTypescript,
    fixAliasImports,
    buildSass,
    copySassFiles,
    removeSassVariables,
  ]);

  console.log(chalk.bold.green(`🎉 Build complete!`));
  console.log();
} catch (error) {
  console.error('Erro durante o processo de build:', error.message);
  process.exit(1); // Finaliza o script com código de erro
}
