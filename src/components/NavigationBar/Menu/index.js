import React, { Component } from 'react';
import styles from './index.module.scss';
import ConstructCSS from '../../../data/ConstructCSS';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		}
		this.toggle = this.toggle.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.menu = React.createRef();
	}
	toggle() {
		this.setState({
			open: !this.state.open
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
				<div className={styles.menu} style={this.state.open ? {} : { display: 'none' }}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Menu;
