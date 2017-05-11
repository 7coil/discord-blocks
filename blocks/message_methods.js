Blockly.JavaScript['message_methods'] = function(block) {
	var dropdown_methods = block.getFieldValue('methods');
	var message_name = block.getFieldValue('message');

	code = `${message_name}.${dropdown_methods}();`

	return code;
};
