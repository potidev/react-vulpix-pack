import { generateVariablesDevFile, getVulpixSassAdditionalData } from '../src/config/sass/SassAdditionalData/getVulpixSassAdditionalData'
import fs from "fs";
import path from "path";
import chalk from 'chalk';

const successEmoji = '✅';
const cleanEmoji = '🧹';

const generateColorsFile = () => {
  try {
    const sassContent = generateVariablesDevFile();


    const filePath = path.resolve(__dirname, "../src/styles/sass/variables.module.scss");

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(chalk.yellow(`${cleanEmoji} Existing variables.module.scss file deleted.`));
    }

    // Crie o arquivo e escreva o conteúdo
    fs.writeFileSync(filePath, sassContent.trim(), "utf8");
    console.log(chalk.bold.green(`${successEmoji} File variables.module.scss created successfully!`));
  } catch (error) {
    console.error(chalk.red(`🚨 Error generating variables.module.scss: ${error}`));
  }
};

// Execute o script
console.log(chalk.yellow('🚀 Starting generate colors...'));
generateColorsFile();
console.log();
