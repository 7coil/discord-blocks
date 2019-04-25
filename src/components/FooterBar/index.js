import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import logo from './logo.png';

class FooterBar extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <img className={styles.logo} src={logo} />
      </footer>
    );
  }
}


const mapStateToProps = (state) => {
  const { toasts } = state;
  return { toasts };
}

export default connect(mapStateToProps)(FooterBar);
