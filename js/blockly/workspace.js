const blocklyDiv = document.getElementById('discordblocks');
const workspace = Blockly.inject(blocklyDiv, {
	toolbox: document.getElementById('toolbox')
});
