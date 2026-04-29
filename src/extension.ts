// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const settings = vscode.workspace.getConfiguration('httpProxyToggle');
let home = settings.get('home') as string;
let office = settings.get('office') as string;

let currentProxy = vscode.workspace.getConfiguration('http').get<string>('proxy');
const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
statusBarItem.command = 'httpProxyToggle.toggle';

function updateStatusBar(currentProxy: string | undefined) {
    let currentStatus: string;
    let hoverText: string;

    if (currentProxy === office && office !== '') {
        currentStatus = '$(briefcase)';
        hoverText = 'Http Proxy: Office';
    } else if (currentProxy === home && home !== '') {
        currentStatus = '$(home)';
        hoverText = 'Http Proxy: Home';
    } else {
        currentStatus = '$(shield)✖';
        hoverText = 'Http Proxy: Disabled';
    }

    statusBarItem.text = currentStatus;
    statusBarItem.tooltip = hoverText + (currentProxy ? ' [' + currentProxy + ']' : '');
    statusBarItem.show();
}

async function toggleProxy() {
    currentProxy = vscode.workspace.getConfiguration('http').get<string>('proxy');
    if (currentProxy === office) {
        currentProxy = home;
    } else if (currentProxy === home && home !== '') {
        currentProxy = '';
    } else {
        currentProxy = office;
    }
    vscode.workspace.getConfiguration('http').update('proxy', currentProxy, vscode.ConfigurationTarget.Global);
    updateStatusBar(currentProxy);

}

updateStatusBar(currentProxy);

vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('httpProxyToggle.home')) {
        home = vscode.workspace.getConfiguration().get('httpProxyToggle.home') ?? '';
        updateStatusBar(currentProxy);
    }
    else if (event.affectsConfiguration('httpProxyToggle.office')) {
        office = vscode.workspace.getConfiguration().get('httpProxyToggle.office') ?? '';
        updateStatusBar(currentProxy);
    }
});

vscode.commands.registerCommand('httpProxyToggle.toggle', toggleProxy);

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) { }
// This method is called when your extension is deactivated
export function deactivate() { }
