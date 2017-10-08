const sidenav = document.getElementById('sidenav');
const sidedarken = document.getElementById('sidedarken');

const toggleNav = () => {
	if (sidenav.className === 'sidenavon') {
		sidenav.className = 'sidenavoff';
		sidedarken.className = 'sidedarkenoff';
	} else {
		sidenav.className = 'sidenavon';
		sidedarken.className = 'sidedarkenon';
	}
};
