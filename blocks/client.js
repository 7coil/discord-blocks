Blockly.JavaScript['client'] = function(block) {
  var dropdown_name = block.getFieldValue('variable');
  var client_name = block.getFieldValue('client')

  var code = `${client_name}.${dropdown_name}`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
