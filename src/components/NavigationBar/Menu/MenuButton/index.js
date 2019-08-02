import React, { Component } from 'react';
import styles from './index.module.scss';
import ConstructCSS from '../../../../modules/ConstructCSS';

class MenuButton extends Component {
  render() {
    return (
      <div {...this.props} className={ConstructCSS(styles.button, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default MenuButton;
