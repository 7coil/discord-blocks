import React, { Component } from 'react';
import styles from './index.module.scss';

class ModalButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.dialog = React.createRef();
  }
  toggle() {
    return new Promise((resolve) => {
      this.setState({
        open: !this.state.open
      }, () => {
        resolve();
      })
    })
  }
  open() {
    return new Promise((resolve) => {
      this.setState({
        open: true
      }, () => {
        resolve();
      })
    })
  }
  close() {
    return new Promise((resolve) => {
      this.setState({
        open: false
      }, () => {
        resolve();
      })
    })
  }
  handleClickOutside(e) {
    if (!this.dialog.current.contains(e.target)) {
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
      <div>
        <div onClick={(e) => {
          this.toggle(e)
            .then(() => {
              if (this.props.onClick) this.props.onClick(e);
            })
        }}>
          {this.props.button}
        </div>
        <dialog className={styles.dialog} open={this.state.open} ref={this.dialog}>
          {this.props.children}
          <button onClick={this.close}>Exit</button>
        </dialog>
      </div>
    );
  }
}

export default ModalButton;
