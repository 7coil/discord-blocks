import React, { Component } from 'react';
import Menu from '../Menu';
import MenuButton from '../Menu/MenuButton';
import NavButton from '../NavButton';
import { Blockly } from '../../ToolBox/Category';

class FileMenu extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.load = this.load.bind(this);
  }
  save() {
    const { workspace } = this.props
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const data = Blockly.Xml.domToPrettyText(xml);
    const name = 'project.dbl4';

    const a = document.createElement('a');
    a.style = 'display: none';
    document.body.appendChild(a);
    const blob = new Blob([data], { type: 'octet/stream' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  load(event) {
    const { workspace } = this.props
    const [file] = event.target.files;
    const reader = new FileReader();
    reader.onload = (e) => {
      const xml_text = e.target.result;
      if (!xml_text) return;
      const xml = Blockly.Xml.textToDom(xml_text);
      Blockly.Xml.domToWorkspace(xml, workspace);
    };
    if (file) {
      reader.readAsText(file);
    }
  }
  render() {
    return (
      <Menu
        button={(
          <NavButton>
            File
          </NavButton>
        )}>
        <MenuButton>
          <label htmlFor="load-code">Open File...</label>
          <input onChange={this.load} hidden type="file" id="load-code" accept=".dbl4"></input>
        </MenuButton>
        <MenuButton onClick={this.save}>
          Save
        </MenuButton>
      </Menu>
    );
  }
}

export default FileMenu;

