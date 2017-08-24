Blockly.Blocks.console_log = {
	init() {
		this.appendValueInput('text')
			.setCheck(null)
			.appendField('log');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(160);
		this.setTooltip('Outputs a message to the Web Console.');
		this.setHelpUrl('https://developer.mozilla.org/en/docs/Web/API/Console/log');
	}
};

Blockly.JavaScript.console_log = (block) => {
	const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `console.log(${value_text});\n`;
	return code;
};

Blockly.Blocks.console_log = {
	init() {
		this.appendValueInput('text')
			.setCheck(null)
			.appendField('eval');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(160);
		this.setTooltip('The eval() function evaluates JavaScript code represented as a string.');
		this.setHelpUrl('https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval');
	}
};

Blockly.JavaScript.console_log = (block) => {
	const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `eval(${value_text});\n`;
	return code;
};

