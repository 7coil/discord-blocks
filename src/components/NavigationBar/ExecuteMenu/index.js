import React, { Component } from 'react';
import Menu from '../Menu';
import MenuButton from '../Menu/MenuButton';
import NavButton from '../NavButton';

import { Blockly } from '../../ToolBox/Category';
import { connect } from 'react-redux';
import ModalButton from '../ModalButton';
import { js as beautify } from 'js-beautify';
import { createToast } from '../../../redux/actions/toasts';

class ExecuteMenu extends Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.exportCode = this.exportCode.bind(this);
    this.saveCode = this.saveCode.bind(this);

    this.state = {
      code: null,
      error: null
    }
  }
  execute() {
    const { workspace } = this.props
    workspace.undo(true);
  }
  exportCode() {
    const { workspace } = this.props
    try {
      const code = beautify(
        Blockly.JavaScript.workspaceToCode(workspace),
        {
          indent_size: 2
        }
      )
      this.setState({
        code,
        error: null
      });
      return code;
    } catch(e) {
      this.setState({
        error: e.message
      });
    }
  }
  saveCode() {
    const code = this.exportCode();

    if (code) {
      const name = 'project.js';

      const a = document.createElement('a');
      a.style = 'display: none';
      document.body.appendChild(a);
      const blob = new Blob([code], { type: 'octet/stream' });
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } else {
      const { dispatch } = this.props;
      dispatch(createToast({
        content: 'There is no code in your workspace to export!'
      }))
    }
  }
  render() {
    return (
      <Menu
        button={(
          <NavButton>
            JavaScript
          </NavButton>
        )}>
        <ModalButton
          button={(
            <MenuButton>
              View Code
            </MenuButton>
          )}
          onClick={this.exportCode}>
          {this.state.error && (
            <p>{this.state.error}</p>
          )}
          <pre><code>{this.state.code}</code></pre>
        </ModalButton>
        <MenuButton
          onClick={this.saveCode}>
          Export JavaScript for Node.js
        </MenuButton>
      </Menu>
    );
  }
}

export default connect()(ExecuteMenu);

