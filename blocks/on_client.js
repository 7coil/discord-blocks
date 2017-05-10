Blockly.JavaScript['on_client'] = function(block) {
	var client_name = block.getFieldValue('client');
	var statements_function = Blockly.JavaScript.statementToCode(block, 'function');

	var code = `
${client_name}.on('ready', function() {
	${statements_function}
});
	`;
	return code;
};
