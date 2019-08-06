import React, { Component } from 'react';
import JSZip from 'jszip';
import Menu from '../Menu';
import MenuButton from '../Menu/MenuButton';
import NavButton from '../NavButton';
import { Blockly } from '../../ToolBox/Category';
import { connect } from 'react-redux';
import { saveDocument } from '../../../redux/actions/document';

class FileMenu extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.load = this.load.bind(this);
  }
  save() {
    const { workspace, dispatch } = this.props
    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
    const fileName = `${encodeURIComponent(this.props.document.name).replace(/%20/g, ' ')}.dbl`;

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

    dispatch(saveDocument());
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
          <input onChange={this.load} hidden type="file" id="load-code" accept=".dbl"></input>
        </MenuButton>
        <MenuButton onClick={this.save}>
          Save
        </MenuButton>
        <hr />
        <MenuButton onClick={window.close}>
          Exit
        </MenuButton>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  const { document } = state;
  return { document };
}

export default connect(mapStateToProps)(FileMenu);

