import React, { Component } from 'react';
import styles from './index.module.scss';
import ConstructCSS from '../../../modules/ConstructCSS';

class NavButton extends Component {
  render() {
    return (
      <div className={ConstructCSS(styles.button, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default NavButton;
