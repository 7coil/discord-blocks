const blocklyArea = document.getElementById('discordblocksarea');
const blocklyDiv = document.getElementById('discordblocks');
const workspace = Blockly.inject(blocklyDiv, {
	toolbox: document.getElementById('toolbox')
});

const resize = () => {
	// Compute the absolute coordinates and dimensions of blocklyArea.
	let element = blocklyArea;
	let x = 0;
	let y = 0;
	do {
		x += element.offsetLeft;
		y += element.offsetTop;
		element = element.offsetParent;
	} while (element);

	blocklyArea.style.height = `calc(100vh - ${y}px)`;

	// Position blocklyDiv over blocklyArea.
	blocklyDiv.style.left = `${x}px`;
	blocklyDiv.style.top = `${y}px`;
	blocklyDiv.style.width = `${blocklyArea.offsetWidth}px`;
	blocklyDiv.style.height = `${blocklyArea.offsetHeight}px`;
};

window.addEventListener('resize', resize, false);
setTimeout(resize, 50);


Blockly.svgResize(workspace);
