Blockly.JavaScript['invite_link'] = function(block) {
	var client_name = block.getFieldValue('client')
	var variable_permissions = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('permissions'), Blockly.Variables.NAME_TYPE);

	//https://discordapp.com/oauth2/authorize?&client_id=257547382277931009&scope=bot&permissions=70765632
	var code = `'https://discordapp.com/oauth2/authorize?&client_id=' + ${client_name}.user.id + '&scope=bot&permissions=' + ${variable_permissions}`;

	return [code, Blockly.JavaScript.ORDER_NONE];
};
