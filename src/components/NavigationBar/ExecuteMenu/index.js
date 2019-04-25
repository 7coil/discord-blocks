import React, { Component } from 'react';
import Menu from '../Menu';
import MenuButton from '../Menu/MenuButton';
import NavButton from '../NavButton';

import { Blockly } from '../../ToolBox/Category';
import { connect } from 'react-redux';
import ModalButton from '../ModalButton';
import { js as beautify } from 'js-beautify';

class ExecuteMenu extends Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.exportCode = this.exportCode.bind(this);

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
    } catch(e) {
      this.setState({
        error: e.message
      });
    }
  }
  render() {
    return (
      <Menu
        button={(
          <NavButton>
            Go
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
      </Menu>
    );
  }
}

export default connect()(ExecuteMenu);

