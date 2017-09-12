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

Blockly.Blocks.eval = {
	init() {
		this.appendValueInput('text')
			.setCheck(null)
			.appendField('eval');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(300);
		this.setTooltip('The eval() function evaluates JavaScript code represented as a string.');
		this.setHelpUrl('https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval');
	}
};

Blockly.JavaScript.eval = (block) => {
	const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `eval(${value_text});\n`;
	return code;
};

Blockly.Blocks.mss_object = {
	init() {
		this.appendDummyInput()
			.appendField('Create new Object');
		this.setOutput(true, 'Object');
		this.setColour(300);
		this.setTooltip('The Object constructor creates an object wrapper.');
		this.setHelpUrl('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object');
	}
};

Blockly.JavaScript.mss_object = () => {
	const code = '{}';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.mss_object_set = {
	init() {
		this.appendValueInput('object')
			.setCheck('Object')
			.appendField('with');
		this.appendValueInput('token')
			.setCheck(null)
			.appendField('set key')
			.appendField(new Blockly.FieldTextInput('key'), 'key')
			.appendField('as');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(300);
		this.setTooltip('Set a specific key in an object.');
		this.setHelpUrl('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object');
	}
};

Blockly.JavaScript.mss_object_set = (block) => {
	const value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
	const text_key = block.getFieldValue('key');
	const value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${value_object}['${text_key.replace(/'/g, '\\\'')}'] = ${value_token};\n`;
	return code;
};
