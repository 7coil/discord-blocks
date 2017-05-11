var workspace = Blockly.inject('blocklyDiv', {
	media: 'media/',
	toolbox: document.getElementById('toolbox')
});

function getCode() {
	var code = document.getElementById('code');

	var output = `
var Discord = require('discord.js');
/*
 * Discord.js Blockly Code Generator
 * Built on top of Google's "Blockly" block based programming language
 *
 * The generator, Blockly and Discord.JS
 * are licenced under the Apache Licence 2.0
 *
 * Copyright 2017 moustacheminer.com
 * Copyright 2012 Google Inc.
 * Copyright 2017 hydrabolt
 *
 * Read the Apache Licence (which should be the same) for each
 * respective piece of software used in the following links:
 *
 * https://github.com/lepon01/discordblocks/blob/master/LICENCE.TXT
 * https://github.com/google/blockly/blob/master/LICENSE
 * https://github.com/hydrabolt/discord.js/blob/master/LICENSE
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * The software below is not part of the above licence, and is
 * licenced under the owner's choice.
 */
`
	output += Blockly.JavaScript.workspaceToCode(workspace);
	code.innerHTML = output;
}

function saveCode() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToText(xml);
	prompt("Copy the XML to your clipboard and save it ALL for later", xml_text);
}

function loadCode() {
	var xml_text = prompt("Insert your XML saved extract", xml_text);
	if (!xml_text) return;
	var xml = Blockly.Xml.textToDom(xml_text);
	Blockly.Xml.domToWorkspace(xml, workspace);
}
