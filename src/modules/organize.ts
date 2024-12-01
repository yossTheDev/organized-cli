/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */

import chalk from "chalk";
import fs from 'fs-extra';
import *  as nodePath from 'node:path';

import { showHelpMessage } from "../messages/help.js";
import { categories } from "./categories.js";

export const organize = (path: string | undefined) => {
    // If no directory are provided, show app info
    if (!path) {
        showHelpMessage()
        return;
    }

    const folderPath = nodePath.resolve(path!);

    if (!fs.existsSync(folderPath)) {
        console.error(chalk.red(`❌ The folder "${folderPath}" does not exist.`));
        return;
    }

    console.log(chalk.blueBright('📂 Starting file organization...'));
    console.log(chalk.green(`🛠 Organizing files in: ${chalk.bold(folderPath)}`));

    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const ext = nodePath.extname(file).toLowerCase();
        const category = Object.keys(categories).find((cat) =>
            categories[cat].includes(ext)
        ) || 'others';

        const categoryPath = nodePath.join(folderPath, category);
        fs.ensureDirSync(categoryPath);
        fs.moveSync(
            nodePath.join(folderPath, file),
            nodePath.join(categoryPath, file),
            { overwrite: true }
        );

        console.log(
            `${chalk.yellow('📁 Moved:')} ${chalk.cyan(file)} ${chalk.magenta(
                '->'
            )} ${chalk.green(category + '/')}`
        );
    }

    console.log(chalk.greenBright('✅ File organization completed successfully! 🎉'));
}