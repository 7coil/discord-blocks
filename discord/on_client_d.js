Blockly.Blocks['on_client'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldVariable("client"), "client")
        .appendField("is ready");
    this.appendStatementInput("function")
        .setCheck(null)
        .appendField("then");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Triggered when the client is ready');
    this.setHelpUrl('https://moustacheminer.com/');
  }
};
