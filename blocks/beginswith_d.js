Blockly.Blocks['beginswith'] = {
  init: function() {
    this.appendValueInput("string")
        .setCheck("String");
    this.appendValueInput("begins")
        .setCheck("String")
        .appendField("begins with");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
