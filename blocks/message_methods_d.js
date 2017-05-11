Blockly.Blocks['message_methods'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["delete","delete"], ["pin","pin"], ["unpin","unpin"]]), "methods")
        .appendField(new Blockly.FieldVariable("message"), "message");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Delete, pin or unpin a message');
    this.setHelpUrl('https://moustacheminer.com/');
  }
};
