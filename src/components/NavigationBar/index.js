import TitleBar from 'frameless-titlebar';
import JSZip from 'jszip';
import React, { Component } from 'react';
import Blockly from '../../modules/Blockly';
import logo from './logo.png';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.loadWithJSZip = this.loadWithJSZip.bind(this);
    this.loadFromFile = this.loadFromFile.bind(this);
    this.loadFromText = this.loadFromText.bind(this);
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
  loadWithJSZip(data) {
    // If there is a blocks.xml file, open it
    if (data.file('blocks.xml')) {
      data.file('blocks.xml').async('string')
        .then((text) => {
          this.loadFromText({ text })
        })
    }
  }
  loadFromFile(event) {
    const [file] = event.target.files;
    const reader = new FileReader();
    reader.onload = (e) => {
      // Open the zip file
      JSZip.loadAsync(e.target.result)
        .then(this.loadWithJSZip)
    };
    if (file) {
      reader.readAsArrayBuffer(file);
    }
  }
  loadFromUrl(url) {
    fetch(url)
      .then(res => res.blob())
      .then(res => {
        JSZip.loadAsync(res)
          .then(this.loadWithJSZip)
      })
  }
  loadFromText({ text }) {
    const { workspace } = this.props
    const xml = Blockly.Xml.textToDom(text);
    Blockly.Xml.domToWorkspace(xml, workspace);
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
        <input ref={this.loadButton} onChange={this.loadFromFile} hidden type="file" id="load-code" accept=".dbl"></input>
        <a ref={this.temporarySaveFile} href={this.state.temporarySaveLink} download={this.state.temporarySaveFilename}></a>
        <TitleBar icon={logo} menu={[
          {
            label: 'File',
            submenu: [
              { label: 'Open', click: () => this.loadButton.current.click() },
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
              { label: 'Discord.js Documentation', click: () => window.open('https://discord.js.org/') },
              {
                label: 'Examples', submenu: [
                  { label: 'Broken Example', click: () => this.loadFromUrl('/example1.dbl') },
                ]
              },
              { type: 'separator' },
              { label: 'DiscordBlocks on GitHub', click: () => window.open('https://github.com/7coil/discord-blocks') },
            ]
          },
        ]} />
      </>
    )
  }
}

export default NavigationBar;
