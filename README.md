# Organized CLI

![banner](./imgs/banner.webp)

🚀 **Organized CLI** is a command-line tool to organize files in a folder by categorizing them into directories based on their types. It simplifies managing cluttered directories by grouping files like documents, images, videos, audio, archives, and more.

<div align="center">
<img src="https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge" alt="Node.js Badge">
<img src="https://img.shields.io/badge/oclif-000?logo=oclif&logoColor=fff&style=for-the-badge" alt="oclif Badge">
<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge" alt="TypeScript Badge">
<img alt="Licence" src="https://img.shields.io/npm/dw/organized-cli.svg?style=for-the-badge">
<img alt="Licence" src="https://img.shields.io/github/license/yossTheDev/organized-cli?style=for-the-badge">
</div>

## 📖 Features

- Automatically categorizes files into predefined folders:
  - `Documents`, `Images`, `Videos`, `Audio`, `Archives`, `Code`, `Executables`, and `Others`.
- Supports various file types, including `.pdf`, `.jpg`, `.mp4`, `.zip`, `.exe`, and many more.
- Lightweight and easy to use.
- Provides visual feedback with styled logs and emojis.

---

## 🚀 Installation

### Global Installation via NPM

Install Organized CLI globally using NPM:

```bash
npm install -g organized
```

## 📂 Usage

To organize a folder:

```bash
organized -f <path/to/folder>
```

### Example

Imagine you have the following folder structure:

Before Running organized:

```bash
$ ls ./my-folder
image1.jpg    video1.mp4    document1.pdf    archive1.zip    script.js
```

Run the command:

```bash
organized -f ./my-folder
```

After Running organized:

```bash
$ ls ./my-folder
Documents  Images  Videos  Archives  Code
```

Within each folder:

```bash
$ ls ./my-folder/Documents
document1.pdf
```

```bash
$ ls ./my-folder/Images
image1.jpg
```

```bash
$ ls ./my-folder/Videos
video1.mp4
```

```bash
$ ls ./my-folder/Archives
archive1.zip
```

```bash
$ ls ./my-folder/Code
script.js
```

## ⚙️ Options

- -f, --folder <path>: Specify the path to the folder to organize (required).

Example:

```bash
organized -f ~/Downloads
```

## 🎯 Supported Categories and File Types

- Documents:
.pdf, .docx, .txt, .xlsx, .pptx, .csv, .odt, .ods, .odp

- Images:
.jpg, .jpeg, .png, .gif, .svg, .bmp, .tiff, .webp, .ico, .heic

- Videos:
.mp4, .mkv, .avi, .mov, .wmv, .flv, .webm, .m4v, .3gp

- Audio:
.mp3, .wav, .aac, .flac, .ogg, .m4a, .wma, .aiff, .opus

- Archives:
.zip, .rar, .7z, .tar, .gz, .bz2, .xz, .iso

- Code:
.js, .ts, .jsx, .tsx, .py, .java, .c, .cpp, .html, .css, .json, .xml, .yml, .sql

- Executables:
.exe, .dmg, .sh, .bat, .msi, .apk

- Others:
Any file type that does not fit into the above categories.

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.
