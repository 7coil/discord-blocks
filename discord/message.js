Blockly.JavaScript['message'] = function(block) {
  var dropdown_name = block.getFieldValue('variable');
  var message_name = block.getFieldValue('message')

  var code = `${message_name}.${dropdown_name}`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
