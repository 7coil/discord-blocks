Blockly.JavaScript['on_debug'] = function(block) {
  var client_name = block.getFieldValue('client');

  var code = `${client_name}.on('ready', console.log);`;
  return code;
};
