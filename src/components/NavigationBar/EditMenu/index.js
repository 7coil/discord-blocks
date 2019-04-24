import React, { Component } from 'react';
import Menu from '../Menu';
import MenuButton from '../Menu/MenuButton';
import NavButton from '../NavButton';
import { connect } from 'react-redux';

class EditMenu extends Component {
  constructor(props) {
    super(props);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
  }
  undo() {
    const { workspace } = this.props
    workspace.undo(false);
  }
  redo() {
    const { workspace } = this.props
    workspace.undo(true);
  }
  render() {
    return (
      <Menu
        button={(
          <NavButton>
            Edit
          </NavButton>
        )}>
        <MenuButton onClick={this.undo}>
          Undo
        </MenuButton>
        <MenuButton onClick={this.redo}>
          Redo
        </MenuButton>
      </Menu>
    );
  }
}

export default connect()(EditMenu);

