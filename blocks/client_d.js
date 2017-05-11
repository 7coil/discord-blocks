Blockly.Blocks['client'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ping","ping"], ["ready timestamp","readyTimestamp"], ["status","status"], ["token","token"], ["uptime","uptime"], ["ID","user.id"], ["username","user.username"], ["discriminator","user.discriminator"], ["usertag","user.tag"], ["icon URL","user.displayAvatarURL"], ["default icon URL","user.defaultAvatarURL"]]), "variable")
        .appendField("of")
        .appendField(new Blockly.FieldVariable("client"), "client");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('Get data of client');
    this.setHelpUrl('');
  }
};
