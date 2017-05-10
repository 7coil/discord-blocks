Blockly.Blocks['client_login'] = {
  init: function() {
    this.appendValueInput("token")
        .setCheck(null)
        .appendField("Create")
        .appendField(new Blockly.FieldVariable("client"), "client")
        .appendField("with token");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Log into Discord');
    this.setHelpUrl('https://discordapp.com/developers/applications/me');
  }
};
