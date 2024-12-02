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

    // Iterate over all items in the folder
    for (const file of files) {
        const filePath = nodePath.join(folderPath, file);

        // Skip if the file is a directory and matches a category name
        if (fs.statSync(filePath).isDirectory() && Object.keys(categories).includes(file)) {
            console.log(`${chalk.blue('🔍 Skipped category folder:')} ${chalk.green(file)}`);
            continue;
        }

        const ext = nodePath.extname(file).toLowerCase();
        const category = Object.keys(categories).find((cat) =>
            categories[cat].includes(ext)
        ) || 'others';

        const categoryPath = nodePath.join(folderPath, category);

        // Ensure the category folder exists
        fs.ensureDirSync(categoryPath);

        // Move the file to the appropriate category folder
        fs.moveSync(
            filePath,
            nodePath.join(categoryPath, file),
            { overwrite: true }
        );

        console.log(
            `${chalk.yellow('📁 Moved:')} ${chalk.cyan(file)} ${chalk.magenta('->')} ${chalk.green(category + '/')}`
        );
    }


    console.log(chalk.greenBright('✅ File organization completed successfully! 🎉'));
}