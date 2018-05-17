# VSCode IDE Brightscript

[![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/v/willowtree.vscode-ide-brightscript.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=willowtree.vscode-ide-brightscript)

VSCode editing support for Brightscript.

![showcase](https://user-images.githubusercontent.com/2018617/40208763-556c6298-5a09-11e8-88b0-61bf1fe7dbbc.gif)

# Features

* Code snippets for common statements (ifs, for, while, function)
* On the fly linting and error checking 
* Code region folding

# Requirements

* VSCode 1.16.0 or higher

# Setup

Linting is managed by [Wist](https://github.com/willowtreeapps/wist/). As a result you can manage linting rules by providing a `.wistrc.json` in the root of your project. 

```json
{
    "rules": {
        "no-stop": ["error"],
        "no-print": ["warn"]
    }
}
```

More information about rules you can enable/disable are available [here](https://github.com/willowtreeapps/wist/)

# Contributing

Contributions and suggestions are more than welcome. 
Please see our [Code of Conduct](/CODE_OF_CONDUCT.md) as well as our [Contributing Guidelines ](/CONTRIBUTING.md)
for more information.

# Resources

This project makes use of the following projects for advanced features.

1. [Hinoki](https://github.com/willowtreeapps/hinoki/) - Brightscript language server.
2. [Wist](https://github.com/willowtreeapps/wist/) - A linting engine for Brightscript.

