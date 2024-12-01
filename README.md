organized-cli
=================

A files organizer


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/organized-cli.svg)](https://npmjs.org/package/organized-cli)
[![Downloads/week](https://img.shields.io/npm/dw/organized-cli.svg)](https://npmjs.org/package/organized-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g organized-cli
$ organized COMMAND
running command...
$ organized (--version)
organized-cli/0.0.0 linux-x64 node-v18.20.5
$ organized --help [COMMAND]
USAGE
  $ organized COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`organized help [COMMAND]`](#organized-help-command)
* [`organized plugins`](#organized-plugins)
* [`organized plugins add PLUGIN`](#organized-plugins-add-plugin)
* [`organized plugins:inspect PLUGIN...`](#organized-pluginsinspect-plugin)
* [`organized plugins install PLUGIN`](#organized-plugins-install-plugin)
* [`organized plugins link PATH`](#organized-plugins-link-path)
* [`organized plugins remove [PLUGIN]`](#organized-plugins-remove-plugin)
* [`organized plugins reset`](#organized-plugins-reset)
* [`organized plugins uninstall [PLUGIN]`](#organized-plugins-uninstall-plugin)
* [`organized plugins unlink [PLUGIN]`](#organized-plugins-unlink-plugin)
* [`organized plugins update`](#organized-plugins-update)

## `organized help [COMMAND]`

Display help for organized.

```
USAGE
  $ organized help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for organized.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.18/src/commands/help.ts)_

## `organized plugins`

List installed plugins.

```
USAGE
  $ organized plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ organized plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.19/src/commands/plugins/index.ts)_

## `organized plugins add PLUGIN`

Installs a plugin into organized.

```
USAGE
  $ organized plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into organized.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ORGANIZED_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ORGANIZED_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ organized plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ organized plugins add myplugin

  Install a plugin from a github url.

    $ organized plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ organized plugins add someuser/someplugin
```

## `organized plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ organized plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ organized plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.19/src/commands/plugins/inspect.ts)_

## `organized plugins install PLUGIN`

Installs a plugin into organized.

```
USAGE
  $ organized plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into organized.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ORGANIZED_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ORGANIZED_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ organized plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ organized plugins install myplugin

  Install a plugin from a github url.

    $ organized plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ organized plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.19/src/commands/plugins/install.ts)_

## `organized plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ organized plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ organized plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.19/src/commands/plugins/link.ts)_

## `organized plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ organized plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ organized plugins unlink
  $ organized plugins remove

EXAMPLES
  $ organized plugins remove myplugin
```

## `organized plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ organized plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.19/src/commands/plugins/reset.ts)_

## `organized plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ organized plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ organized plugins unlink
  $ organized plugins remove

EXAMPLES
  $ organized plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.19/src/commands/plugins/uninstall.ts)_

## `organized plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ organized plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ organized plugins unlink
  $ organized plugins remove

EXAMPLES
  $ organized plugins unlink myplugin
```

## `organized plugins update`

Update installed plugins.

```
USAGE
  $ organized plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.19/src/commands/plugins/update.ts)_
<!-- commandsstop -->
