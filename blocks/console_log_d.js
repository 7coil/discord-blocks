Blockly.Blocks['console_log'] = {
  init: function() {
    this.appendValueInput("string")
        .setCheck(null)
        .appendField("log to console");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
