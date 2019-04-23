import React, { Component } from 'react';
import Menu from '../Menu';
import NavButton from '../NavButton';
import MenuButton from '../Menu/MenuButton';
import {readFileSync} from 'fs'
import ModalButton from '../ModalButton';
const LICENCE = readFileSync(__dirname + '../../../../../LICENCE', 'utf-8')

class HelpMenu extends Component {
  render() {
    return (
      <Menu
        button={(
          <NavButton>
            Help
          </NavButton>
        )}>
        <a href="https://discord.js.org/#/docs" target="_blank">
          <MenuButton>
            Discord.js Documentation
          </MenuButton>
        </a>
        <hr />
        <ModalButton
          button={(
            <MenuButton>
              DiscordBlocks Licence
            </MenuButton>
          )}>
        {LICENCE}  
        </ModalButton>
        <a href="https://github.com/7coil/discord-blocks" target="_blank">
          <MenuButton>
            GitHub Repository
          </MenuButton>
        </a>
        <hr />
        <a href="https://www.youtube.com/loonatheworld" target="_blank">
          <MenuButton>
            이달의 소녀
          </MenuButton>
        </a>
      </Menu>
    );
  }
}

export default HelpMenu;

