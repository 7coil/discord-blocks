Blockly.JavaScript['message_reply'] = function(block) {
	var message_name = block.getFieldValue('message');
	var value_reply = Blockly.JavaScript.valueToCode(block, 'reply', Blockly.JavaScript.ORDER_ATOMIC);

	var code = `${message_name}.reply(${value_reply});`;

	return code;
};
