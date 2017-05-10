Blockly.Blocks['message_reply'] = {
  init: function() {
    this.appendValueInput("reply")
        .setCheck("String")
        .appendField("Reply to")
        .appendField(new Blockly.FieldVariable("message"), "message")
        .appendField("with");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Reply to the message with a string');
    this.setHelpUrl('https://moustacheminer.com/');
  }
};
