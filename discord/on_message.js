Blockly.JavaScript['on_message'] = function(block) {
	var client_name = block.getFieldValue('client');
	var dropdown_event = block.getFieldValue('event');
	var message_name = block.getFieldValue('message')
	var statements_function = Blockly.JavaScript.statementToCode(block, 'function');

	var code = `
${client_name}.on('${dropdown_event}', function(${message_name}) {
	${statements_function}
});
	`;
	return code;
};
