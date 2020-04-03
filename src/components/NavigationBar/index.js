import React, { Component } from 'react';
import { TitleBar } from 'electron-react-titlebar'
import logo from './logo.png'

import JSZip from 'jszip';
import Blockly from '../../modules/Blockly';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.load = this.load.bind(this);
    this.export = this.export.bind(this);
    this.loadButton = React.createRef();
    this.temporarySaveFile = React.createRef();

    this.state = {
      temporarySaveLink: '',
      temporarySaveFilename: ''
    }
  }
  save() {
    const { workspace } = this.props
    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
    const fileName = `Untitled.dbl`;

    const zip = new JSZip();

    zip.file('blocks.xml', xmlContent);
    
    zip.generateAsync({
      type: 'blob'
    })
      .then((blob) => {
        const a = document.createElement('a');
        a.style = 'display: none';
        document.body.appendChild(a);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
  }
  load(event) {
    const { workspace } = this.props
    const [file] = event.target.files;
    const reader = new FileReader();
    reader.onload = (e) => {
      // Open the zip file
      JSZip.loadAsync(e.target.result)
        .then((data) => {
          // If there is a blocks.xml file, open it
          if (data.file('blocks.xml')) {
            return data.file('blocks.xml').async('string')
          }

          return Promise.reject()
        })
        .then((text) => {
          // With the blocks.xml file, import it to Blockly.
          const xml = Blockly.Xml.textToDom(text);
          Blockly.Xml.domToWorkspace(xml, workspace);
        })
    };
    if (file) {
      reader.readAsArrayBuffer(file);
    }
  }
  export() {
    const { workspace } = this.props
    const code = Blockly.JavaScript.workspaceToCode(workspace);

    const blob = new Blob([code], { type: 'text/javascript' });
    const url = window.URL.createObjectURL(blob);

    this.setState({
      temporarySaveLink: url,
      temporarySaveFilename: 'untitled.js'
    }, () => {
      this.temporarySaveFile.current.click();
      window.URL.revokeObjectURL(url);
    })
  }
  render() {
    const workspace = this.props.workspace
    return (
      <>
        <input ref={this.loadButton} onChange={this.load} hidden type="file" id="load-code" accept=".dbl"></input>
        <a ref={this.temporarySaveFile} href={this.state.temporarySaveLink} download={this.state.temporarySaveFilename}></a>
        <TitleBar icon={logo} menu={[
          {
            label: 'File',
            submenu: [
              { label: 'Open', click: (a, b, event) => this.loadButton.current.click() },
              { label: 'Save', click: () => this.save() },
              { label: 'Export', click: () => this.export() },
            ]
          },
          {
            label: 'Edit',
            submenu: [
              { label: 'Undo', click: () => workspace.undo(false) },
              { label: 'Redo', click: () => workspace.undo(true) },
              { label: 'Clean up Workspace', click: () => workspace.cleanUp() },
            ]
          },
          {
            label: 'Help',
            submenu: [
              { label: 'Discord.js Documentation', click: () => window.open('https://discord.js.org/')},
              { type: 'separator' },
              { label: 'DiscordBlocks on GitHub', click: () => window.open('https://github.com/7coil/discord-blocks')},
            ]
          },
        ]} />
      </>
    )
  }
}

export default NavigationBar;
