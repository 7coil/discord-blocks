if (typeof js === 'undefined' || !js) {
	console.log('No code was supplied!');
} else {
	eval(js);
}

window.addEventListener('unhandledrejection', (err) => {
	console.dir(err);
	console.log(`Caught unhandled promise: ${err.reason}`);
});
