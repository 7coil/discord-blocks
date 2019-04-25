import React, { Component } from 'react';
import styles from './index.module.scss';
import NavButton from './NavButton';
import { connect } from 'react-redux';

import logo from './logo.png';
import Menu from './Menu';
import MenuButton from './Menu/MenuButton';
import ConstructCSS from '../../data/ConstructCSS';
import HelpMenu from './HelpMenu';
import FileMenu from './FileMenu';
import EditMenu from './EditMenu';
import ExecuteMenu from './ExecuteMenu';

class NavigationBar extends Component {
  render() {
    const { workspace } = this.props;
    return (
      <div className={styles.tab}>
        <img className={styles.logo} src={logo} />
        <FileMenu workspace={workspace} />
        <EditMenu workspace={workspace} />
        <ExecuteMenu workspace={workspace} />
        <HelpMenu />
        <span className={styles.title}>{this.props.document.name} - DiscordBlocks</span>
        <div className={styles.right}>
          <NavButton className={styles.windowButton}>
            <svg width='12' height='11' viewBox='0 0 11 12' xmlns='http://www.w3.org/2000/svg'>
              <path fill="#FFF" d='M11 4.399V5.5H0V4.399h11z'/>
            </svg>
          </NavButton>
          <NavButton className={styles.windowButton}>
            <svg width='11' height='11' viewBox='0 0 11 11' xmlns='http://www.w3.org/2000/svg'>
              <path fill="#FFF" d='M11 0v11H0V0h11zM9.899 1.101H1.1V9.9h8.8V1.1z'/>
            </svg>
          </NavButton>
          <NavButton className={ConstructCSS(styles.closeButton, styles.windowButton)}>
            <svg width='11' height='11' viewBox='0 0 11 11' xmlns='http://www.w3.org/2000/svg'>
              <path fill="#FFF" d='M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z'/>
            </svg>
          </NavButton>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { document } = state;
  return { document };
}

export default connect(mapStateToProps)(NavigationBar);
