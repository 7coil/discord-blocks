import React, { Component } from 'react';
import styles from './index.module.scss';
import NavbarLinks from './links';
import Modesta from '../../data/Modesta';
import ConstructCSS from '../../data/ConstructCSS';

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.open = React.createRef();
		this.openNavbar = this.openNavbar.bind(this);
		this.closeNavbar = this.closeNavbar.bind(this);
		
		this.state = {
			open: false
		};
	}

	openNavbar() {
		this.setState({
			open: true
		});
	}

	closeNavbar() {
		this.setState({
			open: false
		});
	}

	render() {
		return (
			<div className={styles.navbar}>
				<div className={ConstructCSS(styles.desktop, Modesta.navContainer, styles.desktopNavbar, Modesta.default)}>
					<h1 className={Modesta.navTitle}>
						Home
					</h1>

					<div className={Modesta.sidenav}>
						<NavbarLinks />
					</div>
				</div>
				<div className={ConstructCSS(styles.mobile, Modesta.navContainer, styles.mobileNavbar)}>
					<span ref={this.open} className={Modesta.menuIcon} onClick={this.openNavbar}></span>

					<div className={ConstructCSS(styles.mobileNavContent, Modesta.navContent)}>
						<h4 className={styles.mobileHeading}>
							Home
						</h4>
					</div>

					<div
						className={Modesta.sidenav}
						style={this.state.open ? {
							transform: 'translateX(0px)'
						} : {
							transform: 'translateX(-250px)'
						}}>
						<NavbarLinks />
					</div>
				</div>
				<div
					className={ConstructCSS(styles.darken, styles.mobile)}
					onClick={this.closeNavbar}
					style={this.state.open ? {
						opacity: '0.8',
						pointerEvents: 'all'
					} : {
						opacity: '0',
						pointerEvents: 'none'
					}}></div>
			</div>
		);
	}
}

export default NavigationBar;
