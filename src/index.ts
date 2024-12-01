/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default-member */
import { Command, Flags } from '@oclif/core';
import pkg from 'fs-extra';
const { ensureDirSync, existsSync, moveSync, readdirSync } = pkg;

import path from 'node:path';


export default class Organizer extends Command {
    static description = 'Organiza archivos en una carpeta por tipo';

    static flags = {
        folder: Flags.string({
            char: 'f',
            description: 'Ruta de la carpeta a organizar',
            required: true,
        }),
    };

    async run() {
        console.log("Organizing")
        const { flags } = await this.parse(Organizer);
        const folderPath = path.resolve(flags.folder);

        if (!existsSync(folderPath)) {
            this.error(`La carpeta "${folderPath}" no existe.`);
        }

        const categories: Record<string, string[]> = {
            documents: ['.pdf', '.docx', '.txt', '.xlsx', '.pptx'],
            executables: ['.exe', '.dmg', '.sh', '.bat'],
            images: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
            others: [],
            videos: ['.mp4', '.mkv', '.avi', '.mov'],
        };

        this.log(`Organizando archivos en: ${folderPath}`);

        const files = readdirSync(folderPath);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            const category = Object.keys(categories).find((cat) =>
                categories[cat].includes(ext)
            ) || 'others';

            const categoryPath = path.join(folderPath, category);
            ensureDirSync(categoryPath);
            moveSync(
                path.join(folderPath, file),
                path.join(categoryPath, file),
                { overwrite: true }
            );

            this.log(`Movido: ${file} -> ${category}/`);
        }

        this.log('Organización completada.');
    }
}
