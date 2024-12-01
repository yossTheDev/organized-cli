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
            required: false,
        }),
    };

    async run() {
        const { flags } = await this.parse(Organizer);


        // If no flags are provided, show app info
        if (!flags.folder) {
            this.log(chalk.blueBright("📦 Welcome to Organized CLI!"));
            this.log(chalk.greenBright(`
Organized helps you organize files in a folder by categorizing them into:
  📂 Documents, Images, Videos, Audio, Archives, Code, Executables, and Others.

Usage:
  organizer -f <path/to/folder>

Options:
  -f, --folder    Specify the folder to organize
  --help          Show this help message

Examples:
  organizer -f ./my-folder
  organizer --folder ./downloads

Enjoy organizing your files! 🚀
            `));
            return;
        }

        const folderPath = path.resolve(flags.folder!);
        console.log(chalk.blueBright('📂 Starting file organization...'));

        if (!fs.existsSync(folderPath)) {
            this.error(chalk.red(`❌ The folder "${folderPath}" does not exist.`));
        }

        const categories: Record<string, string[]> = {
            archives: [
                '.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz', '.iso', '.dmg'
            ],
            audio: [
                '.mp3', '.wav', '.aac', '.flac', '.ogg', '.m4a', '.wma', '.aiff', '.opus'
            ],
            code: [
                '.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.c', '.cpp', '.cs',
                '.html', '.css', '.scss', '.json', '.xml', '.yml', '.yaml', '.php',
                '.rb', '.go', '.sh', '.bat', '.md', '.sql'
            ],
            documents: [
                '.pdf', '.docx', '.doc', '.txt', '.xlsx', '.xls', '.pptx', '.ppt',
                '.odt', '.ods', '.odp', '.rtf', '.csv'
            ],
            executables: [
                '.exe', '.dmg', '.sh', '.bat', '.msi', '.apk', '.bin', '.app'
            ],
            fonts: [
                '.ttf', '.otf', '.woff', '.woff2', '.eot'
            ],
            images: [
                '.jpg', '.jpeg', '.png', '.gif', '.svg', '.bmp', '.tiff', '.webp', '.ico', '.heic'
            ],
            others: [],
            videos: [
                '.mp4', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.webm', '.m4v', '.3gp'
            ],
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
