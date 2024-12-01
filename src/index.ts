import { Command, Flags } from '@oclif/core';

import { organize } from './modules/organize.js';


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

        organize(flags.folder)
    }
}
