/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default-member */

import { Command, Flags } from '@oclif/core';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'node:path';

export default class Organizer extends Command {
    static description = 'Organize files in a folder by type';

    static flags = {
        folder: Flags.string({
            char: 'f',
            description: 'Path to the folder to organize',
            required: true,
        }),
    };

    async run() {
        console.log(chalk.blueBright('📂 Starting file organization...'));
        const { flags } = await this.parse(Organizer);
        const folderPath = path.resolve(flags.folder);

        if (!fs.existsSync(folderPath)) {
            this.error(chalk.red(`❌ The folder "${folderPath}" does not exist.`));
        }

        const categories: Record<string, string[]> = {
            documents: ['.pdf', '.docx', '.txt', '.xlsx', '.pptx'],
            executables: ['.exe', '.dmg', '.sh', '.bat'],
            images: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
            others: [],
            videos: ['.mp4', '.mkv', '.avi', '.mov'],
        };

        this.log(chalk.green(`🛠 Organizing files in: ${chalk.bold(folderPath)}`));

        const files = fs.readdirSync(folderPath);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            const category = Object.keys(categories).find((cat) =>
                categories[cat].includes(ext)
            ) || 'others';

            const categoryPath = path.join(folderPath, category);
            fs.ensureDirSync(categoryPath);
            fs.moveSync(
                path.join(folderPath, file),
                path.join(categoryPath, file),
                { overwrite: true }
            );

            this.log(
                `${chalk.yellow('📁 Moved:')} ${chalk.cyan(file)} ${chalk.magenta(
                    '->'
                )} ${chalk.green(category + '/')}`
            );
        }

        this.log(chalk.greenBright('✅ File organization completed successfully! 🎉'));
    }
}
