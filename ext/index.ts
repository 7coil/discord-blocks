import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        'catCoding', // Identifies the type of the webview. Used internally
        'index.dbl', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {
          localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'dist', 'client'))],
          enableScripts: true
        } // Webview options. More on these later.
      );

      function getWebviewContent() {
        return `<html>
        <head><link rel="stylesheet" href="${vscode.Uri.file(path.join(context.extensionPath, 'dist', 'client', 'src.e31bb0bc.css')).with({
          scheme: 'vscode-resource'
        })}"></head>
        <body>
          <main>
            <div id="app"></div>
            <div id="blockly"></div>
          </main>
          <script src="${vscode.Uri.file(path.join(context.extensionPath, 'dist', 'client', 'src.e31bb0bc.js')).with({
            scheme: 'vscode-resource'
          })}"></script>
        </body>
      </html>
      `;
      }

      panel.webview.html = getWebviewContent();
    })
  );
}

