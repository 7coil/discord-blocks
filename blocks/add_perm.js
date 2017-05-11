Blockly.JavaScript['add_perm'] = function(block) {
	var dropdown_permission = block.getFieldValue('permission');

	var code = `${dropdown_permission}`;

	return [code, Blockly.JavaScript.ORDER_NONE];
};
