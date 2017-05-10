Blockly.Blocks['on_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldVariable("client"), "client")
        .appendField("sees a message being")
        .appendField(new Blockly.FieldDropdown([["added","message"], ["deleted","messageDelete"]]), "event");
    this.appendDummyInput()
        .appendField("put info into")
        .appendField(new Blockly.FieldVariable("message"), "message");
    this.appendStatementInput("function")
        .setCheck(null)
        .appendField("then");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Triggered when a message is recieved');
    this.setHelpUrl('https://moustacheminer.com/');
  }
};
