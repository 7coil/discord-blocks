const blocklyDiv = document.getElementById('discordblocks');
const workspace = Blockly.inject(blocklyDiv, {
	toolbox: document.getElementById('toolbox')
});

setInterval(() => {
	scrollTo(0, 0);
}, 50);
