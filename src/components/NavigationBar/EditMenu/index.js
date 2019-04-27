import React, { Component } from 'react';
import Menu from '../Menu';
import MenuButton from '../Menu/MenuButton';
import NavButton from '../NavButton';
import { connect } from 'react-redux';

class EditMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { workspace } = this.props
    return (
      <Menu
        button={(
          <NavButton>
            Edit
          </NavButton>
        )}>
        <MenuButton onClick={() => workspace.undo(false)}>
          Undo
        </MenuButton>
        <MenuButton onClick={() => workspace.undo(true)}>
          Redo
        </MenuButton>
        <hr />
        <MenuButton onClick={() => workspace.cleanUp()}>
          Clean up Blocks
        </MenuButton>
      </Menu>
    );
  }
}

export default connect()(EditMenu);

