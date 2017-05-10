Blockly.JavaScript['beginswith'] = function(block) {
	var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC);
	var value_begins = Blockly.JavaScript.valueToCode(block, 'begins', Blockly.JavaScript.ORDER_ATOMIC);

	var code = `${value_string}.startsWith(${value_begins})`;

	return [code, Blockly.JavaScript.ORDER_NONE];
};
