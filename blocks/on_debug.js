Blockly.Blocks['on_debug'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Log")
        .appendField(new Blockly.FieldVariable("client"), "client")
        .appendField("debug messages");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Triggered when a debug message is recieved');
    this.setHelpUrl('https://moustacheminer.com/');
  }
};
