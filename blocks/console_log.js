Blockly.JavaScript['console_log'] = function(block) {
  var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `console.log(${value_string});`;
  return code;
};
