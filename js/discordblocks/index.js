/* exported getCode saveCode runCode loadCode */

// http://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

const code = document.getElementById('code');

const save = (data, name) => {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
	const blob = new Blob([data], { type: "octet/stream" });
	const url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = name;
	a.click();
	window.URL.revokeObjectURL(url);
};

function getCode() {
	const output = `var Discord = require('discord.js');${Blockly.JavaScript.workspaceToCode(workspace)}`;
	save(output, 'project.js');
}

function saveCode() {
	const xml = Blockly.Xml.workspaceToDom(workspace);
	const xmlText = Blockly.Xml.domToPrettyText(xml);
	save(xmlText, 'project.xml');
}

function runCode() {
	const w = window.open('runtime.html');
	w.js = Blockly.JavaScript.workspaceToCode(workspace);
}

function loadCode() {
	const xml_text = prompt('Insert your XML saved extract');
	if (!xml_text) return;
	var xml = Blockly.Xml.textToDom(xml_text);
	Blockly.Xml.domToWorkspace(xml, workspace);
}

window.addEventListener("beforeunload", (e) => {
	const confirm = 'You may have unsaved code.';
	e.returnValue = confirm;
	return confirm;
});
