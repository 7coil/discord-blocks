Blockly.Blocks['invite_link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get invite for")
        .appendField(new Blockly.FieldVariable("client"), "client")
        .appendField("with")
        .appendField(new Blockly.FieldVariable("permissions"), "permissions");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('Generate an invite link for a bot account with the variable "permissions".');
    this.setHelpUrl('');
  }
};
