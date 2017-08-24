Blockly.Blocks.console_log = {
	init() {
		this.appendValueInput('text')
			.setCheck(null)
			.appendField('print');
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

