Blockly.Blocks['message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["content","content"], ["author ID","author.id"], ["message ID","id"], ["channel ID","channel.id"], ["guild ID","guild.id"], ["author's username","author.username"], ["author's nickname","member.nickname"], ["author's discriminator","author.discriminator"], ["author's usertag","author.tag"], ["author's icon URL","member.displayAvatarURL"], ["author's default icon URL","member.defaultAvatarURL"], ["channel's name","channel.name"], ["guild's name","guild.name"], ["guild's AFK voice channel","guild.afkChannelID"], ["guild's icon URL","guild.iconURL"], ["guild's region","guild.region"]]), "variable")
        .appendField("of")
        .appendField(new Blockly.FieldVariable("message"), "message");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('Get string data of message');
    this.setHelpUrl('');
  }
};
