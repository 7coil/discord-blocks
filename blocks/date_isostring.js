Blockly.JavaScript['date_isostring'] = function(block) {

  var code = `(new Date).toISOString()`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
