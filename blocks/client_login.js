Blockly.JavaScript['client_login'] = function(block) {
	var client_name = block.getFieldValue('client');
	var value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);

	var code = `
${client_name} = new Discord.Client();
${client_name}.login(${value_token});
	`;

	return code;
};
