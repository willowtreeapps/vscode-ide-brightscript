'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode_languageclient_1 = require("vscode-languageclient");
function activate(context) {
    const serverPath = ['node_modules', '@willowtreeapps/hinoki', 'lib', 'bin', 'cli.js'];
    const serverModule = context.asAbsolutePath(path.join(...serverPath));
    const debugOptions = { execArgv: ['--nolazy', '--debug=6009'] };
    const serverOptions = {
        run: { module: serverModule, transport: vscode_languageclient_1.TransportKind.stdio },
        debug: { module: serverModule, transport: vscode_languageclient_1.TransportKind.stdio, options: debugOptions }
    };
    const clientOptions = {
        documentSelector: [{ scheme: 'file', language: 'brightscript' }]
    };
    const disposable = new vscode_languageclient_1.LanguageClient('hinoki', 'BrightScript Language Server', serverOptions, clientOptions).start();
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map