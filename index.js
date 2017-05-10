var code = document.getElementById('code');

var workspace = Blockly.inject('blocklyDiv', {
	media: 'media/',
	toolbox: document.getElementById('toolbox')
});

function getCode() {
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
 * The software below is not part of the above licence, and is
 * licenced under the owner's choice.
 */
`
	output += Blockly.JavaScript.workspaceToCode(workspace);
	code.innerHTML = output;
}
