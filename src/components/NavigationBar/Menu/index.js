import React, { Component } from 'react';
import styles from './index.module.scss';
import ConstructCSS from '../../../modules/ConstructCSS';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.menu = React.createRef();
  }
  toggle() {
    this.setState({
      open: !this.state.open
    })
  }
  open() {
    this.setState({
      open: true
    })
  }
  close() {
    this.setState({
      open: false
    })
  }
  handleClickOutside(e) {
    if (!this.menu.current.contains(e.target)) {
      this.setState({
        open: false
      })
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  render() {
    return (
      <div ref={this.menu}>
        <div onClick={this.toggle}>
          {this.props.button}
        </div>
        <div onClick={this.close} className={styles.menu} style={this.state.open ? {} : { visibility: 'hidden' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Menu;
