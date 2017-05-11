Blockly.Blocks['add_perm'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("permission")
			.appendField(new Blockly.FieldDropdown([["Allows creation of instant invites","0x00000001"], ["Allows kicking members","0x00000002"], ["Allows banning members","0x00000004"], ["Allows all permissions and bypass channel permission overwrites","0x00000008"], ["Allows management and editing of channels","0x00000010"], ["Allows management and editing of the guild","0x00000020"], ["Allows for the addition of reactions to messages","0x00000040"], ["Allows reading messages in a channel. The channel will not appear for users without this permission","0x00000400"], ["Allows for sending messages in a channel.","0x00000800\t"], ["Allows for sending of /tts messages","0x00001000"], ["Allows for deletion of other users messages","0x00002000"], ["Links sent by this user will be auto-embedded","0x00004000"], ["Allows for uploading images and files","0x00008000"], ["Allows for reading of message history","0x00010000"], ["Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel","0x00020000"], ["Allows the usage of custom emojis from other servers","0x00040000"], ["Allows for joining of a voice channel","0x00100000"], ["Allows for speaking in a voice channel","0x00200000"], ["Allows for muting members in a voice channel","0x00400000"], ["Allows for deafening of members in a voice channel","0x00800000"], ["Allows for moving of members between voice channels","0x01000000"], ["Allows for using voice-activity-detection in a voice channel","0x02000000"], ["Allows for modification of own nickname","0x04000000"], ["Allows for modification of other users nicknames","0x08000000"], ["Allows management and editing of roles","0x10000000"], ["Allows management and editing of webhooks","0x20000000"], ["Allows management and editing of emojis","0x40000000"]]), "permission");
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip('Get the constant for each permission which can be added to the "permission" variable');
		this.setHelpUrl('');
	}
};
