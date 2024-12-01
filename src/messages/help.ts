import chalk from "chalk";

export const showHelpMessage = () => {
    console.log(`
        _______  ______    _______  _______  __    _  ___   _______  _______  ______  
        |       ||    _ |  |       ||   _   ||  |  | ||   | |       ||       ||      | 
        |   _   ||   | ||  |    ___||  |_|  ||   |_| ||   | |____   ||    ___||  _    |
        |  | |  ||   |_||_ |   | __ |       ||       ||   |  ____|  ||   |___ | | |   |
        |  |_|  ||    __  ||   ||  ||       ||  _    ||   | | ______||    ___|| |_|   |
        |       ||   |  | ||   |_| ||   _   || | |   ||   | | |_____ |   |___ |       |
        |_______||___|  |_||_______||__| |__||_|  |__||___| |_______||_______||______| 
        `)
    console.log(chalk.blueBright("📦 Welcome to Organized CLI!"));
    console.log(chalk.white(`
Organized helps you organize files in a folder by categorizing them into:
📂 Documents, Images, Videos, Audio, Archives, Code, Executables, and Others.
        
Usage:
organized -f <path/to/folder>
        
Options:
-f, --folder    Specify the folder to organize
--help          Show this help message
        
Examples:
organized -f ./my-folder
organized --folder ./downloads
        
Enjoy organizing your files! 🚀
                `));
}