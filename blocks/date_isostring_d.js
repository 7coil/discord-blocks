Blockly.Blocks['date_isostring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("iso date");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('Get the current ISO Date');
    this.setHelpUrl('');
  }
};
