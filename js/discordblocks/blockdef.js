
Blockly.Blocks.Client_constructor = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('Client_constructor');
		this.setOutput(true, 'Client');
		this.setColour(160);
		this.setTooltip('The main hub for interacting with the Discord API, and the starting point for any bot.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client');
	}
};

Blockly.Blocks.Client_options = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get options of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientOptions');
		this.setColour(230);
		this.setTooltip('The options the client was instantiated with');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=options');
	}
};

Blockly.Blocks.Client_shard = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get shard of');
		this.setInputsInline(true);
		this.setOutput(true, 'ShardClientUtil');
		this.setColour(230);
		this.setTooltip('The shard helpers for the client\n(only if the process was spawned as a child, such as from a {@link ShardingManager})');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=shard');
	}
};

Blockly.Blocks.Client_users = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get users of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'User']);
		this.setColour(230);
		this.setTooltip('All of the {@link User} objects that have been cached at any point, mapped by their IDs');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=users');
	}
};

Blockly.Blocks.Client_guilds = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get guilds of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Guild']);
		this.setColour(230);
		this.setTooltip('All of the guilds the client is currently handling, mapped by their IDs -\nas long as sharding isn\'t being used, this will be *every* guild the bot is a member of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guilds');
	}
};

Blockly.Blocks.Client_channels = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get channels of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Channel']);
		this.setColour(230);
		this.setTooltip('All of the {@link Channel}s that the client is currently handling, mapped by their IDs -\nas long as sharding isn\'t being used, this will be *every* channel in *every* guild, and all DM channels');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channels');
	}
};

Blockly.Blocks.Client_presences = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get presences of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Presence']);
		this.setColour(230);
		this.setTooltip('Presences that have been received for the client user\'s friends, mapped by user IDs\n<warn>This is only filled when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=presences');
	}
};

Blockly.Blocks.Client_token = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get token of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Authorization token for the logged in user/bot\n<warn>This should be kept private at all times.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=token');
	}
};

Blockly.Blocks.Client_user = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get user of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientUser');
		this.setColour(230);
		this.setTooltip('User that the client is logged in as');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=user');
	}
};

Blockly.Blocks.Client_readyAt = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get readyAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('Time at which the client was last regarded as being in the `READY` state\n(each time the client disconnects and successfully reconnects, this will be overwritten)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=readyAt');
	}
};

Blockly.Blocks.Client_broadcasts = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get broadcasts of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'VoiceBroadcast']);
		this.setColour(230);
		this.setTooltip('Active voice broadcasts that have been created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=broadcasts');
	}
};

Blockly.Blocks.Client_pings = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get pings of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'Number']);
		this.setColour(230);
		this.setTooltip('Previous heartbeat pings of the websocket (most recent first, limited to three elements)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=pings');
	}
};

Blockly.Blocks.Client_status = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get status of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Current status of the client\'s connection to Discord');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=status');
	}
};

Blockly.Blocks.Client_uptime = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get uptime of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('How long it has been since the client last entered the `READY` state');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=uptime');
	}
};

Blockly.Blocks.Client_ping = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get ping of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Average heartbeat ping of the websocket, obtained by averaging the {@link Client#pings} property');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=ping');
	}
};

Blockly.Blocks.Client_voiceConnections = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get voiceConnections of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'VoiceConnection']);
		this.setColour(230);
		this.setTooltip('All active voice connections that have been established, mapped by channel ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=voiceConnections');
	}
};

Blockly.Blocks.Client_emojis = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get emojis of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Emoji']);
		this.setColour(230);
		this.setTooltip('All custom emojis that the client has access to, mapped by their IDs');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=emojis');
	}
};

Blockly.Blocks.Client_readyTimestamp = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get readyTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Timestamp of the time the client was last `READY` at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=readyTimestamp');
	}
};

Blockly.Blocks.Client_browser = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get browser of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the client is in a browser environment');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=browser');
	}
};

Blockly.Blocks.Client_createVoiceBroadcast = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createVoiceBroadcast');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a voice broadcast.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=createVoiceBroadcast');
	}
};

Blockly.Blocks.Client_login = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('login with');


		this.appendValueInput('token')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Logs the client in, establishing a websocket connection to Discord.\n<info>Both bot and regular user accounts are supported, but it is highly recommended to use a bot account whenever\npossible. User accounts are subject to harsher ratelimits and other restrictions that don\'t apply to bot accounts.\nBot accounts also have access to many features that user accounts cannot utilise. User accounts that are found to\nbe abusing/overusing the API will be banned, locking you out of Discord entirely.</info>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=login');
	}
};

Blockly.Blocks.Client_destroy = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('destroy');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Logs out, terminates the connection to Discord, and destroys the client.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=destroy');
	}
};

Blockly.Blocks.Client_fetchUser = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchUser with');


		this.appendValueInput('id')
			.setCheck(null);

		this.appendValueInput('cache')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains a user from Discord, or the user cache if it\'s already available.\n<warn>This is only available when using a bot account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchUser');
	}
};

Blockly.Blocks.Client_fetchInvite = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchInvite with');


		this.appendValueInput('invite')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains an invite from Discord.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchInvite');
	}
};

Blockly.Blocks.Client_fetchWebhook = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchWebhook with');


		this.appendValueInput('id')
			.setCheck(null);

		this.appendValueInput('token')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains a webhook from Discord.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchWebhook');
	}
};

Blockly.Blocks.Client_fetchVoiceRegions = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchVoiceRegions');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains the available voice regions from Discord.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchVoiceRegions');
	}
};

Blockly.Blocks.Client_sweepMessages = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sweepMessages with');


		this.appendValueInput('lifetime')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sweeps all text-based channels\' messages and removes the ones older than the max message lifetime.\nIf the message has been edited, the time of the edit is used rather than the time of the original message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=sweepMessages');
	}
};

Blockly.Blocks.Client_fetchApplication = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchApplication with');


		this.appendValueInput('id')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains the OAuth Application of the bot from Discord.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=fetchApplication');
	}
};

Blockly.Blocks.Client_generateInvite = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('generateInvite with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Generates a link that can be used to invite the bot to a guild.\n<warn>This is only available when using a bot account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=generateInvite');
	}
};

Blockly.Blocks.Client_setTimeout = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setTimeout with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('delay')
			.setCheck(null);

		this.appendValueInput('args')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets a timeout that will be automatically cancelled if the client is destroyed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=setTimeout');
	}
};

Blockly.Blocks.Client_setInterval = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setInterval with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('delay')
			.setCheck(null);

		this.appendValueInput('args')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets an interval that will be automatically cancelled if the client is destroyed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=setInterval');
	}
};

Blockly.Blocks.Client_channelUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits channelUpdate')
			.appendField(new Blockly.FieldVariable('oldChannel'), 'oldChannel').appendField(new Blockly.FieldVariable('newChannel'), 'newChannel');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a channel is updated - e.g. name change, topic change.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelUpdate');
	}
};

Blockly.Blocks.Client_guildUnavailable = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildUnavailable')
			.appendField(new Blockly.FieldVariable('guild'), 'guild');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a guild becomes unavailable, likely due to a server outage.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildUnavailable');
	}
};

Blockly.Blocks.Client_emojiCreate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits emojiCreate')
			.appendField(new Blockly.FieldVariable('emoji'), 'emoji');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a custom emoji is created in a guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=emojiCreate');
	}
};

Blockly.Blocks.Client_emojiDelete = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits emojiDelete')
			.appendField(new Blockly.FieldVariable('emoji'), 'emoji');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a custom guild emoji is deleted.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=emojiDelete');
	}
};

Blockly.Blocks.Client_emojiUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits emojiUpdate')
			.appendField(new Blockly.FieldVariable('oldEmoji'), 'oldEmoji').appendField(new Blockly.FieldVariable('newEmoji'), 'newEmoji');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a custom guild emoji is updated.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=emojiUpdate');
	}
};

Blockly.Blocks.Client_guildMemberRemove = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildMemberRemove')
			.appendField(new Blockly.FieldVariable('member'), 'member');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a member leaves a guild, or is kicked.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberRemove');
	}
};

Blockly.Blocks.Client_roleCreate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits roleCreate')
			.appendField(new Blockly.FieldVariable('role'), 'role');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a role is created.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=roleCreate');
	}
};

Blockly.Blocks.Client_roleDelete = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits roleDelete')
			.appendField(new Blockly.FieldVariable('role'), 'role');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a guild role is deleted.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=roleDelete');
	}
};

Blockly.Blocks.Client_roleUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits roleUpdate')
			.appendField(new Blockly.FieldVariable('oldRole'), 'oldRole').appendField(new Blockly.FieldVariable('newRole'), 'newRole');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a guild role is updated.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=roleUpdate');
	}
};

Blockly.Blocks.Client_guildUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildUpdate')
			.appendField(new Blockly.FieldVariable('oldGuild'), 'oldGuild').appendField(new Blockly.FieldVariable('newGuild'), 'newGuild');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a guild is updated - e.g. name change.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildUpdate');
	}
};

Blockly.Blocks.Client_messageReactionAdd = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits messageReactionAdd')
			.appendField(new Blockly.FieldVariable('messageReaction'), 'messageReaction').appendField(new Blockly.FieldVariable('user'), 'user');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a reaction is added to a message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageReactionAdd');
	}
};

Blockly.Blocks.Client_messageReactionRemove = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits messageReactionRemove')
			.appendField(new Blockly.FieldVariable('messageReaction'), 'messageReaction').appendField(new Blockly.FieldVariable('user'), 'user');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a reaction is removed from a message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageReactionRemove');
	}
};

Blockly.Blocks.Client_messageReactionRemoveAll = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits messageReactionRemoveAll')
			.appendField(new Blockly.FieldVariable('message'), 'message');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever all reactions are removed from a message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageReactionRemoveAll');
	}
};

Blockly.Blocks.Client_messageUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits messageUpdate')
			.appendField(new Blockly.FieldVariable('oldMessage'), 'oldMessage').appendField(new Blockly.FieldVariable('newMessage'), 'newMessage');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a message is updated - e.g. embed or content change.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageUpdate');
	}
};

Blockly.Blocks.Client_userNoteUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits userNoteUpdate')
			.appendField(new Blockly.FieldVariable('user'), 'user')
			.appendField(new Blockly.FieldVariable('oldNote'), 'oldNote')
			.appendField(new Blockly.FieldVariable('newNote'), 'newNote');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a note is updated.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=userNoteUpdate');
	}
};

Blockly.Blocks.Client_warn = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits warn')
			.appendField(new Blockly.FieldVariable('info'), 'info');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted for general warnings.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=warn');
	}
};

Blockly.Blocks.Client_debug = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits debug')
			.appendField(new Blockly.FieldVariable('info'), 'info');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted for general debugging information.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=debug');
	}
};

Blockly.Blocks.Client_guildCreate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildCreate')
			.appendField(new Blockly.FieldVariable('guild'), 'guild');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever the client joins a guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildCreate');
	}
};

Blockly.Blocks.Client_channelCreate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits channelCreate')
			.appendField(new Blockly.FieldVariable('channel'), 'channel');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a channel is created.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelCreate');
	}
};

Blockly.Blocks.Client_channelDelete = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits channelDelete')
			.appendField(new Blockly.FieldVariable('channel'), 'channel');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a channel is deleted.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelDelete');
	}
};

Blockly.Blocks.Client_channelPinsUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits channelPinsUpdate')
			.appendField(new Blockly.FieldVariable('channel'), 'channel').appendField(new Blockly.FieldVariable('time'), 'time');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information\ncan be provided easily here - you need to manually check the pins yourself.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=channelPinsUpdate');
	}
};

Blockly.Blocks.Client_guildBanAdd = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildBanAdd')
			.appendField(new Blockly.FieldVariable('guild'), 'guild').appendField(new Blockly.FieldVariable('user'), 'user');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a member is banned from a guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildBanAdd');
	}
};

Blockly.Blocks.Client_guildBanRemove = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildBanRemove')
			.appendField(new Blockly.FieldVariable('guild'), 'guild').appendField(new Blockly.FieldVariable('user'), 'user');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a member is unbanned from a guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildBanRemove');
	}
};

Blockly.Blocks.Client_guildDelete = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildDelete')
			.appendField(new Blockly.FieldVariable('guild'), 'guild');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a guild is deleted/left.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildDelete');
	}
};

Blockly.Blocks.Client_guildMembersChunk = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildMembersChunk')
			.appendField(new Blockly.FieldVariable('members'), 'members').appendField(new Blockly.FieldVariable('guild'), 'guild');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a chunk of guild members is received (all members come from the same guild).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMembersChunk');
	}
};

Blockly.Blocks.Client_message = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits message')
			.appendField(new Blockly.FieldVariable('message'), 'message');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a message is created.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=message');
	}
};

Blockly.Blocks.Client_messageDelete = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits messageDelete')
			.appendField(new Blockly.FieldVariable('message'), 'message');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a message is deleted.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageDelete');
	}
};

Blockly.Blocks.Client_messageDeleteBulk = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits messageDeleteBulk')
			.appendField(new Blockly.FieldVariable('messages'), 'messages');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever messages are deleted in bulk.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageDeleteBulk');
	}
};

Blockly.Blocks.Client_presenceUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits presenceUpdate')
			.appendField(new Blockly.FieldVariable('oldMember'), 'oldMember').appendField(new Blockly.FieldVariable('newMember'), 'newMember');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a guild member\'s presence changes, or they change one of their details.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=presenceUpdate');
	}
};

Blockly.Blocks.Client_userUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits userUpdate')
			.appendField(new Blockly.FieldVariable('oldUser'), 'oldUser').appendField(new Blockly.FieldVariable('newUser'), 'newUser');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a user\'s details (e.g. username) are changed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=userUpdate');
	}
};

Blockly.Blocks.Client_guildMemberAvailable = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildMemberAvailable')
			.appendField(new Blockly.FieldVariable('member'), 'member');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a member becomes available in a large guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberAvailable');
	}
};

Blockly.Blocks.Client_resume = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits resume')
			.appendField(new Blockly.FieldVariable('replayed'), 'replayed');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a WebSocket resumes.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=resume');
	}
};

Blockly.Blocks.Client_typingStart = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits typingStart')
			.appendField(new Blockly.FieldVariable('channel'), 'channel').appendField(new Blockly.FieldVariable('user'), 'user');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a user starts typing in a channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=typingStart');
	}
};

Blockly.Blocks.Client_typingStop = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits typingStop')
			.appendField(new Blockly.FieldVariable('channel'), 'channel').appendField(new Blockly.FieldVariable('user'), 'user');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a user stops typing in a channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=typingStop');
	}
};

Blockly.Blocks.Client_clientUserGuildSettingsUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits clientUserGuildSettingsUpdate')
			.appendField(new Blockly.FieldVariable('clientUserGuildSettings'), 'clientUserGuildSettings');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever the client user\'s settings update.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=clientUserGuildSettingsUpdate');
	}
};

Blockly.Blocks.Client_clientUserSettingsUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits clientUserSettingsUpdate')
			.appendField(new Blockly.FieldVariable('clientUserSettings'), 'clientUserSettings');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the client user\'s settings update.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=clientUserSettingsUpdate');
	}
};

Blockly.Blocks.Client_voiceStateUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits voiceStateUpdate')
			.appendField(new Blockly.FieldVariable('oldMember'), 'oldMember').appendField(new Blockly.FieldVariable('newMember'), 'newMember');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=voiceStateUpdate');
	}
};

Blockly.Blocks.Client_ready = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits ready');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the client becomes ready to start working.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=ready');
	}
};

Blockly.Blocks.Client_reconnecting = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits reconnecting');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever the client tries to reconnect to the WebSocket.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=reconnecting');
	}
};

Blockly.Blocks.Client_error = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits error')
			.appendField(new Blockly.FieldVariable('error'), 'error');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever the client\'s WebSocket encounters a connection error.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=error');
	}
};

Blockly.Blocks.Client_disconnect = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits disconnect')
			.appendField(new Blockly.FieldVariable('event'), 'event');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the client\'s WebSocket disconnects and will no longer attempt to reconnect.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=disconnect');
	}
};

Blockly.Blocks.Client_guildMemberAdd = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildMemberAdd')
			.appendField(new Blockly.FieldVariable('member'), 'member');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a user joins a guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberAdd');
	}
};

Blockly.Blocks.Client_guildMemberUpdate = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildMemberUpdate')
			.appendField(new Blockly.FieldVariable('oldMember'), 'oldMember').appendField(new Blockly.FieldVariable('newMember'), 'newMember');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a guild member changes - i.e. new role, removed role, nickname.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberUpdate');
	}
};

Blockly.Blocks.Client_guildMemberSpeaking = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits guildMemberSpeaking')
			.appendField(new Blockly.FieldVariable('member'), 'member').appendField(new Blockly.FieldVariable('speaking'), 'speaking');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted once a guild member starts/stops speaking.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=guildMemberSpeaking');
	}
};

Blockly.Blocks.DiscordAPIError_code = {
	init() {
		this.appendValueInput('DiscordAPIError')
			.setCheck('DiscordAPIError')
			.appendField('get code of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('HTTP error code returned by Discord');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DiscordAPIError?scrollTo=code');
	}
};

Blockly.Blocks.StreamDispatcher_player = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('get player of');
		this.setInputsInline(true);
		this.setOutput(true, 'AudioPlayer');
		this.setColour(230);
		this.setTooltip('The Audio Player that controls this dispatcher');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=player');
	}
};

Blockly.Blocks.StreamDispatcher_stream = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('get stream of');
		this.setInputsInline(true);
		this.setOutput(true, 'ReadableStream');
		this.setColour(230);
		this.setTooltip('The stream that the dispatcher plays');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=stream');
	}
};

Blockly.Blocks.StreamDispatcher_paused = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('get paused of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether playing is paused');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=paused');
	}
};

Blockly.Blocks.StreamDispatcher_destroyed = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('get destroyed of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this dispatcher has been destroyed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=destroyed');
	}
};

Blockly.Blocks.StreamDispatcher_passes = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('get passes of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('How many passes the dispatcher should take when sending packets to reduce packet loss. Values over 5\naren\'t recommended, as it means you are using 5x more bandwidth. You _can_ edit this at runtime');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=passes');
	}
};

Blockly.Blocks.StreamDispatcher_time = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('get time of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('How long the stream dispatcher has been "speaking" for');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=time');
	}
};

Blockly.Blocks.StreamDispatcher_totalStreamTime = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('get totalStreamTime of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The total time, taking into account pauses and skips, that the dispatcher has been streaming for');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=totalStreamTime');
	}
};

Blockly.Blocks.StreamDispatcher_speaking = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits speaking')
			.appendField(new Blockly.FieldVariable('value'), 'value');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the dispatcher starts/stops speaking.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=speaking');
	}
};

Blockly.Blocks.StreamDispatcher_debug = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits debug')
			.appendField(new Blockly.FieldVariable('info'), 'info');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever the dispatcher has debug information.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=debug');
	}
};

Blockly.Blocks.StreamDispatcher_start = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits start');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted once the dispatcher starts streaming.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=start');
	}
};

Blockly.Blocks.StreamDispatcher_end = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits end')
			.appendField(new Blockly.FieldVariable('reason'), 'reason');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted once the dispatcher ends.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=end');
	}
};

Blockly.Blocks.StreamDispatcher_error = {
	init() {
		this.appendValueInput('StreamDispatcher')
			.setCheck('StreamDispatcher')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits error')
			.appendField(new Blockly.FieldVariable('error'), 'error');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted if the dispatcher encounters an error.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=error');
	}
};

Blockly.Blocks.VoiceReceiver_destroyed = {
	init() {
		this.appendValueInput('VoiceReceiver')
			.setCheck('VoiceReceiver')
			.appendField('get destroyed of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not this receiver has been destroyed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceReceiver?scrollTo=destroyed');
	}
};

Blockly.Blocks.VoiceReceiver_voiceConnection = {
	init() {
		this.appendValueInput('VoiceReceiver')
			.setCheck('VoiceReceiver')
			.appendField('get voiceConnection of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceConnection');
		this.setColour(230);
		this.setTooltip('The VoiceConnection that instantiated this');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceReceiver?scrollTo=voiceConnection');
	}
};

Blockly.Blocks.VoiceReceiver_createOpusStream = {
	init() {
		this.appendValueInput('VoiceReceiver')
			.setCheck('VoiceReceiver')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createOpusStream with');


		this.appendValueInput('user')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a readable stream for a user that provides opus data while the user is speaking. When the user\nstops speaking, the stream is destroyed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceReceiver?scrollTo=createOpusStream');
	}
};

Blockly.Blocks.VoiceReceiver_createPCMStream = {
	init() {
		this.appendValueInput('VoiceReceiver')
			.setCheck('VoiceReceiver')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createPCMStream with');


		this.appendValueInput('user')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a readable stream for a user that provides PCM data while the user is speaking. When the user\nstops speaking, the stream is destroyed. The stream is 32-bit signed stereo PCM at 48KHz.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceReceiver?scrollTo=createPCMStream');
	}
};

Blockly.Blocks.VoiceReceiver_warn = {
	init() {
		this.appendValueInput('VoiceReceiver')
			.setCheck('VoiceReceiver')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits warn')
			.appendField(new Blockly.FieldVariable('reason'), 'reason').appendField(new Blockly.FieldVariable('message'), 'message');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a voice packet experiences a problem.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceReceiver?scrollTo=warn');
	}
};

Blockly.Blocks.VoiceReceiver_opus = {
	init() {
		this.appendValueInput('VoiceReceiver')
			.setCheck('VoiceReceiver')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits opus')
			.appendField(new Blockly.FieldVariable('user'), 'user').appendField(new Blockly.FieldVariable('buffer'), 'buffer');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever voice data is received from the voice connection. This is _always_ emitted (unlike PCM).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceReceiver?scrollTo=opus');
	}
};

Blockly.Blocks.VoiceReceiver_pcm = {
	init() {
		this.appendValueInput('VoiceReceiver')
			.setCheck('VoiceReceiver')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits pcm')
			.appendField(new Blockly.FieldVariable('user'), 'user').appendField(new Blockly.FieldVariable('buffer'), 'buffer');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emits decoded voice data when it\'s received. For performance reasons, the decoding will only\nhappen if there is at least one `pcm` listener on this receiver.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceReceiver?scrollTo=pcm');
	}
};

Blockly.Blocks.VolumeInterface_volume = {
	init() {
		this.appendValueInput('VolumeInterface')
			.setCheck('VolumeInterface')
			.appendField('get volume of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The current volume of the broadcast');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VolumeInterface?scrollTo=volume');
	}
};

Blockly.Blocks.VolumeInterface_volumeDecibels = {
	init() {
		this.appendValueInput('VolumeInterface')
			.setCheck('VolumeInterface')
			.appendField('get volumeDecibels of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The current volume of the broadcast in decibels');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VolumeInterface?scrollTo=volumeDecibels');
	}
};

Blockly.Blocks.VolumeInterface_volumeLogarithmic = {
	init() {
		this.appendValueInput('VolumeInterface')
			.setCheck('VolumeInterface')
			.appendField('get volumeLogarithmic of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The current volume of the broadcast from a logarithmic scale');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VolumeInterface?scrollTo=volumeLogarithmic');
	}
};

Blockly.Blocks.VolumeInterface_volumeChange = {
	init() {
		this.appendValueInput('VolumeInterface')
			.setCheck('VolumeInterface')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits volumeChange')
			.appendField(new Blockly.FieldVariable('oldVolume'), 'oldVolume').appendField(new Blockly.FieldVariable('newVolume'), 'newVolume');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the volume of this interface changes.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VolumeInterface?scrollTo=volumeChange');
	}
};

Blockly.Blocks.VoiceBroadcast_client = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that created the broadcast');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=client');
	}
};

Blockly.Blocks.VoiceBroadcast_prism = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('get prism of');
		this.setInputsInline(true);
		this.setOutput(true, 'Prism');
		this.setColour(230);
		this.setTooltip('The audio transcoder that this broadcast uses');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=prism');
	}
};

Blockly.Blocks.VoiceBroadcast_currentTranscoder = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('get currentTranscoder of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('The current audio transcoder that is being used');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=currentTranscoder');
	}
};

Blockly.Blocks.VoiceBroadcast_dispatchers = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('get dispatchers of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'StreamDispatcher']);
		this.setColour(230);
		this.setTooltip('An array of subscribed dispatchers');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=dispatchers');
	}
};

Blockly.Blocks.VoiceBroadcast_playStream = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playStream with');


		this.appendValueInput('stream')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Plays any audio stream across the broadcast.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=playStream');
	}
};

Blockly.Blocks.VoiceBroadcast_playFile = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playFile with');


		this.appendValueInput('file')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Play the given file in the voice connection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=playFile');
	}
};

Blockly.Blocks.VoiceBroadcast_playConvertedStream = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playConvertedStream with');


		this.appendValueInput('stream')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Plays a stream of 16-bit signed stereo PCM.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=playConvertedStream');
	}
};

Blockly.Blocks.VoiceBroadcast_playOpusStream = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playOpusStream with');


		this.appendValueInput('stream')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Plays an Opus encoded stream.\n<warn>Note that inline volume is not compatible with this method.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=playOpusStream');
	}
};

Blockly.Blocks.VoiceBroadcast_playArbitraryInput = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playArbitraryInput with');


		this.appendValueInput('input')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Play an arbitrary input that can be [handled by ffmpeg](https://ffmpeg.org/ffmpeg-protocols.html#Description)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=playArbitraryInput');
	}
};

Blockly.Blocks.VoiceBroadcast_unsubscribe = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits unsubscribe')
			.appendField(new Blockly.FieldVariable('dispatcher'), 'dispatcher');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a stream dispatcher unsubscribes from the broadcast.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=unsubscribe');
	}
};

Blockly.Blocks.VoiceBroadcast_subscribe = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits subscribe')
			.appendField(new Blockly.FieldVariable('dispatcher'), 'dispatcher');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a stream dispatcher subscribes to the broadcast.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=subscribe');
	}
};

Blockly.Blocks.VoiceBroadcast_error = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits error')
			.appendField(new Blockly.FieldVariable('error'), 'error');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever an error occurs.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=error');
	}
};

Blockly.Blocks.VoiceBroadcast_warn = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits warn')
			.appendField(new Blockly.FieldVariable('warning'), 'warning');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever the VoiceBroadcast has any warnings.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=warn');
	}
};

Blockly.Blocks.VoiceBroadcast_end = {
	init() {
		this.appendValueInput('VoiceBroadcast')
			.setCheck('VoiceBroadcast')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits end');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted once the broadcast (the audio stream) ends.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceBroadcast?scrollTo=end');
	}
};

Blockly.Blocks.VoiceConnection_voiceManager = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get voiceManager of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientVoiceManager');
		this.setColour(230);
		this.setTooltip('The voice manager that instantiated this connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=voiceManager');
	}
};

Blockly.Blocks.VoiceConnection_client = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=client');
	}
};

Blockly.Blocks.VoiceConnection_prism = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get prism of');
		this.setInputsInline(true);
		this.setOutput(true, 'Prism');
		this.setColour(230);
		this.setTooltip('The audio transcoder for this connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=prism');
	}
};

Blockly.Blocks.VoiceConnection_channel = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get channel of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceChannel');
		this.setColour(230);
		this.setTooltip('The voice channel this connection is currently serving');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=channel');
	}
};

Blockly.Blocks.VoiceConnection_status = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get status of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The current status of the voice connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=status');
	}
};

Blockly.Blocks.VoiceConnection_speaking = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get speaking of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether we\'re currently transmitting audio');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=speaking');
	}
};

Blockly.Blocks.VoiceConnection_receivers = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get receivers of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'VoiceReceiver']);
		this.setColour(230);
		this.setTooltip('An array of Voice Receivers that have been created for this connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=receivers');
	}
};

Blockly.Blocks.VoiceConnection_player = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get player of');
		this.setInputsInline(true);
		this.setOutput(true, 'AudioPlayer');
		this.setColour(230);
		this.setTooltip('The audio player for this voice connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=player');
	}
};

Blockly.Blocks.VoiceConnection_dispatcher = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get dispatcher of');
		this.setInputsInline(true);
		this.setOutput(true, 'StreamDispatcher');
		this.setColour(230);
		this.setTooltip('The current stream dispatcher (if any)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=dispatcher');
	}
};

Blockly.Blocks.VoiceConnection_setTokenAndEndpoint = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setTokenAndEndpoint with');


		this.appendValueInput('token')
			.setCheck(null);

		this.appendValueInput('endpoint')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the token and endpoint required to connect to the voice servers.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=setTokenAndEndpoint');
	}
};

Blockly.Blocks.VoiceConnection_playFile = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playFile with');


		this.appendValueInput('file')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Play the given file in the voice connection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=playFile');
	}
};

Blockly.Blocks.VoiceConnection_playArbitraryInput = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playArbitraryInput with');


		this.appendValueInput('input')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Play an arbitrary input that can be [handled by ffmpeg](https://ffmpeg.org/ffmpeg-protocols.html#Description)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=playArbitraryInput');
	}
};

Blockly.Blocks.VoiceConnection_playStream = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playStream with');


		this.appendValueInput('stream')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Plays and converts an audio stream in the voice connection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=playStream');
	}
};

Blockly.Blocks.VoiceConnection_playConvertedStream = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playConvertedStream with');


		this.appendValueInput('stream')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Plays a stream of 16-bit signed stereo PCM.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=playConvertedStream');
	}
};

Blockly.Blocks.VoiceConnection_playOpusStream = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playOpusStream with');


		this.appendValueInput('stream')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Plays an Opus encoded stream.\n<warn>Note that inline volume is not compatible with this method.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=playOpusStream');
	}
};

Blockly.Blocks.VoiceConnection_playBroadcast = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('playBroadcast with');


		this.appendValueInput('broadcast')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Plays a voice broadcast.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=playBroadcast');
	}
};

Blockly.Blocks.VoiceConnection_createReceiver = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createReceiver');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a VoiceReceiver so you can start listening to voice data.\nIt\'s recommended to only create one of these.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=createReceiver');
	}
};

Blockly.Blocks.VoiceConnection_debug = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits debug')
			.appendField(new Blockly.FieldVariable('message'), 'message');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Debug info from the connection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=debug');
	}
};

Blockly.Blocks.VoiceConnection_warn = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits warn')
			.appendField(new Blockly.FieldVariable('warning'), 'warning');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Warning info from the connection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=warn');
	}
};

Blockly.Blocks.VoiceConnection_newSession = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits newSession');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when a new session ID is received.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=newSession');
	}
};

Blockly.Blocks.VoiceConnection_authenticated = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits authenticated');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when we successfully initiate a voice connection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=authenticated');
	}
};

Blockly.Blocks.VoiceConnection_failed = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits failed')
			.appendField(new Blockly.FieldVariable('error'), 'error');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when we fail to initiate a voice connection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=failed');
	}
};

Blockly.Blocks.VoiceConnection_reconnecting = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits reconnecting');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the voice connection is reconnecting (typically after a region change).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=reconnecting');
	}
};

Blockly.Blocks.VoiceConnection_disconnect = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits disconnect');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the voice connection disconnects.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=disconnect');
	}
};

Blockly.Blocks.VoiceConnection_error = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits error')
			.appendField(new Blockly.FieldVariable('error'), 'error');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever the connection encounters an error.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=error');
	}
};

Blockly.Blocks.VoiceConnection_ready = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits ready');

		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted once the connection is ready, when a promise to join a voice channel resolves,\nthe connection will already be ready.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=ready');
	}
};

Blockly.Blocks.VoiceConnection_speaking = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits speaking')
			.appendField(new Blockly.FieldVariable('user'), 'user').appendField(new Blockly.FieldVariable('speaking'), 'speaking');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever a user starts/stops speaking.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=speaking');
	}
};

Blockly.Blocks.WebhookClient_constructor = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('WebhookClient_constructor');
		this.setOutput(true, 'WebhookClient');
		this.setColour(160);
		this.setTooltip('The webhook client.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient');
	}
};

Blockly.Blocks.WebhookClient_options = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get options of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientOptions');
		this.setColour(230);
		this.setTooltip('The options the client was instantiated with');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=options');
	}
};

Blockly.Blocks.WebhookClient_client = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=client');
	}
};

Blockly.Blocks.WebhookClient_name = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=name');
	}
};

Blockly.Blocks.WebhookClient_token = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get token of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The token for the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=token');
	}
};

Blockly.Blocks.WebhookClient_avatar = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get avatar of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The avatar for the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=avatar');
	}
};

Blockly.Blocks.WebhookClient_id = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=id');
	}
};

Blockly.Blocks.WebhookClient_guildID = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get guildID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The guild the webhook belongs to');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=guildID');
	}
};

Blockly.Blocks.WebhookClient_channelID = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get channelID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The channel the webhook belongs to');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=channelID');
	}
};

Blockly.Blocks.WebhookClient_owner = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get owner of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The owner of the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=owner');
	}
};

Blockly.Blocks.WebhookClient_setTimeout = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setTimeout with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('delay')
			.setCheck(null);

		this.appendValueInput('args')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets a timeout that will be automatically cancelled if the client is destroyed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=setTimeout');
	}
};

Blockly.Blocks.WebhookClient_setInterval = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setInterval with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('delay')
			.setCheck(null);

		this.appendValueInput('args')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets an interval that will be automatically cancelled if the client is destroyed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=setInterval');
	}
};

Blockly.Blocks.WebhookClient_send = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message with this webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=send');
	}
};

Blockly.Blocks.WebhookClient_sendMessage = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendMessage with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message with this webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=sendMessage');
	}
};

Blockly.Blocks.WebhookClient_sendFile = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a file with this webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=sendFile');
	}
};

Blockly.Blocks.WebhookClient_sendCode = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a code block with this webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=sendCode');
	}
};

Blockly.Blocks.WebhookClient_sendSlackMessage = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendSlackMessage with');


		this.appendValueInput('body')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a raw slack message with this webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=sendSlackMessage');
	}
};

Blockly.Blocks.WebhookClient_edit = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('avatar')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=edit');
	}
};

Blockly.Blocks.WebhookClient_delete = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete with');


		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Delete the webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=delete');
	}
};

Blockly.Blocks.Shard_constructor = {
	init() {
		this.appendValueInput('Shard')
			.setCheck('Shard')
			.appendField('Shard_constructor');
		this.setOutput(true, 'Shard');
		this.setColour(160);
		this.setTooltip('Represents a Shard spawned by the ShardingManager.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Shard');
	}
};

Blockly.Blocks.Shard_manager = {
	init() {
		this.appendValueInput('Shard')
			.setCheck('Shard')
			.appendField('get manager of');
		this.setInputsInline(true);
		this.setOutput(true, 'ShardingManager');
		this.setColour(230);
		this.setTooltip('Manager that created the shard');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Shard?scrollTo=manager');
	}
};

Blockly.Blocks.Shard_id = {
	init() {
		this.appendValueInput('Shard')
			.setCheck('Shard')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('ID of the shard');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Shard?scrollTo=id');
	}
};

Blockly.Blocks.Shard_env = {
	init() {
		this.appendValueInput('Shard')
			.setCheck('Shard')
			.appendField('get env of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('The environment variables for the shard');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Shard?scrollTo=env');
	}
};

Blockly.Blocks.Shard_process = {
	init() {
		this.appendValueInput('Shard')
			.setCheck('Shard')
			.appendField('get process of');
		this.setInputsInline(true);
		this.setOutput(true, 'ChildProcess');
		this.setColour(230);
		this.setTooltip('Process of the shard');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Shard?scrollTo=process');
	}
};

Blockly.Blocks.Shard_send = {
	init() {
		this.appendValueInput('Shard')
			.setCheck('Shard')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('message')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sends a message to the shard\'s process.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Shard?scrollTo=send');
	}
};

Blockly.Blocks.Shard_fetchClientValue = {
	init() {
		this.appendValueInput('Shard')
			.setCheck('Shard')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchClientValue with');


		this.appendValueInput('prop')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches a client property value of the shard.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Shard?scrollTo=fetchClientValue');
	}
};

Blockly.Blocks.Shard_eval = {
	init() {
		this.appendValueInput('Shard')
			.setCheck('Shard')
			.appendField('with');
		this.appendDummyInput()
			.appendField('eval with');


		this.appendValueInput('script')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Evaluates a script on the shard, in the context of the client.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Shard?scrollTo=eval');
	}
};

Blockly.Blocks.ShardClientUtil_constructor = {
	init() {
		this.appendValueInput('ShardClientUtil')
			.setCheck('ShardClientUtil')
			.appendField('ShardClientUtil_constructor');
		this.setOutput(true, 'ShardClientUtil');
		this.setColour(160);
		this.setTooltip('Helper class for sharded clients spawned as a child process, such as from a ShardingManager.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardClientUtil');
	}
};

Blockly.Blocks.ShardClientUtil_id = {
	init() {
		this.appendValueInput('ShardClientUtil')
			.setCheck('ShardClientUtil')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('ID of this shard');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardClientUtil?scrollTo=id');
	}
};

Blockly.Blocks.ShardClientUtil_count = {
	init() {
		this.appendValueInput('ShardClientUtil')
			.setCheck('ShardClientUtil')
			.appendField('get count of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Total number of shards');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardClientUtil?scrollTo=count');
	}
};

Blockly.Blocks.ShardClientUtil_send = {
	init() {
		this.appendValueInput('ShardClientUtil')
			.setCheck('ShardClientUtil')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('message')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sends a message to the master process.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardClientUtil?scrollTo=send');
	}
};

Blockly.Blocks.ShardClientUtil_fetchClientValues = {
	init() {
		this.appendValueInput('ShardClientUtil')
			.setCheck('ShardClientUtil')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchClientValues with');


		this.appendValueInput('prop')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches a client property value of each shard.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardClientUtil?scrollTo=fetchClientValues');
	}
};

Blockly.Blocks.ShardClientUtil_broadcastEval = {
	init() {
		this.appendValueInput('ShardClientUtil')
			.setCheck('ShardClientUtil')
			.appendField('with');
		this.appendDummyInput()
			.appendField('broadcastEval with');


		this.appendValueInput('script')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Evaluates a script on all shards, in the context of the Clients.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardClientUtil?scrollTo=broadcastEval');
	}
};

Blockly.Blocks.ShardClientUtil_singleton = {
	init() {
		this.appendValueInput('ShardClientUtil')
			.setCheck('ShardClientUtil')
			.appendField('with');
		this.appendDummyInput()
			.appendField('singleton with');


		this.appendValueInput('client')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates/gets the singleton of this class.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardClientUtil?scrollTo=singleton');
	}
};

Blockly.Blocks.ShardingManager_constructor = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('ShardingManager_constructor');
		this.setOutput(true, 'ShardingManager');
		this.setColour(160);
		this.setTooltip('This is a utility class that can be used to help you spawn shards of your client. Each shard is completely separate\nfrom the other. The Shard Manager takes a path to a file and spawns it under the specified amount of shards safely.\nIf you do not select an amount of shards, the manager will automatically decide the best amount.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager');
	}
};

Blockly.Blocks.ShardingManager_file = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('get file of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Path to the shard script file');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=file');
	}
};

Blockly.Blocks.ShardingManager_totalShards = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('get totalShards of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Amount of shards that this manager is going to spawn');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=totalShards');
	}
};

Blockly.Blocks.ShardingManager_respawn = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('get respawn of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether shards should automatically respawn upon exiting');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=respawn');
	}
};

Blockly.Blocks.ShardingManager_shardArgs = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('get shardArgs of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'String']);
		this.setColour(230);
		this.setTooltip('An array of arguments to pass to shards');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=shardArgs');
	}
};

Blockly.Blocks.ShardingManager_token = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('get token of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Token to use for obtaining the automatic shard count, and passing to shards');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=token');
	}
};

Blockly.Blocks.ShardingManager_shards = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('get shards of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Number', 'Shard']);
		this.setColour(230);
		this.setTooltip('A collection of shards that this manager has spawned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=shards');
	}
};

Blockly.Blocks.ShardingManager_createShard = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createShard with');


		this.appendValueInput('id')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Spawns a single shard.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=createShard');
	}
};

Blockly.Blocks.ShardingManager_spawn = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('with');
		this.appendDummyInput()
			.appendField('spawn with');


		this.appendValueInput('amount')
			.setCheck(null);

		this.appendValueInput('delay')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Spawns multiple shards.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=spawn');
	}
};

Blockly.Blocks.ShardingManager_broadcast = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('with');
		this.appendDummyInput()
			.appendField('broadcast with');


		this.appendValueInput('message')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to all shards.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=broadcast');
	}
};

Blockly.Blocks.ShardingManager_broadcastEval = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('with');
		this.appendDummyInput()
			.appendField('broadcastEval with');


		this.appendValueInput('script')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Evaluates a script on all shards, in the context of the Clients.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=broadcastEval');
	}
};

Blockly.Blocks.ShardingManager_fetchClientValues = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchClientValues with');


		this.appendValueInput('prop')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches a client property value of each shard.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=fetchClientValues');
	}
};

Blockly.Blocks.ShardingManager_message = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits message')
			.appendField(new Blockly.FieldVariable('shard'), 'shard').appendField(new Blockly.FieldVariable('message'), 'message');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted upon recieving a message from a shard.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=message');
	}
};

Blockly.Blocks.ShardingManager_launch = {
	init() {
		this.appendValueInput('ShardingManager')
			.setCheck('ShardingManager')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits launch')
			.appendField(new Blockly.FieldVariable('shard'), 'shard');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted upon launching a shard.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=launch');
	}
};

Blockly.Blocks.Attachment_constructor = {
	init() {
		this.appendValueInput('Attachment')
			.setCheck('Attachment')
			.appendField('Attachment_constructor');
		this.setOutput(true, 'Attachment');
		this.setColour(160);
		this.setTooltip('Represents an attachment in a message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Attachment');
	}
};

Blockly.Blocks.Attachment_name = {
	init() {
		this.appendValueInput('Attachment')
			.setCheck('Attachment')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the file');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Attachment?scrollTo=name');
	}
};

Blockly.Blocks.Attachment_attachment = {
	init() {
		this.appendValueInput('Attachment')
			.setCheck('Attachment')
			.appendField('get attachment of');
		this.setInputsInline(true);
		this.setOutput(true, 'BufferResolvable');
		this.setColour(230);
		this.setTooltip('The file');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Attachment?scrollTo=attachment');
	}
};

Blockly.Blocks.Attachment_setAttachment = {
	init() {
		this.appendValueInput('Attachment')
			.setCheck('Attachment')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setAttachment with');


		this.appendValueInput('file')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the file of this attachment.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Attachment?scrollTo=setAttachment');
	}
};

Blockly.Blocks.Attachment_setFile = {
	init() {
		this.appendValueInput('Attachment')
			.setCheck('Attachment')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the file of this attachment.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Attachment?scrollTo=setFile');
	}
};

Blockly.Blocks.Attachment_setName = {
	init() {
		this.appendValueInput('Attachment')
			.setCheck('Attachment')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setName with');


		this.appendValueInput('name')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the name of this attachment.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Attachment?scrollTo=setName');
	}
};

Blockly.Blocks.Channel_client = {
	init() {
		this.appendValueInput('Channel')
			.setCheck('Channel')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the Channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=client');
	}
};

Blockly.Blocks.Channel_type = {
	init() {
		this.appendValueInput('Channel')
			.setCheck('Channel')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of the channel, either:\n* `dm` - a DM channel\n* `group` - a Group DM channel\n* `text` - a guild text channel\n* `voice` - a guild voice channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=type');
	}
};

Blockly.Blocks.Channel_id = {
	init() {
		this.appendValueInput('Channel')
			.setCheck('Channel')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The unique ID of the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=id');
	}
};

Blockly.Blocks.Channel_createdTimestamp = {
	init() {
		this.appendValueInput('Channel')
			.setCheck('Channel')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the channel was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.Channel_createdAt = {
	init() {
		this.appendValueInput('Channel')
			.setCheck('Channel')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the channel was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=createdAt');
	}
};

Blockly.Blocks.Channel_delete = {
	init() {
		this.appendValueInput('Channel')
			.setCheck('Channel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Channel?scrollTo=delete');
	}
};

Blockly.Blocks.ClientUser_verified = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get verified of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not this account has been verified');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=verified');
	}
};

Blockly.Blocks.ClientUser_email = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get email of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The email of this account');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=email');
	}
};

Blockly.Blocks.ClientUser_friends = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get friends of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'User']);
		this.setColour(230);
		this.setTooltip('A Collection of friends for the logged in user\n<warn>This is only filled when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=friends');
	}
};

Blockly.Blocks.ClientUser_blocked = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get blocked of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'User']);
		this.setColour(230);
		this.setTooltip('A Collection of blocked users for the logged in user\n<warn>This is only filled when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=blocked');
	}
};

Blockly.Blocks.ClientUser_notes = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get notes of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'String']);
		this.setColour(230);
		this.setTooltip('A Collection of notes for the logged in user\n<warn>This is only filled when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=notes');
	}
};

Blockly.Blocks.ClientUser_premium = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get premium of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If the user has Discord premium (nitro)\n<warn>This is only filled when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=premium');
	}
};

Blockly.Blocks.ClientUser_mfaEnabled = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get mfaEnabled of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If the user has MFA enabled on their account\n<warn>This is only filled when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=mfaEnabled');
	}
};

Blockly.Blocks.ClientUser_mobile = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get mobile of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If the user has ever used a mobile device on Discord\n<warn>This is only filled when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=mobile');
	}
};

Blockly.Blocks.ClientUser_settings = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get settings of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientUserSettings');
		this.setColour(230);
		this.setTooltip('Various settings for this user\n<warn>This is only filled when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=settings');
	}
};

Blockly.Blocks.ClientUser_guildSettings = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get guildSettings of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'ClientUserGuildSettings']);
		this.setColour(230);
		this.setTooltip('All of the user\'s guild settings\n<warn>This is only filled when using a user account</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=guildSettings');
	}
};

Blockly.Blocks.ClientUser_client = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that created the instance of the user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=client');
	}
};

Blockly.Blocks.ClientUser_id = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=id');
	}
};

Blockly.Blocks.ClientUser_username = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get username of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The username of the user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=username');
	}
};

Blockly.Blocks.ClientUser_discriminator = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get discriminator of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A discriminator based on username for the user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=discriminator');
	}
};

Blockly.Blocks.ClientUser_avatar = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get avatar of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The ID of the user\'s avatar');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=avatar');
	}
};

Blockly.Blocks.ClientUser_bot = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get bot of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the user is a bot');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=bot');
	}
};

Blockly.Blocks.ClientUser_lastMessageID = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get lastMessageID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the last message sent by the user, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=lastMessageID');
	}
};

Blockly.Blocks.ClientUser_lastMessage = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get lastMessage of');
		this.setInputsInline(true);
		this.setOutput(true, 'Message');
		this.setColour(230);
		this.setTooltip('The Message object of the last message sent by the user, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=lastMessage');
	}
};

Blockly.Blocks.ClientUser_createdTimestamp = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the user was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.ClientUser_createdAt = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the user was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createdAt');
	}
};

Blockly.Blocks.ClientUser_presence = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get presence of');
		this.setInputsInline(true);
		this.setOutput(true, 'Presence');
		this.setColour(230);
		this.setTooltip('The presence of this user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=presence');
	}
};

Blockly.Blocks.ClientUser_avatarURL = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get avatarURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A link to the user\'s avatar');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=avatarURL');
	}
};

Blockly.Blocks.ClientUser_defaultAvatarURL = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get defaultAvatarURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A link to the user\'s default avatar');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=defaultAvatarURL');
	}
};

Blockly.Blocks.ClientUser_displayAvatarURL = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get displayAvatarURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A link to the user\'s avatar if they have one. Otherwise a link to their default avatar will be returned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=displayAvatarURL');
	}
};

Blockly.Blocks.ClientUser_tag = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get tag of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The Discord "tag" for this user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=tag');
	}
};

Blockly.Blocks.ClientUser_note = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get note of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The note that is set for the user\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=note');
	}
};

Blockly.Blocks.ClientUser_dmChannel = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get dmChannel of');
		this.setInputsInline(true);
		this.setOutput(true, 'DMChannel');
		this.setColour(230);
		this.setTooltip('The DM between the client\'s user and this user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=dmChannel');
	}
};

Blockly.Blocks.ClientUser_setUsername = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setUsername with');


		this.appendValueInput('username')
			.setCheck(null);

		this.appendValueInput('password')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the username of the logged in client.\n<info>Changing usernames in Discord is heavily rate limited, with only 2 requests\nevery hour. Use this sparingly!</info>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setUsername');
	}
};

Blockly.Blocks.ClientUser_setEmail = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setEmail with');


		this.appendValueInput('email')
			.setCheck(null);

		this.appendValueInput('password')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Changes the email for the client user\'s account.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setEmail');
	}
};

Blockly.Blocks.ClientUser_setPassword = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setPassword with');


		this.appendValueInput('newPassword')
			.setCheck(null);

		this.appendValueInput('oldPassword')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Changes the password for the client user\'s account.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setPassword');
	}
};

Blockly.Blocks.ClientUser_setAvatar = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setAvatar with');


		this.appendValueInput('avatar')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the avatar of the logged in client.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setAvatar');
	}
};

Blockly.Blocks.ClientUser_setPresence = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setPresence with');


		this.appendValueInput('data')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the full presence of the client user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setPresence');
	}
};

Blockly.Blocks.ClientUser_setStatus = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setStatus with');


		this.appendValueInput('status')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the status of the client user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setStatus');
	}
};

Blockly.Blocks.ClientUser_setGame = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setGame with');


		this.appendValueInput('game')
			.setCheck(null);

		this.appendValueInput('streamingURL')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the game the client user is playing.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setGame');
	}
};

Blockly.Blocks.ClientUser_setAFK = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setAFK with');


		this.appendValueInput('afk')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets/removes the AFK flag for the client user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setAFK');
	}
};

Blockly.Blocks.ClientUser_fetchMentions = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMentions with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches messages that mentioned the client\'s user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=fetchMentions');
	}
};

Blockly.Blocks.ClientUser_addFriend = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addFriend with');


		this.appendValueInput('user')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a friend request.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=addFriend');
	}
};

Blockly.Blocks.ClientUser_removeFriend = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('removeFriend with');


		this.appendValueInput('user')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Remove a friend.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=removeFriend');
	}
};

Blockly.Blocks.ClientUser_createGuild = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createGuild with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('region')
			.setCheck(null);

		this.appendValueInput('icon')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a guild.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createGuild');
	}
};

Blockly.Blocks.ClientUser_createGroupDM = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createGroupDM with');


		this.appendValueInput('recipients')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a Group DM.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createGroupDM');
	}
};

Blockly.Blocks.ClientUser_acceptInvite = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('acceptInvite with');


		this.appendValueInput('invite')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Accepts an invite to join a guild.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=acceptInvite');
	}
};

Blockly.Blocks.ClientUser_typingIn = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('typingIn with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Check whether the user is typing in a channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=typingIn');
	}
};

Blockly.Blocks.ClientUser_typingSinceIn = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('typingSinceIn with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Get the time that the user started typing.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=typingSinceIn');
	}
};

Blockly.Blocks.ClientUser_typingDurationIn = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('typingDurationIn with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Get the amount of time the user has been typing in a channel for (in milliseconds), or -1 if they\'re not typing.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=typingDurationIn');
	}
};

Blockly.Blocks.ClientUser_createDM = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createDM');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a DM channel between the client and the user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=createDM');
	}
};

Blockly.Blocks.ClientUser_deleteDM = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('deleteDM');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=deleteDM');
	}
};

Blockly.Blocks.ClientUser_block = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('block');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Blocks the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=block');
	}
};

Blockly.Blocks.ClientUser_unblock = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('unblock');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Unblocks the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=unblock');
	}
};

Blockly.Blocks.ClientUser_fetchProfile = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchProfile');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Get the profile of the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=fetchProfile');
	}
};

Blockly.Blocks.ClientUser_setNote = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setNote with');


		this.appendValueInput('note')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets a note for the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setNote');
	}
};

Blockly.Blocks.ClientUser_equals = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('user')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if the user is equal to another. It compares ID, username, discriminator, avatar, and bot flags.\nIt is recommended to compare equality by using `user.id === user2.id` unless you want to compare all properties.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=equals');
	}
};

Blockly.Blocks.ClientUser_toString = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the user\'s mention instead of the User object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=toString');
	}
};

Blockly.Blocks.ClientUser_send = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=send');
	}
};

Blockly.Blocks.ClientUser_sendMessage = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendMessage with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=sendMessage');
	}
};

Blockly.Blocks.ClientUser_sendEmbed = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendEmbed with');


		this.appendValueInput('embed')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send an embed to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=sendEmbed');
	}
};

Blockly.Blocks.ClientUser_sendFile = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a file to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=sendFile');
	}
};

Blockly.Blocks.ClientUser_sendCode = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a code block to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=sendCode');
	}
};

Blockly.Blocks.ClientUserChannelOverride_muted = {
	init() {
		this.appendValueInput('ClientUserChannelOverride')
			.setCheck('ClientUserChannelOverride')
			.appendField('get muted of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the channel is muted');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserChannelOverride?scrollTo=muted');
	}
};

Blockly.Blocks.ClientUserChannelOverride_messageNotifications = {
	init() {
		this.appendValueInput('ClientUserChannelOverride')
			.setCheck('ClientUserChannelOverride')
			.appendField('get messageNotifications of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageNotificationType');
		this.setColour(230);
		this.setTooltip('The type of message that should notify you');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserChannelOverride?scrollTo=messageNotifications');
	}
};

Blockly.Blocks.ClientUserGuildSettings_client = {
	init() {
		this.appendValueInput('ClientUserGuildSettings')
			.setCheck('ClientUserGuildSettings')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that created the instance of the ClientUserGuildSettings');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserGuildSettings?scrollTo=client');
	}
};

Blockly.Blocks.ClientUserGuildSettings_guildID = {
	init() {
		this.appendValueInput('ClientUserGuildSettings')
			.setCheck('ClientUserGuildSettings')
			.appendField('get guildID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the guild this settings are for');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserGuildSettings?scrollTo=guildID');
	}
};

Blockly.Blocks.ClientUserGuildSettings_mobilePush = {
	init() {
		this.appendValueInput('ClientUserGuildSettings')
			.setCheck('ClientUserGuildSettings')
			.appendField('get mobilePush of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether to receive mobile push notifications');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserGuildSettings?scrollTo=mobilePush');
	}
};

Blockly.Blocks.ClientUserGuildSettings_messageNotifications = {
	init() {
		this.appendValueInput('ClientUserGuildSettings')
			.setCheck('ClientUserGuildSettings')
			.appendField('get messageNotifications of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageNotificationType');
		this.setColour(230);
		this.setTooltip('The type of message that should notify you');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserGuildSettings?scrollTo=messageNotifications');
	}
};

Blockly.Blocks.ClientUserGuildSettings_muted = {
	init() {
		this.appendValueInput('ClientUserGuildSettings')
			.setCheck('ClientUserGuildSettings')
			.appendField('get muted of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the guild is muted');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserGuildSettings?scrollTo=muted');
	}
};

Blockly.Blocks.ClientUserGuildSettings_suppressEveryone = {
	init() {
		this.appendValueInput('ClientUserGuildSettings')
			.setCheck('ClientUserGuildSettings')
			.appendField('get suppressEveryone of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether to suppress everyone mention');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserGuildSettings?scrollTo=suppressEveryone');
	}
};

Blockly.Blocks.ClientUserGuildSettings_channelOverrides = {
	init() {
		this.appendValueInput('ClientUserGuildSettings')
			.setCheck('ClientUserGuildSettings')
			.appendField('get channelOverrides of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'ClientUserChannelOverride']);
		this.setColour(230);
		this.setTooltip('A collection containing all the channel overrides');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserGuildSettings?scrollTo=channelOverrides');
	}
};

Blockly.Blocks.ClientUserGuildSettings_update = {
	init() {
		this.appendValueInput('ClientUserGuildSettings')
			.setCheck('ClientUserGuildSettings')
			.appendField('with');
		this.appendDummyInput()
			.appendField('update with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('value')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Update a specific property of the guild settings.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserGuildSettings?scrollTo=update');
	}
};

Blockly.Blocks.ClientUserSettings_convertEmoticons = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get convertEmoticons of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Automatically convert emoticons in your messages to emoji\nFor example, when you type `:-)` Discord will convert it to 😃');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=convertEmoticons');
	}
};

Blockly.Blocks.ClientUserSettings_defaultGuildsRestricted = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get defaultGuildsRestricted of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If new guilds should automatically disable DMs between you and its members');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=defaultGuildsRestricted');
	}
};

Blockly.Blocks.ClientUserSettings_detectPlatformAccounts = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get detectPlatformAccounts of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Automatically detect accounts from services like Steam and Blizzard when you open the Discord client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=detectPlatformAccounts');
	}
};

Blockly.Blocks.ClientUserSettings_developerMode = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get developerMode of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Developer Mode exposes context menu items helpful for people writing bots using the Discord API');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=developerMode');
	}
};

Blockly.Blocks.ClientUserSettings_enableTTSCommand = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get enableTTSCommand of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Allow playback and usage of the `/tts` command');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=enableTTSCommand');
	}
};

Blockly.Blocks.ClientUserSettings_theme = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get theme of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The theme of the client. Either `light` or `dark`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=theme');
	}
};

Blockly.Blocks.ClientUserSettings_status = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get status of');
		this.setInputsInline(true);
		this.setOutput(true, 'PresenceStatus');
		this.setColour(230);
		this.setTooltip('Last status set in the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=status');
	}
};

Blockly.Blocks.ClientUserSettings_showCurrentGame = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get showCurrentGame of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Display currently running game as status message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=showCurrentGame');
	}
};

Blockly.Blocks.ClientUserSettings_inlineAttachmentMedia = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get inlineAttachmentMedia of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Display images, videos, and lolcats when uploaded directly to Discord');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=inlineAttachmentMedia');
	}
};

Blockly.Blocks.ClientUserSettings_inlineEmbedMedia = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get inlineEmbedMedia of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Display images, videos, and lolcats when uploaded posted as links in chat');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=inlineEmbedMedia');
	}
};

Blockly.Blocks.ClientUserSettings_locale = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get locale of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Language the Discord client will use, as an RFC 3066 language identifier');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=locale');
	}
};

Blockly.Blocks.ClientUserSettings_messageDisplayCompact = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get messageDisplayCompact of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Display messages in compact mode');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=messageDisplayCompact');
	}
};

Blockly.Blocks.ClientUserSettings_renderReactions = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get renderReactions of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Show emoji reactions on messages');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=renderReactions');
	}
};

Blockly.Blocks.ClientUserSettings_guildPositions = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get guildPositions of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'Snowflake']);
		this.setColour(230);
		this.setTooltip('Array of snowflake IDs for guilds, in the order they appear in the Discord client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=guildPositions');
	}
};

Blockly.Blocks.ClientUserSettings_restrictedGuilds = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get restrictedGuilds of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'Snowflake']);
		this.setColour(230);
		this.setTooltip('Array of snowflake IDs for guilds which you will not recieve DMs from');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=restrictedGuilds');
	}
};

Blockly.Blocks.ClientUserSettings_explicitContentFilter = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get explicitContentFilter of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Safe direct messaging; force people\'s messages with images to be scanned before they are sent to you.\nOne of `DISABLED`, `NON_FRIENDS`, `FRIENDS_AND_NON_FRIENDS`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=explicitContentFilter');
	}
};

Blockly.Blocks.ClientUserSettings_friendSources = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get friendSources of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Who can add you as a friend');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=friendSources');
	}
};

Blockly.Blocks.ClientUserSettings_update = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('with');
		this.appendDummyInput()
			.appendField('update with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('value')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Update a specific property of of user settings.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=update');
	}
};

Blockly.Blocks.ClientUserSettings_setGuildPosition = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setGuildPosition with');


		this.appendValueInput('guild')
			.setCheck(null);

		this.appendValueInput('position')
			.setCheck(null);

		this.appendValueInput('relative')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=setGuildPosition');
	}
};

Blockly.Blocks.ClientUserSettings_addRestrictedGuild = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addRestrictedGuild with');


		this.appendValueInput('guild')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Add a guild to the list of restricted guilds.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=addRestrictedGuild');
	}
};

Blockly.Blocks.ClientUserSettings_removeRestrictedGuild = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('with');
		this.appendDummyInput()
			.appendField('removeRestrictedGuild with');


		this.appendValueInput('guild')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Remove a guild from the list of restricted guilds.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientUserSettings?scrollTo=removeRestrictedGuild');
	}
};

Blockly.Blocks.DMChannel_recipient = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get recipient of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The recipient on the other end of the DM');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=recipient');
	}
};

Blockly.Blocks.DMChannel_messages = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get messages of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Message']);
		this.setColour(230);
		this.setTooltip('A collection containing the messages sent to this channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=messages');
	}
};

Blockly.Blocks.DMChannel_lastMessageID = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get lastMessageID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the last message in the channel, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=lastMessageID');
	}
};

Blockly.Blocks.DMChannel_typing = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get typing of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the typing indicator is being shown in the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=typing');
	}
};

Blockly.Blocks.DMChannel_typingCount = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get typingCount of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Number of times `startTyping` has been called');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=typingCount');
	}
};

Blockly.Blocks.DMChannel_client = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the Channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=client');
	}
};

Blockly.Blocks.DMChannel_type = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of the channel, either:\n* `dm` - a DM channel\n* `group` - a Group DM channel\n* `text` - a guild text channel\n* `voice` - a guild voice channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=type');
	}
};

Blockly.Blocks.DMChannel_id = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The unique ID of the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=id');
	}
};

Blockly.Blocks.DMChannel_createdTimestamp = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the channel was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.DMChannel_createdAt = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the channel was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=createdAt');
	}
};

Blockly.Blocks.DMChannel_toString = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the recipient\'s mention instead of the\nDM channel object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=toString');
	}
};

Blockly.Blocks.DMChannel_send = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=send');
	}
};

Blockly.Blocks.DMChannel_fetchMessage = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMessage with');


		this.appendValueInput('messageID')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets a single message from this channel, regardless of it being cached or not. Since the single message fetching\nendpoint is reserved for bot accounts, this abstracts the `fetchMessages` method to obtain the single message when\nusing a user account.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=fetchMessage');
	}
};

Blockly.Blocks.DMChannel_fetchMessages = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMessages with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets the past messages sent in this channel. Resolves with a collection mapping message ID\'s to Message objects.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=fetchMessages');
	}
};

Blockly.Blocks.DMChannel_fetchPinnedMessages = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchPinnedMessages');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches the pinned messages of this channel and returns a collection of them.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=fetchPinnedMessages');
	}
};

Blockly.Blocks.DMChannel_search = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('search with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Performs a search within the channel.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=search');
	}
};

Blockly.Blocks.DMChannel_createCollector = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createCollector with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a Message Collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=createCollector');
	}
};

Blockly.Blocks.DMChannel_awaitMessages = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('awaitMessages with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Similar to createCollector but in promise form. Resolves with a collection of messages that pass the specified\nfilter.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=awaitMessages');
	}
};

Blockly.Blocks.DMChannel_acknowledge = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('acknowledge');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Marks all messages in this channel as read.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=acknowledge');
	}
};

Blockly.Blocks.DMChannel_sendMessage = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendMessage with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendMessage');
	}
};

Blockly.Blocks.DMChannel_sendEmbed = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendEmbed with');


		this.appendValueInput('embed')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send an embed to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendEmbed');
	}
};

Blockly.Blocks.DMChannel_sendFiles = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFiles with');


		this.appendValueInput('files')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send files to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendFiles');
	}
};

Blockly.Blocks.DMChannel_sendFile = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a file to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendFile');
	}
};

Blockly.Blocks.DMChannel_sendCode = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a code block to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=sendCode');
	}
};

Blockly.Blocks.DMChannel_delete = {
	init() {
		this.appendValueInput('DMChannel')
			.setCheck('DMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DMChannel?scrollTo=delete');
	}
};

Blockly.Blocks.Emoji_client = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this object');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=client');
	}
};

Blockly.Blocks.Emoji_guild = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild this emoji is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=guild');
	}
};

Blockly.Blocks.Emoji_id = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the emoji');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=id');
	}
};

Blockly.Blocks.Emoji_name = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the emoji');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=name');
	}
};

Blockly.Blocks.Emoji_requiresColons = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get requiresColons of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not this emoji requires colons surrounding it');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=requiresColons');
	}
};

Blockly.Blocks.Emoji_managed = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get managed of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this emoji is managed by an external service');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=managed');
	}
};

Blockly.Blocks.Emoji_createdTimestamp = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the emoji was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.Emoji_createdAt = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the emoji was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=createdAt');
	}
};

Blockly.Blocks.Emoji_roles = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get roles of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Role']);
		this.setColour(230);
		this.setTooltip('A collection of roles this emoji is active for (empty if all), mapped by role ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=roles');
	}
};

Blockly.Blocks.Emoji_url = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL to the emoji file');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=url');
	}
};

Blockly.Blocks.Emoji_identifier = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('get identifier of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The identifier of this emoji, used for message reactions');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=identifier');
	}
};

Blockly.Blocks.Emoji_edit = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('data')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edits the emoji.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=edit');
	}
};

Blockly.Blocks.Emoji_setName = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setName with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the name of the emoji.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=setName');
	}
};

Blockly.Blocks.Emoji_addRestrictedRole = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addRestrictedRole with');


		this.appendValueInput('role')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Add a role to the list of roles that can use this emoji.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=addRestrictedRole');
	}
};

Blockly.Blocks.Emoji_addRestrictedRoles = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addRestrictedRoles with');


		this.appendValueInput('roles')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Add multiple roles to the list of roles that can use this emoji.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=addRestrictedRoles');
	}
};

Blockly.Blocks.Emoji_removeRestrictedRole = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('removeRestrictedRole with');


		this.appendValueInput('role')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Remove a role from the list of roles that can use this emoji.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=removeRestrictedRole');
	}
};

Blockly.Blocks.Emoji_removeRestrictedRoles = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('removeRestrictedRoles with');


		this.appendValueInput('roles')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Remove multiple roles from the list of roles that can use this emoji.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=removeRestrictedRoles');
	}
};

Blockly.Blocks.Emoji_toString = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically returns the emoji mention rather than the object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=toString');
	}
};

Blockly.Blocks.Emoji_equals = {
	init() {
		this.appendValueInput('Emoji')
			.setCheck('Emoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('other')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Whether this emoji is the same as another one.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=equals');
	}
};

Blockly.Blocks.GroupDMChannel_name = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of this Group DM, can be null if one isn\'t set');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=name');
	}
};

Blockly.Blocks.GroupDMChannel_icon = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get icon of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A hash of this Group DM icon');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=icon');
	}
};

Blockly.Blocks.GroupDMChannel_ownerID = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get ownerID of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The user ID of this Group DM\'s owner');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=ownerID');
	}
};

Blockly.Blocks.GroupDMChannel_managed = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get managed of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If the DM is managed by an application');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=managed');
	}
};

Blockly.Blocks.GroupDMChannel_applicationID = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get applicationID of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Application ID of the application that made this Group DM, if applicable');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=applicationID');
	}
};

Blockly.Blocks.GroupDMChannel_nicks = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get nicks of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'String']);
		this.setColour(230);
		this.setTooltip('Nicknames for group members');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=nicks');
	}
};

Blockly.Blocks.GroupDMChannel_recipients = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get recipients of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'User']);
		this.setColour(230);
		this.setTooltip('A collection of the recipients of this DM, mapped by their ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=recipients');
	}
};

Blockly.Blocks.GroupDMChannel_owner = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get owner of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The owner of this Group DM');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=owner');
	}
};

Blockly.Blocks.GroupDMChannel_iconURL = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get iconURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL to this guild\'s icon');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=iconURL');
	}
};

Blockly.Blocks.GroupDMChannel_messages = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get messages of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Message']);
		this.setColour(230);
		this.setTooltip('A collection containing the messages sent to this channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=messages');
	}
};

Blockly.Blocks.GroupDMChannel_lastMessageID = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get lastMessageID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the last message in the channel, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=lastMessageID');
	}
};

Blockly.Blocks.GroupDMChannel_typing = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get typing of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the typing indicator is being shown in the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=typing');
	}
};

Blockly.Blocks.GroupDMChannel_typingCount = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get typingCount of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Number of times `startTyping` has been called');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=typingCount');
	}
};

Blockly.Blocks.GroupDMChannel_client = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the Channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=client');
	}
};

Blockly.Blocks.GroupDMChannel_type = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of the channel, either:\n* `dm` - a DM channel\n* `group` - a Group DM channel\n* `text` - a guild text channel\n* `voice` - a guild voice channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=type');
	}
};

Blockly.Blocks.GroupDMChannel_id = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The unique ID of the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=id');
	}
};

Blockly.Blocks.GroupDMChannel_createdTimestamp = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the channel was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.GroupDMChannel_createdAt = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the channel was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=createdAt');
	}
};

Blockly.Blocks.GroupDMChannel_equals = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Whether this channel equals another channel. It compares all properties, so for most operations\nit is advisable to just compare `channel.id === channel2.id` as it is much faster and is often\nwhat most users need.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=equals');
	}
};

Blockly.Blocks.GroupDMChannel_setIcon = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setIcon with');


		this.appendValueInput('icon')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new GroupDMChannel icon.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=setIcon');
	}
};

Blockly.Blocks.GroupDMChannel_toString = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the channel\'s name instead of the Channel object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=toString');
	}
};

Blockly.Blocks.GroupDMChannel_send = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=send');
	}
};

Blockly.Blocks.GroupDMChannel_fetchMessage = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMessage with');


		this.appendValueInput('messageID')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets a single message from this channel, regardless of it being cached or not. Since the single message fetching\nendpoint is reserved for bot accounts, this abstracts the `fetchMessages` method to obtain the single message when\nusing a user account.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=fetchMessage');
	}
};

Blockly.Blocks.GroupDMChannel_fetchMessages = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMessages with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets the past messages sent in this channel. Resolves with a collection mapping message ID\'s to Message objects.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=fetchMessages');
	}
};

Blockly.Blocks.GroupDMChannel_fetchPinnedMessages = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchPinnedMessages');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches the pinned messages of this channel and returns a collection of them.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=fetchPinnedMessages');
	}
};

Blockly.Blocks.GroupDMChannel_search = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('search with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Performs a search within the channel.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=search');
	}
};

Blockly.Blocks.GroupDMChannel_createCollector = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createCollector with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a Message Collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=createCollector');
	}
};

Blockly.Blocks.GroupDMChannel_awaitMessages = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('awaitMessages with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Similar to createCollector but in promise form. Resolves with a collection of messages that pass the specified\nfilter.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=awaitMessages');
	}
};

Blockly.Blocks.GroupDMChannel_acknowledge = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('acknowledge');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Marks all messages in this channel as read.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=acknowledge');
	}
};

Blockly.Blocks.GroupDMChannel_sendMessage = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendMessage with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=sendMessage');
	}
};

Blockly.Blocks.GroupDMChannel_sendEmbed = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendEmbed with');


		this.appendValueInput('embed')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send an embed to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=sendEmbed');
	}
};

Blockly.Blocks.GroupDMChannel_sendFiles = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFiles with');


		this.appendValueInput('files')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send files to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=sendFiles');
	}
};

Blockly.Blocks.GroupDMChannel_sendFile = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a file to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=sendFile');
	}
};

Blockly.Blocks.GroupDMChannel_sendCode = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a code block to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=sendCode');
	}
};

Blockly.Blocks.GroupDMChannel_delete = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GroupDMChannel?scrollTo=delete');
	}
};

Blockly.Blocks.Guild_client = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that created the instance of the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=client');
	}
};

Blockly.Blocks.Guild_members = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get members of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildMember']);
		this.setColour(230);
		this.setTooltip('A collection of members that are in this guild. The key is the member\'s ID, the value is the member');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=members');
	}
};

Blockly.Blocks.Guild_channels = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get channels of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildChannel']);
		this.setColour(230);
		this.setTooltip('A collection of channels that are in this guild. The key is the channel\'s ID, the value is the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=channels');
	}
};

Blockly.Blocks.Guild_roles = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get roles of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Role']);
		this.setColour(230);
		this.setTooltip('A collection of roles that are in this guild. The key is the role\'s ID, the value is the role');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=roles');
	}
};

Blockly.Blocks.Guild_presences = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get presences of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Presence']);
		this.setColour(230);
		this.setTooltip('A collection of presences in this guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=presences');
	}
};

Blockly.Blocks.Guild_available = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get available of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the guild is available to access. If it is not available, it indicates a server outage');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=available');
	}
};

Blockly.Blocks.Guild_id = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The Unique ID of the guild, useful for comparisons');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=id');
	}
};

Blockly.Blocks.Guild_name = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=name');
	}
};

Blockly.Blocks.Guild_icon = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get icon of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The hash of the guild icon');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=icon');
	}
};

Blockly.Blocks.Guild_splash = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get splash of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The hash of the guild splash image (VIP only)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=splash');
	}
};

Blockly.Blocks.Guild_region = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get region of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The region the guild is located in');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=region');
	}
};

Blockly.Blocks.Guild_memberCount = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get memberCount of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The full amount of members in this guild as of `READY`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=memberCount');
	}
};

Blockly.Blocks.Guild_large = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get large of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the guild is "large" (has more than 250 members)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=large');
	}
};

Blockly.Blocks.Guild_features = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get features of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'Object']);
		this.setColour(230);
		this.setTooltip('An array of guild features');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=features');
	}
};

Blockly.Blocks.Guild_applicationID = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get applicationID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the application that created this guild (if applicable)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=applicationID');
	}
};

Blockly.Blocks.Guild_afkTimeout = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get afkTimeout of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The time in seconds before a user is counted as "away from keyboard"');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=afkTimeout');
	}
};

Blockly.Blocks.Guild_afkChannelID = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get afkChannelID of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The ID of the voice channel where AFK members are moved');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=afkChannelID');
	}
};

Blockly.Blocks.Guild_systemChannelID = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get systemChannelID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the system channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=systemChannelID');
	}
};

Blockly.Blocks.Guild_embedEnabled = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get embedEnabled of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether embedded images are enabled on this guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=embedEnabled');
	}
};

Blockly.Blocks.Guild_verificationLevel = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get verificationLevel of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The verification level of the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=verificationLevel');
	}
};

Blockly.Blocks.Guild_explicitContentFilter = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get explicitContentFilter of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The explicit content filter level of the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=explicitContentFilter');
	}
};

Blockly.Blocks.Guild_joinedTimestamp = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get joinedTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the client user joined the guild at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=joinedTimestamp');
	}
};

Blockly.Blocks.Guild_ownerID = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get ownerID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The user ID of this guild\'s owner');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=ownerID');
	}
};

Blockly.Blocks.Guild_emojis = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get emojis of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Emoji']);
		this.setColour(230);
		this.setTooltip('A collection of emojis that are in this guild\nThe key is the emoji\'s ID, the value is the emoji');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=emojis');
	}
};

Blockly.Blocks.Guild_createdTimestamp = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the guild was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.Guild_createdAt = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the guild was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=createdAt');
	}
};

Blockly.Blocks.Guild_joinedAt = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get joinedAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the client user joined the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=joinedAt');
	}
};

Blockly.Blocks.Guild_iconURL = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get iconURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL to this guild\'s icon');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=iconURL');
	}
};

Blockly.Blocks.Guild_nameAcronym = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get nameAcronym of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The acronym that shows up in place of a guild icon.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=nameAcronym');
	}
};

Blockly.Blocks.Guild_splashURL = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get splashURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL to this guild\'s splash');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=splashURL');
	}
};

Blockly.Blocks.Guild_owner = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get owner of');
		this.setInputsInline(true);
		this.setOutput(true, 'GuildMember');
		this.setColour(230);
		this.setTooltip('The owner of the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=owner');
	}
};

Blockly.Blocks.Guild_afkChannel = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get afkChannel of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceChannel');
		this.setColour(230);
		this.setTooltip('AFK voice channel for this guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=afkChannel');
	}
};

Blockly.Blocks.Guild_systemChannel = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get systemChannel of');
		this.setInputsInline(true);
		this.setOutput(true, 'GuildChannel');
		this.setColour(230);
		this.setTooltip('System channel for this guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=systemChannel');
	}
};

Blockly.Blocks.Guild_voiceConnection = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get voiceConnection of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceConnection');
		this.setColour(230);
		this.setTooltip('If the client is connected to any voice channel in this guild, this will be the relevant VoiceConnection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=voiceConnection');
	}
};

Blockly.Blocks.Guild_position = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get position of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of this guild\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=position');
	}
};

Blockly.Blocks.Guild_muted = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get muted of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the guild is muted\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=muted');
	}
};

Blockly.Blocks.Guild_messageNotifications = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get messageNotifications of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageNotificationType');
		this.setColour(230);
		this.setTooltip('The type of message that should notify you\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=messageNotifications');
	}
};

Blockly.Blocks.Guild_mobilePush = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get mobilePush of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether to receive mobile push notifications\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=mobilePush');
	}
};

Blockly.Blocks.Guild_suppressEveryone = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get suppressEveryone of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether to suppress everyone messages\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=suppressEveryone');
	}
};

Blockly.Blocks.Guild_defaultRole = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get defaultRole of');
		this.setInputsInline(true);
		this.setOutput(true, 'Role');
		this.setColour(230);
		this.setTooltip('The `@everyone` role of the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=defaultRole');
	}
};

Blockly.Blocks.Guild_me = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get me of');
		this.setInputsInline(true);
		this.setOutput(true, 'GuildMember');
		this.setColour(230);
		this.setTooltip('The client user as a GuildMember of this guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=me');
	}
};

Blockly.Blocks.Guild_defaultChannel = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get defaultChannel of');
		this.setInputsInline(true);
		this.setOutput(true, 'TextChannel');
		this.setColour(230);
		this.setTooltip('The `#general` TextChannel of the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=defaultChannel');
	}
};

Blockly.Blocks.Guild_member = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('member with');


		this.appendValueInput('user')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Returns the GuildMember form of a User object, if the user is present in the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=member');
	}
};

Blockly.Blocks.Guild_fetchBans = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchBans');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetch a collection of banned users in this guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=fetchBans');
	}
};

Blockly.Blocks.Guild_fetchInvites = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchInvites');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetch a collection of invites to this guild.\nResolves with a collection mapping invites by their codes.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=fetchInvites');
	}
};

Blockly.Blocks.Guild_fetchWebhooks = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchWebhooks');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetch all webhooks for the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=fetchWebhooks');
	}
};

Blockly.Blocks.Guild_fetchVoiceRegions = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchVoiceRegions');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetch available voice regions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=fetchVoiceRegions');
	}
};

Blockly.Blocks.Guild_fetchAuditLogs = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchAuditLogs with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetch audit logs for this guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=fetchAuditLogs');
	}
};

Blockly.Blocks.Guild_addMember = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addMember with');


		this.appendValueInput('user')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Adds a user to the guild using OAuth2. Requires the `CREATE_INSTANT_INVITE` permission.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=addMember');
	}
};

Blockly.Blocks.Guild_fetchMember = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMember with');


		this.appendValueInput('user')
			.setCheck(null);

		this.appendValueInput('cache')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetch a single guild member from a user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=fetchMember');
	}
};

Blockly.Blocks.Guild_fetchMembers = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMembers with');


		this.appendValueInput('query')
			.setCheck(null);

		this.appendValueInput('limit')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches all the members in the guild, even if they are offline. If the guild has less than 250 members,\nthis should not be necessary.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=fetchMembers');
	}
};

Blockly.Blocks.Guild_search = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('search with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Performs a search within the entire guild.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=search');
	}
};

Blockly.Blocks.Guild_edit = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('data')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Updates the guild with new information - e.g. a new name.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=edit');
	}
};

Blockly.Blocks.Guild_setExplicitContentFilter = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setExplicitContentFilter with');


		this.appendValueInput('explicitContentFilter')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the level of the explicit content filter.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setExplicitContentFilter');
	}
};

Blockly.Blocks.Guild_setName = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setName with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the name of the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setName');
	}
};

Blockly.Blocks.Guild_setRegion = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setRegion with');


		this.appendValueInput('region')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the region of the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setRegion');
	}
};

Blockly.Blocks.Guild_setVerificationLevel = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setVerificationLevel with');


		this.appendValueInput('verificationLevel')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the verification level of the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setVerificationLevel');
	}
};

Blockly.Blocks.Guild_setAFKChannel = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setAFKChannel with');


		this.appendValueInput('afkChannel')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the AFK channel of the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setAFKChannel');
	}
};

Blockly.Blocks.Guild_setSystemChannel = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setSystemChannel with');


		this.appendValueInput('systemChannel')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the system channel of the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setSystemChannel');
	}
};

Blockly.Blocks.Guild_setAFKTimeout = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setAFKTimeout with');


		this.appendValueInput('afkTimeout')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the AFK timeout of the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setAFKTimeout');
	}
};

Blockly.Blocks.Guild_setIcon = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setIcon with');


		this.appendValueInput('icon')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new guild icon.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setIcon');
	}
};

Blockly.Blocks.Guild_setOwner = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setOwner with');


		this.appendValueInput('owner')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets a new owner of the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setOwner');
	}
};

Blockly.Blocks.Guild_setSplash = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setSplash with');


		this.appendValueInput('splash')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new guild splash screen.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setSplash');
	}
};

Blockly.Blocks.Guild_setPosition = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setPosition with');


		this.appendValueInput('position')
			.setCheck(null);

		this.appendValueInput('relative')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the position of the guild in the guild listing.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setPosition');
	}
};

Blockly.Blocks.Guild_acknowledge = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('acknowledge');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Marks all messages in this guild as read.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=acknowledge');
	}
};

Blockly.Blocks.Guild_allowDMs = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('allowDMs with');


		this.appendValueInput('allow')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Allow direct messages from guild members.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=allowDMs');
	}
};

Blockly.Blocks.Guild_ban = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('ban with');


		this.appendValueInput('user')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Bans a user from the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=ban');
	}
};

Blockly.Blocks.Guild_unban = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('unban with');


		this.appendValueInput('user')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Unbans a user from the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=unban');
	}
};

Blockly.Blocks.Guild_pruneMembers = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('pruneMembers with');


		this.appendValueInput('days')
			.setCheck(null);

		this.appendValueInput('dry')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Prunes members from the guild based on how long they have been inactive.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=pruneMembers');
	}
};

Blockly.Blocks.Guild_createChannel = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createChannel with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('type')
			.setCheck(null);

		this.appendValueInput('overwrites')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a new channel in the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=createChannel');
	}
};

Blockly.Blocks.Guild_setChannelPositions = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setChannelPositions with');


		this.appendValueInput('channelPositions')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Batch-updates the guild\'s channels\' positions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setChannelPositions');
	}
};

Blockly.Blocks.Guild_createRole = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createRole with');


		this.appendValueInput('data')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a new role in the guild with given information');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=createRole');
	}
};

Blockly.Blocks.Guild_createEmoji = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createEmoji with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('roles')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a new custom emoji in the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=createEmoji');
	}
};

Blockly.Blocks.Guild_deleteEmoji = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('deleteEmoji with');


		this.appendValueInput('emoji')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Delete an emoji.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=deleteEmoji');
	}
};

Blockly.Blocks.Guild_leave = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('leave');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Causes the client to leave the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=leave');
	}
};

Blockly.Blocks.Guild_delete = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Causes the client to delete the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=delete');
	}
};

Blockly.Blocks.Guild_equals = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('guild')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Whether this guild equals another guild. It compares all properties, so for most operations\nit is advisable to just compare `guild.id === guild2.id` as it is much faster and is often\nwhat most users need.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=equals');
	}
};

Blockly.Blocks.Guild_toString = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the guild\'s name instead of the guild object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=toString');
	}
};

Blockly.Blocks.Guild_setRolePosition = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setRolePosition with');


		this.appendValueInput('role')
			.setCheck(null);

		this.appendValueInput('position')
			.setCheck(null);

		this.appendValueInput('relative')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the position of a role in this guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setRolePosition');
	}
};

Blockly.Blocks.Guild_setChannelPosition = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setChannelPosition with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.appendValueInput('position')
			.setCheck(null);

		this.appendValueInput('relative')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the position of a channel in this guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=setChannelPosition');
	}
};

Blockly.Blocks.GuildAuditLogs_entries = {
	init() {
		this.appendValueInput('GuildAuditLogs')
			.setCheck('GuildAuditLogs')
			.appendField('get entries of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildAuditLogsEntry']);
		this.setColour(230);
		this.setTooltip('The entries for this guild\'s audit logs');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogs?scrollTo=entries');
	}
};

Blockly.Blocks.GuildAuditLogs_build = {
	init() {
		this.appendValueInput('GuildAuditLogs')
			.setCheck('GuildAuditLogs')
			.appendField('with');
		this.appendDummyInput()
			.appendField('build');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Handles possible promises for entry targets.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogs?scrollTo=build');
	}
};

Blockly.Blocks.GuildAuditLogs_targetType = {
	init() {
		this.appendValueInput('GuildAuditLogs')
			.setCheck('GuildAuditLogs')
			.appendField('with');
		this.appendDummyInput()
			.appendField('targetType with');


		this.appendValueInput('target')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Find target type from entry action.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogs?scrollTo=targetType');
	}
};

Blockly.Blocks.GuildAuditLogs_actionType = {
	init() {
		this.appendValueInput('GuildAuditLogs')
			.setCheck('GuildAuditLogs')
			.appendField('with');
		this.appendDummyInput()
			.appendField('actionType with');


		this.appendValueInput('action')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Find action type from entry action.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogs?scrollTo=actionType');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_targetType = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get targetType of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The target type of this entry');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=targetType');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_actionType = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get actionType of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The action type of this entry');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=actionType');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_action = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get action of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Specific action type of this entry');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=action');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_reason = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get reason of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The reason of this entry');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=reason');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_executor = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get executor of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The user that executed this entry');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=executor');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_changes = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get changes of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'AuditLogChange']);
		this.setColour(230);
		this.setTooltip('Specific property changes');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=changes');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_id = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of this entry');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=id');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_extra = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get extra of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Any extra data from the entry');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=extra');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_target = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get target of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The target of this entry');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=target');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_createdTimestamp = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp this entry was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.GuildAuditLogsEntry_createdAt = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time this entry was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry?scrollTo=createdAt');
	}
};

Blockly.Blocks.GuildChannel_guild = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild the channel is in');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=guild');
	}
};

Blockly.Blocks.GuildChannel_name = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the guild channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=name');
	}
};

Blockly.Blocks.GuildChannel_position = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get position of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of the channel in the list');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=position');
	}
};

Blockly.Blocks.GuildChannel_permissionOverwrites = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get permissionOverwrites of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'PermissionOverwrites']);
		this.setColour(230);
		this.setTooltip('A map of permission overwrites in this channel for roles and users');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=permissionOverwrites');
	}
};

Blockly.Blocks.GuildChannel_calculatedPosition = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get calculatedPosition of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=calculatedPosition');
	}
};

Blockly.Blocks.GuildChannel_deletable = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get deletable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the channel is deletable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=deletable');
	}
};

Blockly.Blocks.GuildChannel_muted = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get muted of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the channel is muted\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=muted');
	}
};

Blockly.Blocks.GuildChannel_messageNotifications = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get messageNotifications of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageNotificationType');
		this.setColour(230);
		this.setTooltip('The type of message that should notify you\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=messageNotifications');
	}
};

Blockly.Blocks.GuildChannel_client = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the Channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=client');
	}
};

Blockly.Blocks.GuildChannel_type = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of the channel, either:\n* `dm` - a DM channel\n* `group` - a Group DM channel\n* `text` - a guild text channel\n* `voice` - a guild voice channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=type');
	}
};

Blockly.Blocks.GuildChannel_id = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The unique ID of the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=id');
	}
};

Blockly.Blocks.GuildChannel_createdTimestamp = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the channel was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.GuildChannel_createdAt = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the channel was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=createdAt');
	}
};

Blockly.Blocks.GuildChannel_permissionsFor = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('permissionsFor with');


		this.appendValueInput('member')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets the overall set of permissions for a user in this channel, taking into account roles and permission\noverwrites.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=permissionsFor');
	}
};

Blockly.Blocks.GuildChannel_overwritePermissions = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('overwritePermissions with');


		this.appendValueInput('userOrRole')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Overwrites the permissions for a user or role in this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=overwritePermissions');
	}
};

Blockly.Blocks.GuildChannel_edit = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('data')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edits the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=edit');
	}
};

Blockly.Blocks.GuildChannel_setName = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setName with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new name for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=setName');
	}
};

Blockly.Blocks.GuildChannel_setPosition = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setPosition with');


		this.appendValueInput('position')
			.setCheck(null);

		this.appendValueInput('relative')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new position for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=setPosition');
	}
};

Blockly.Blocks.GuildChannel_setTopic = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setTopic with');


		this.appendValueInput('topic')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new topic for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=setTopic');
	}
};

Blockly.Blocks.GuildChannel_createInvite = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createInvite with');


		this.appendValueInput('options')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Create an invite to this guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=createInvite');
	}
};

Blockly.Blocks.GuildChannel_clone = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('clone with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('withPermissions')
			.setCheck(null);

		this.appendValueInput('withTopic')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Clone this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=clone');
	}
};

Blockly.Blocks.GuildChannel_equals = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if this channel has the same type, topic, position, name, overwrites and ID as another channel.\nIn most cases, a simple `channel.id === channel2.id` will do, and is much faster too.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=equals');
	}
};

Blockly.Blocks.GuildChannel_toString = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically returns the channel\'s mention instead of the Channel object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=toString');
	}
};

Blockly.Blocks.GuildChannel_delete = {
	init() {
		this.appendValueInput('GuildChannel')
			.setCheck('GuildChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=delete');
	}
};

Blockly.Blocks.GuildMember_client = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this GuildMember');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=client');
	}
};

Blockly.Blocks.GuildMember_guild = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild that this member is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=guild');
	}
};

Blockly.Blocks.GuildMember_user = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get user of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The user that this guild member instance Represents');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=user');
	}
};

Blockly.Blocks.GuildMember_lastMessageID = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get lastMessageID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the last message sent by the member in their guild, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=lastMessageID');
	}
};

Blockly.Blocks.GuildMember_lastMessage = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get lastMessage of');
		this.setInputsInline(true);
		this.setOutput(true, 'Message');
		this.setColour(230);
		this.setTooltip('The Message object of the last message sent by the member in their guild, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=lastMessage');
	}
};

Blockly.Blocks.GuildMember_serverDeaf = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get serverDeaf of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this member is deafened server-wide');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=serverDeaf');
	}
};

Blockly.Blocks.GuildMember_serverMute = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get serverMute of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this member is muted server-wide');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=serverMute');
	}
};

Blockly.Blocks.GuildMember_selfMute = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get selfMute of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this member is self-muted');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=selfMute');
	}
};

Blockly.Blocks.GuildMember_selfDeaf = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get selfDeaf of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this member is self-deafened');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=selfDeaf');
	}
};

Blockly.Blocks.GuildMember_voiceSessionID = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get voiceSessionID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The voice session ID of this member, if any');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=voiceSessionID');
	}
};

Blockly.Blocks.GuildMember_voiceChannelID = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get voiceChannelID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The voice channel ID of this member, if any');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=voiceChannelID');
	}
};

Blockly.Blocks.GuildMember_speaking = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get speaking of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this member is speaking');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=speaking');
	}
};

Blockly.Blocks.GuildMember_nickname = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get nickname of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The nickname of this guild member, if they have one');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=nickname');
	}
};

Blockly.Blocks.GuildMember_joinedTimestamp = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get joinedTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the member joined the guild at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=joinedTimestamp');
	}
};

Blockly.Blocks.GuildMember_joinedAt = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get joinedAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the member joined the guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=joinedAt');
	}
};

Blockly.Blocks.GuildMember_presence = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get presence of');
		this.setInputsInline(true);
		this.setOutput(true, 'Presence');
		this.setColour(230);
		this.setTooltip('The presence of this guild member');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=presence');
	}
};

Blockly.Blocks.GuildMember_roles = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get roles of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Role']);
		this.setColour(230);
		this.setTooltip('A list of roles that are applied to this GuildMember, mapped by the role ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=roles');
	}
};

Blockly.Blocks.GuildMember_highestRole = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get highestRole of');
		this.setInputsInline(true);
		this.setOutput(true, 'Role');
		this.setColour(230);
		this.setTooltip('The role of the member with the highest position');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=highestRole');
	}
};

Blockly.Blocks.GuildMember_colorRole = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get colorRole of');
		this.setInputsInline(true);
		this.setOutput(true, 'Role');
		this.setColour(230);
		this.setTooltip('The role of the member used to set their color');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=colorRole');
	}
};

Blockly.Blocks.GuildMember_displayColor = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get displayColor of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The displayed color of the member in base 10');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=displayColor');
	}
};

Blockly.Blocks.GuildMember_displayHexColor = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get displayHexColor of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The displayed color of the member in hexadecimal');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=displayHexColor');
	}
};

Blockly.Blocks.GuildMember_hoistRole = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get hoistRole of');
		this.setInputsInline(true);
		this.setOutput(true, 'Role');
		this.setColour(230);
		this.setTooltip('The role of the member used to hoist them in a separate category in the users list');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=hoistRole');
	}
};

Blockly.Blocks.GuildMember_mute = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get mute of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this member is muted in any way');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=mute');
	}
};

Blockly.Blocks.GuildMember_deaf = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get deaf of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this member is deafened in any way');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=deaf');
	}
};

Blockly.Blocks.GuildMember_voiceChannel = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get voiceChannel of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceChannel');
		this.setColour(230);
		this.setTooltip('The voice channel this member is in, if any');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=voiceChannel');
	}
};

Blockly.Blocks.GuildMember_id = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of this user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=id');
	}
};

Blockly.Blocks.GuildMember_displayName = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get displayName of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The nickname of the member, or their username if they don\'t have one');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=displayName');
	}
};

Blockly.Blocks.GuildMember_permissions = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get permissions of');
		this.setInputsInline(true);
		this.setOutput(true, 'Permissions');
		this.setColour(230);
		this.setTooltip('The overall set of permissions for the guild member, taking only roles into account');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=permissions');
	}
};

Blockly.Blocks.GuildMember_kickable = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get kickable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the member is kickable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=kickable');
	}
};

Blockly.Blocks.GuildMember_bannable = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('get bannable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the member is bannable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=bannable');
	}
};

Blockly.Blocks.GuildMember_permissionsIn = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('permissionsIn with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Returns `channel.permissionsFor(guildMember)`. Returns permissions for a member in a guild channel,\ntaking into account roles and permission overwrites.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=permissionsIn');
	}
};

Blockly.Blocks.GuildMember_hasPermission = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('hasPermission with');


		this.appendValueInput('permission')
			.setCheck(null);

		this.appendValueInput('explicit')
			.setCheck(null);

		this.appendValueInput('checkAdmin')
			.setCheck(null);

		this.appendValueInput('checkOwner')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if any of the member\'s roles have a permission.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=hasPermission');
	}
};

Blockly.Blocks.GuildMember_hasPermissions = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('hasPermissions with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.appendValueInput('explicit')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks whether the roles of the member allows them to perform specific actions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=hasPermissions');
	}
};

Blockly.Blocks.GuildMember_missingPermissions = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('missingPermissions with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.appendValueInput('explicit')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks whether the roles of the member allows them to perform specific actions, and lists any missing permissions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=missingPermissions');
	}
};

Blockly.Blocks.GuildMember_edit = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('data')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit a guild member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=edit');
	}
};

Blockly.Blocks.GuildMember_setMute = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setMute with');


		this.appendValueInput('mute')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Mute/unmute a user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=setMute');
	}
};

Blockly.Blocks.GuildMember_setDeaf = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setDeaf with');


		this.appendValueInput('deaf')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deafen/undeafen a user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=setDeaf');
	}
};

Blockly.Blocks.GuildMember_setVoiceChannel = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setVoiceChannel with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Moves the guild member to the given channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=setVoiceChannel');
	}
};

Blockly.Blocks.GuildMember_setRoles = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setRoles with');


		this.appendValueInput('roles')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the roles applied to the member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=setRoles');
	}
};

Blockly.Blocks.GuildMember_addRole = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addRole with');


		this.appendValueInput('role')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Adds a single role to the member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=addRole');
	}
};

Blockly.Blocks.GuildMember_addRoles = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addRoles with');


		this.appendValueInput('roles')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Adds multiple roles to the member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=addRoles');
	}
};

Blockly.Blocks.GuildMember_removeRole = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('removeRole with');


		this.appendValueInput('role')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Removes a single role from the member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=removeRole');
	}
};

Blockly.Blocks.GuildMember_removeRoles = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('removeRoles with');


		this.appendValueInput('roles')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Removes multiple roles from the member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=removeRoles');
	}
};

Blockly.Blocks.GuildMember_setNickname = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setNickname with');


		this.appendValueInput('nick')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the nickname for the guild member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=setNickname');
	}
};

Blockly.Blocks.GuildMember_createDM = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createDM');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a DM channel between the client and the member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=createDM');
	}
};

Blockly.Blocks.GuildMember_deleteDM = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('deleteDM');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes any DMs with this guild member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=deleteDM');
	}
};

Blockly.Blocks.GuildMember_kick = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('kick with');


		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Kick this member from the guild.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=kick');
	}
};

Blockly.Blocks.GuildMember_ban = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('ban with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Ban this guild member.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban');
	}
};

Blockly.Blocks.GuildMember_toString = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the user\'s mention instead of the Member object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=toString');
	}
};

Blockly.Blocks.GuildMember_send = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=send');
	}
};

Blockly.Blocks.GuildMember_sendMessage = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendMessage with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=sendMessage');
	}
};

Blockly.Blocks.GuildMember_sendEmbed = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendEmbed with');


		this.appendValueInput('embed')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send an embed to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=sendEmbed');
	}
};

Blockly.Blocks.GuildMember_sendFile = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a file to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=sendFile');
	}
};

Blockly.Blocks.GuildMember_sendCode = {
	init() {
		this.appendValueInput('GuildMember')
			.setCheck('GuildMember')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a code block to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=sendCode');
	}
};

Blockly.Blocks.Collector_client = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=client');
	}
};

Blockly.Blocks.Collector_filter = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('get filter of');
		this.setInputsInline(true);
		this.setOutput(true, 'CollectorFilter');
		this.setColour(230);
		this.setTooltip('The filter applied to this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=filter');
	}
};

Blockly.Blocks.Collector_options = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('get options of');
		this.setInputsInline(true);
		this.setOutput(true, 'CollectorOptions');
		this.setColour(230);
		this.setTooltip('The options of this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=options');
	}
};

Blockly.Blocks.Collector_collected = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('get collected of');
		this.setInputsInline(true);
		this.setOutput(true, 'Collection');
		this.setColour(230);
		this.setTooltip('The items collected by this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=collected');
	}
};

Blockly.Blocks.Collector_ended = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('get ended of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this collector has finished collecting');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=ended');
	}
};

Blockly.Blocks.Collector_next = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('get next of');
		this.setInputsInline(true);
		this.setOutput(true, 'Promise');
		this.setColour(230);
		this.setTooltip('Return a promise that resolves with the next collected element;\nrejects with collected elements if the collector finishes without receving a next element');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=next');
	}
};

Blockly.Blocks.Collector_handle = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('with');
		this.appendDummyInput()
			.appendField('handle with');


		this.appendValueInput('args')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Handles incoming events from the `listener` function. Returns null if the event should not be collected,\nor returns an object describing the data that should be stored.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=handle');
	}
};

Blockly.Blocks.Collector_postCheck = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('with');
		this.appendDummyInput()
			.appendField('postCheck with');


		this.appendValueInput('args')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('This method runs after collection to see if the collector should finish.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=postCheck');
	}
};

Blockly.Blocks.Collector_collect = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits collect')
			.appendField(new Blockly.FieldVariable('element'), 'element').appendField(new Blockly.FieldVariable('collector'), 'collector');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever an element is collected.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=collect');
	}
};

Blockly.Blocks.Collector_end = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits end')
			.appendField(new Blockly.FieldVariable('collected'), 'collected').appendField(new Blockly.FieldVariable('reason'), 'reason');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the collector is finished collecting.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=end');
	}
};

Blockly.Blocks.Invite_client = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the invite');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=client');
	}
};

Blockly.Blocks.Invite_guild = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild the invite is for. If this guild is already known, this will be a guild object. If the guild is\nunknown, this will be a PartialGuild object');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=guild');
	}
};

Blockly.Blocks.Invite_code = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get code of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The code for this invite');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=code');
	}
};

Blockly.Blocks.Invite_presenceCount = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get presenceCount of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The approximate number of online members of the guild this invite is for');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=presenceCount');
	}
};

Blockly.Blocks.Invite_memberCount = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get memberCount of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The approximate total number of members of the guild this invite is for');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=memberCount');
	}
};

Blockly.Blocks.Invite_textChannelCount = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get textChannelCount of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The number of text channels the guild this invite goes to has');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=textChannelCount');
	}
};

Blockly.Blocks.Invite_voiceChannelCount = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get voiceChannelCount of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The number of voice channels the guild this invite goes to has');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=voiceChannelCount');
	}
};

Blockly.Blocks.Invite_temporary = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get temporary of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not this invite is temporary');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=temporary');
	}
};

Blockly.Blocks.Invite_maxAge = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get maxAge of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The maximum age of the invite, in seconds');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=maxAge');
	}
};

Blockly.Blocks.Invite_uses = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get uses of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('How many times this invite has been used');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=uses');
	}
};

Blockly.Blocks.Invite_maxUses = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get maxUses of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The maximum uses of this invite');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=maxUses');
	}
};

Blockly.Blocks.Invite_inviter = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get inviter of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The user who created this invite');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=inviter');
	}
};

Blockly.Blocks.Invite_channel = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get channel of');
		this.setInputsInline(true);
		this.setOutput(true, 'GuildChannel');
		this.setColour(230);
		this.setTooltip('The channel the invite is for. If this channel is already known, this will be a GuildChannel object.\nIf the channel is unknown, this will be a PartialGuildChannel object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=channel');
	}
};

Blockly.Blocks.Invite_createdTimestamp = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the invite was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.Invite_createdAt = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the invite was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=createdAt');
	}
};

Blockly.Blocks.Invite_expiresTimestamp = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get expiresTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the invite will expire at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=expiresTimestamp');
	}
};

Blockly.Blocks.Invite_expiresAt = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get expiresAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the invite will expire');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=expiresAt');
	}
};

Blockly.Blocks.Invite_url = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL to the invite');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=url');
	}
};

Blockly.Blocks.Invite_delete = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete with');


		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes this invite.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=delete');
	}
};

Blockly.Blocks.Invite_toString = {
	init() {
		this.appendValueInput('Invite')
			.setCheck('Invite')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the invite\'s URL instead of the object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=toString');
	}
};

Blockly.Blocks.Message_client = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the Message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=client');
	}
};

Blockly.Blocks.Message_channel = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get channel of');
		this.setInputsInline(true);
		this.setOutput(true, 'TextChannel');
		this.setColour(230);
		this.setTooltip('The channel that the message was sent in');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=channel');
	}
};

Blockly.Blocks.Message_id = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=id');
	}
};

Blockly.Blocks.Message_type = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of the message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=type');
	}
};

Blockly.Blocks.Message_content = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get content of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The content of the message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=content');
	}
};

Blockly.Blocks.Message_author = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get author of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The author of the message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=author');
	}
};

Blockly.Blocks.Message_member = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get member of');
		this.setInputsInline(true);
		this.setOutput(true, 'GuildMember');
		this.setColour(230);
		this.setTooltip('Represents the author of the message as a guild member\nOnly available if the message comes from a guild where the author is still a member');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=member');
	}
};

Blockly.Blocks.Message_pinned = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get pinned of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not this message is pinned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=pinned');
	}
};

Blockly.Blocks.Message_tts = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get tts of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the message was Text-To-Speech');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=tts');
	}
};

Blockly.Blocks.Message_nonce = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get nonce of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A random number or string used for checking message delivery');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=nonce');
	}
};

Blockly.Blocks.Message_system = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get system of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not this message was sent by Discord, not actually a user (e.g. pin notifications)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=system');
	}
};

Blockly.Blocks.Message_embeds = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get embeds of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'MessageEmbed']);
		this.setColour(230);
		this.setTooltip('A list of embeds in the message - e.g. YouTube Player');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=embeds');
	}
};

Blockly.Blocks.Message_attachments = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get attachments of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'MessageAttachment']);
		this.setColour(230);
		this.setTooltip('A collection of attachments in the message - e.g. Pictures - mapped by their ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=attachments');
	}
};

Blockly.Blocks.Message_createdTimestamp = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the message was sent at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.Message_editedTimestamp = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get editedTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the message was last edited at (if applicable)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=editedTimestamp');
	}
};

Blockly.Blocks.Message_reactions = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get reactions of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'MessageReaction']);
		this.setColour(230);
		this.setTooltip('A collection of reactions to this message, mapped by the reaction ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=reactions');
	}
};

Blockly.Blocks.Message_mentions = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get mentions of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageMentions');
		this.setColour(230);
		this.setTooltip('All valid mentions that the message contains');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=mentions');
	}
};

Blockly.Blocks.Message_webhookID = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get webhookID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('ID of the webhook that sent the message, if applicable');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=webhookID');
	}
};

Blockly.Blocks.Message_hit = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get hit of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this message is a hit in a search');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=hit');
	}
};

Blockly.Blocks.Message_createdAt = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the message was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=createdAt');
	}
};

Blockly.Blocks.Message_editedAt = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get editedAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the message was last edited at (if applicable)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=editedAt');
	}
};

Blockly.Blocks.Message_guild = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild the message was sent in (if in a guild channel)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=guild');
	}
};

Blockly.Blocks.Message_cleanContent = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get cleanContent of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The message contents with all mentions replaced by the equivalent text.\nIf mentions cannot be resolved to a name, the relevant mention in the message content will not be converted.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=cleanContent');
	}
};

Blockly.Blocks.Message_edits = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get edits of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'Message']);
		this.setColour(230);
		this.setTooltip('An array of cached versions of the message, including the current version\nSorted from latest (first) to oldest (last)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=edits');
	}
};

Blockly.Blocks.Message_editable = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get editable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the message is editable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=editable');
	}
};

Blockly.Blocks.Message_deletable = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get deletable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the message is deletable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=deletable');
	}
};

Blockly.Blocks.Message_pinnable = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get pinnable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the message is pinnable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=pinnable');
	}
};

Blockly.Blocks.Message_createReactionCollector = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createReactionCollector with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a reaction collector.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=createReactionCollector');
	}
};

Blockly.Blocks.Message_awaitReactions = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('awaitReactions with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Similar to createCollector but in promise form.\nResolves with a collection of reactions that pass the specified filter.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=awaitReactions');
	}
};

Blockly.Blocks.Message_isMentioned = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('isMentioned with');


		this.appendValueInput('data')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Whether or not a user, channel or role is mentioned in this message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=isMentioned');
	}
};

Blockly.Blocks.Message_isMemberMentioned = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('isMemberMentioned with');


		this.appendValueInput('member')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Whether or not a guild member is mentioned in this message. Takes into account\nuser mentions, role mentions, and @everyone/@here mentions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=isMemberMentioned');
	}
};

Blockly.Blocks.Message_edit = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the content of the message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=edit');
	}
};

Blockly.Blocks.Message_editCode = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('editCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the content of the message, with a code block.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=editCode');
	}
};

Blockly.Blocks.Message_pin = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('pin');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Pins this message to the channel\'s pinned messages.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=pin');
	}
};

Blockly.Blocks.Message_unpin = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('unpin');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Unpins this message from the channel\'s pinned messages.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=unpin');
	}
};

Blockly.Blocks.Message_react = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('react with');


		this.appendValueInput('emoji')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Add a reaction to the message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=react');
	}
};

Blockly.Blocks.Message_clearReactions = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('clearReactions');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Remove all reactions from a message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=clearReactions');
	}
};

Blockly.Blocks.Message_delete = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete with');


		this.appendValueInput('timeout')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes the message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=delete');
	}
};

Blockly.Blocks.Message_reply = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('reply with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Reply to the message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=reply');
	}
};

Blockly.Blocks.Message_acknowledge = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('acknowledge');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Marks the message as read.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=acknowledge');
	}
};

Blockly.Blocks.Message_fetchWebhook = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchWebhook');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches the webhook used to create this message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=fetchWebhook');
	}
};

Blockly.Blocks.Message_equals = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('message')
			.setCheck(null);

		this.appendValueInput('rawData')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Used mainly internally. Whether two messages are identical in properties. If you want to compare messages\nwithout checking all the properties, use `message.id === message2.id`, which is much more efficient. This\nmethod allows you to see if there are differences in content, embeds, attachments, nonce and tts properties.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=equals');
	}
};

Blockly.Blocks.Message_toString = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the message\'s content instead of the object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=toString');
	}
};

Blockly.Blocks.MessageAttachment_client = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this MessageAttachment');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=client');
	}
};

Blockly.Blocks.MessageAttachment_message = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get message of');
		this.setInputsInline(true);
		this.setOutput(true, 'Message');
		this.setColour(230);
		this.setTooltip('The message this attachment is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=message');
	}
};

Blockly.Blocks.MessageAttachment_id = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of this attachment');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=id');
	}
};

Blockly.Blocks.MessageAttachment_filename = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get filename of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The file name of this attachment');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=filename');
	}
};

Blockly.Blocks.MessageAttachment_filesize = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get filesize of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The size of this attachment in bytes');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=filesize');
	}
};

Blockly.Blocks.MessageAttachment_url = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL to this attachment');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=url');
	}
};

Blockly.Blocks.MessageAttachment_proxyURL = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get proxyURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The Proxy URL to this attachment');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=proxyURL');
	}
};

Blockly.Blocks.MessageAttachment_height = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get height of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The height of this attachment (if an image)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=height');
	}
};

Blockly.Blocks.MessageAttachment_width = {
	init() {
		this.appendValueInput('MessageAttachment')
			.setCheck('MessageAttachment')
			.appendField('get width of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The width of this attachment (if an image)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageAttachment?scrollTo=width');
	}
};

Blockly.Blocks.MessageCollector_constructor = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('MessageCollector_constructor');
		this.setOutput(true, 'MessageCollector');
		this.setColour(160);
		this.setTooltip('Collects messages on a channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector');
	}
};

Blockly.Blocks.MessageCollector_channel = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get channel of');
		this.setInputsInline(true);
		this.setOutput(true, 'TextBasedChannel');
		this.setColour(230);
		this.setTooltip('The channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=channel');
	}
};

Blockly.Blocks.MessageCollector_received = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get received of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Total number of messages that were received in the channel during message collection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=received');
	}
};

Blockly.Blocks.MessageCollector_client = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=client');
	}
};

Blockly.Blocks.MessageCollector_filter = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get filter of');
		this.setInputsInline(true);
		this.setOutput(true, 'CollectorFilter');
		this.setColour(230);
		this.setTooltip('The filter applied to this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=filter');
	}
};

Blockly.Blocks.MessageCollector_options = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get options of');
		this.setInputsInline(true);
		this.setOutput(true, 'CollectorOptions');
		this.setColour(230);
		this.setTooltip('The options of this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=options');
	}
};

Blockly.Blocks.MessageCollector_collected = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get collected of');
		this.setInputsInline(true);
		this.setOutput(true, 'Collection');
		this.setColour(230);
		this.setTooltip('The items collected by this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=collected');
	}
};

Blockly.Blocks.MessageCollector_ended = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get ended of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this collector has finished collecting');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=ended');
	}
};

Blockly.Blocks.MessageCollector_next = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get next of');
		this.setInputsInline(true);
		this.setOutput(true, 'Promise');
		this.setColour(230);
		this.setTooltip('Return a promise that resolves with the next collected element;\nrejects with collected elements if the collector finishes without receving a next element');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=next');
	}
};

Blockly.Blocks.MessageCollector_message = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits message')
			.appendField(new Blockly.FieldVariable('message'), 'message');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the collector receives a message.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=message');
	}
};

Blockly.Blocks.MessageCollector_collect = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits collect')
			.appendField(new Blockly.FieldVariable('element'), 'element').appendField(new Blockly.FieldVariable('collector'), 'collector');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever an element is collected.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=collect');
	}
};

Blockly.Blocks.MessageCollector_end = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits end')
			.appendField(new Blockly.FieldVariable('collected'), 'collected').appendField(new Blockly.FieldVariable('reason'), 'reason');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the collector is finished collecting.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=end');
	}
};

Blockly.Blocks.MessageEmbed_client = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=client');
	}
};

Blockly.Blocks.MessageEmbed_message = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get message of');
		this.setInputsInline(true);
		this.setOutput(true, 'Message');
		this.setColour(230);
		this.setTooltip('The message this embed is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=message');
	}
};

Blockly.Blocks.MessageEmbed_type = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=type');
	}
};

Blockly.Blocks.MessageEmbed_title = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get title of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The title of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=title');
	}
};

Blockly.Blocks.MessageEmbed_description = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get description of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The description of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=description');
	}
};

Blockly.Blocks.MessageEmbed_url = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=url');
	}
};

Blockly.Blocks.MessageEmbed_color = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get color of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The color of the embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=color');
	}
};

Blockly.Blocks.MessageEmbed_fields = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get fields of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'MessageEmbedField']);
		this.setColour(230);
		this.setTooltip('The fields of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=fields');
	}
};

Blockly.Blocks.MessageEmbed_createdTimestamp = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.MessageEmbed_thumbnail = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get thumbnail of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbedThumbnail');
		this.setColour(230);
		this.setTooltip('The thumbnail of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=thumbnail');
	}
};

Blockly.Blocks.MessageEmbed_image = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get image of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbedImage');
		this.setColour(230);
		this.setTooltip('The image of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=image');
	}
};

Blockly.Blocks.MessageEmbed_video = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get video of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbedVideo');
		this.setColour(230);
		this.setTooltip('The video of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=video');
	}
};

Blockly.Blocks.MessageEmbed_author = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get author of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbedAuthor');
		this.setColour(230);
		this.setTooltip('The author of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=author');
	}
};

Blockly.Blocks.MessageEmbed_provider = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get provider of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbedProvider');
		this.setColour(230);
		this.setTooltip('The provider of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=provider');
	}
};

Blockly.Blocks.MessageEmbed_footer = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get footer of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbedFooter');
		this.setColour(230);
		this.setTooltip('The footer of this embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=footer');
	}
};

Blockly.Blocks.MessageEmbed_createdAt = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The date this embed was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=createdAt');
	}
};

Blockly.Blocks.MessageEmbed_hexColor = {
	init() {
		this.appendValueInput('MessageEmbed')
			.setCheck('MessageEmbed')
			.appendField('get hexColor of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The hexadecimal version of the embed color, with a leading hash');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbed?scrollTo=hexColor');
	}
};

Blockly.Blocks.MessageEmbedThumbnail_embed = {
	init() {
		this.appendValueInput('MessageEmbedThumbnail')
			.setCheck('MessageEmbedThumbnail')
			.appendField('get embed of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbed');
		this.setColour(230);
		this.setTooltip('The embed this thumbnail is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedThumbnail?scrollTo=embed');
	}
};

Blockly.Blocks.MessageEmbedThumbnail_url = {
	init() {
		this.appendValueInput('MessageEmbedThumbnail')
			.setCheck('MessageEmbedThumbnail')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL for this thumbnail');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedThumbnail?scrollTo=url');
	}
};

Blockly.Blocks.MessageEmbedThumbnail_proxyURL = {
	init() {
		this.appendValueInput('MessageEmbedThumbnail')
			.setCheck('MessageEmbedThumbnail')
			.appendField('get proxyURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The Proxy URL for this thumbnail');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedThumbnail?scrollTo=proxyURL');
	}
};

Blockly.Blocks.MessageEmbedThumbnail_height = {
	init() {
		this.appendValueInput('MessageEmbedThumbnail')
			.setCheck('MessageEmbedThumbnail')
			.appendField('get height of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The height of the thumbnail');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedThumbnail?scrollTo=height');
	}
};

Blockly.Blocks.MessageEmbedThumbnail_width = {
	init() {
		this.appendValueInput('MessageEmbedThumbnail')
			.setCheck('MessageEmbedThumbnail')
			.appendField('get width of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The width of the thumbnail');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedThumbnail?scrollTo=width');
	}
};

Blockly.Blocks.MessageEmbedImage_embed = {
	init() {
		this.appendValueInput('MessageEmbedImage')
			.setCheck('MessageEmbedImage')
			.appendField('get embed of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbed');
		this.setColour(230);
		this.setTooltip('The embed this image is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedImage?scrollTo=embed');
	}
};

Blockly.Blocks.MessageEmbedImage_url = {
	init() {
		this.appendValueInput('MessageEmbedImage')
			.setCheck('MessageEmbedImage')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL for this image');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedImage?scrollTo=url');
	}
};

Blockly.Blocks.MessageEmbedImage_proxyURL = {
	init() {
		this.appendValueInput('MessageEmbedImage')
			.setCheck('MessageEmbedImage')
			.appendField('get proxyURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The Proxy URL for this image');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedImage?scrollTo=proxyURL');
	}
};

Blockly.Blocks.MessageEmbedImage_height = {
	init() {
		this.appendValueInput('MessageEmbedImage')
			.setCheck('MessageEmbedImage')
			.appendField('get height of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The height of the image');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedImage?scrollTo=height');
	}
};

Blockly.Blocks.MessageEmbedImage_width = {
	init() {
		this.appendValueInput('MessageEmbedImage')
			.setCheck('MessageEmbedImage')
			.appendField('get width of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The width of the image');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedImage?scrollTo=width');
	}
};

Blockly.Blocks.MessageEmbedVideo_embed = {
	init() {
		this.appendValueInput('MessageEmbedVideo')
			.setCheck('MessageEmbedVideo')
			.appendField('get embed of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbed');
		this.setColour(230);
		this.setTooltip('The embed this video is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedVideo?scrollTo=embed');
	}
};

Blockly.Blocks.MessageEmbedVideo_url = {
	init() {
		this.appendValueInput('MessageEmbedVideo')
			.setCheck('MessageEmbedVideo')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The source URL for this video');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedVideo?scrollTo=url');
	}
};

Blockly.Blocks.MessageEmbedVideo_height = {
	init() {
		this.appendValueInput('MessageEmbedVideo')
			.setCheck('MessageEmbedVideo')
			.appendField('get height of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The height of the video');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedVideo?scrollTo=height');
	}
};

Blockly.Blocks.MessageEmbedVideo_width = {
	init() {
		this.appendValueInput('MessageEmbedVideo')
			.setCheck('MessageEmbedVideo')
			.appendField('get width of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The width of the video');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedVideo?scrollTo=width');
	}
};

Blockly.Blocks.MessageEmbedProvider_embed = {
	init() {
		this.appendValueInput('MessageEmbedProvider')
			.setCheck('MessageEmbedProvider')
			.appendField('get embed of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbed');
		this.setColour(230);
		this.setTooltip('The embed this provider is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedProvider?scrollTo=embed');
	}
};

Blockly.Blocks.MessageEmbedProvider_name = {
	init() {
		this.appendValueInput('MessageEmbedProvider')
			.setCheck('MessageEmbedProvider')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of this provider');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedProvider?scrollTo=name');
	}
};

Blockly.Blocks.MessageEmbedProvider_url = {
	init() {
		this.appendValueInput('MessageEmbedProvider')
			.setCheck('MessageEmbedProvider')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL of this provider');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedProvider?scrollTo=url');
	}
};

Blockly.Blocks.MessageEmbedAuthor_embed = {
	init() {
		this.appendValueInput('MessageEmbedAuthor')
			.setCheck('MessageEmbedAuthor')
			.appendField('get embed of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbed');
		this.setColour(230);
		this.setTooltip('The embed this author is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedAuthor?scrollTo=embed');
	}
};

Blockly.Blocks.MessageEmbedAuthor_name = {
	init() {
		this.appendValueInput('MessageEmbedAuthor')
			.setCheck('MessageEmbedAuthor')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of this author');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedAuthor?scrollTo=name');
	}
};

Blockly.Blocks.MessageEmbedAuthor_url = {
	init() {
		this.appendValueInput('MessageEmbedAuthor')
			.setCheck('MessageEmbedAuthor')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The URL of this author');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedAuthor?scrollTo=url');
	}
};

Blockly.Blocks.MessageEmbedAuthor_iconURL = {
	init() {
		this.appendValueInput('MessageEmbedAuthor')
			.setCheck('MessageEmbedAuthor')
			.appendField('get iconURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The icon URL of this author');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedAuthor?scrollTo=iconURL');
	}
};

Blockly.Blocks.MessageEmbedField_embed = {
	init() {
		this.appendValueInput('MessageEmbedField')
			.setCheck('MessageEmbedField')
			.appendField('get embed of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbed');
		this.setColour(230);
		this.setTooltip('The embed this footer is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedField?scrollTo=embed');
	}
};

Blockly.Blocks.MessageEmbedField_name = {
	init() {
		this.appendValueInput('MessageEmbedField')
			.setCheck('MessageEmbedField')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of this field');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedField?scrollTo=name');
	}
};

Blockly.Blocks.MessageEmbedField_value = {
	init() {
		this.appendValueInput('MessageEmbedField')
			.setCheck('MessageEmbedField')
			.appendField('get value of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The value of this field');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedField?scrollTo=value');
	}
};

Blockly.Blocks.MessageEmbedField_inline = {
	init() {
		this.appendValueInput('MessageEmbedField')
			.setCheck('MessageEmbedField')
			.appendField('get inline of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If this field is displayed inline');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedField?scrollTo=inline');
	}
};

Blockly.Blocks.MessageEmbedFooter_embed = {
	init() {
		this.appendValueInput('MessageEmbedFooter')
			.setCheck('MessageEmbedFooter')
			.appendField('get embed of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageEmbed');
		this.setColour(230);
		this.setTooltip('The embed this footer is part of');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedFooter?scrollTo=embed');
	}
};

Blockly.Blocks.MessageEmbedFooter_text = {
	init() {
		this.appendValueInput('MessageEmbedFooter')
			.setCheck('MessageEmbedFooter')
			.appendField('get text of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The text in this footer');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedFooter?scrollTo=text');
	}
};

Blockly.Blocks.MessageEmbedFooter_iconURL = {
	init() {
		this.appendValueInput('MessageEmbedFooter')
			.setCheck('MessageEmbedFooter')
			.appendField('get iconURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The icon URL of this footer');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedFooter?scrollTo=iconURL');
	}
};

Blockly.Blocks.MessageEmbedFooter_proxyIconUrl = {
	init() {
		this.appendValueInput('MessageEmbedFooter')
			.setCheck('MessageEmbedFooter')
			.appendField('get proxyIconUrl of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The proxy icon URL of this footer');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageEmbedFooter?scrollTo=proxyIconUrl');
	}
};

Blockly.Blocks.MessageMentions_everyone = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get everyone of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether `@everyone` or `@here` were mentioned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=everyone');
	}
};

Blockly.Blocks.MessageMentions_users = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get users of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'User']);
		this.setColour(230);
		this.setTooltip('Any users that were mentioned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=users');
	}
};

Blockly.Blocks.MessageMentions_roles = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get roles of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Role']);
		this.setColour(230);
		this.setTooltip('Any roles that were mentioned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=roles');
	}
};

Blockly.Blocks.MessageMentions_members = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get members of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildMember']);
		this.setColour(230);
		this.setTooltip('Any members that were mentioned (only in {@link TextChannel}s)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=members');
	}
};

Blockly.Blocks.MessageMentions_channels = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get channels of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildChannel']);
		this.setColour(230);
		this.setTooltip('Any channels that were mentioned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=channels');
	}
};

Blockly.Blocks.MessageMentions_EVERYONE_PATTERN = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get EVERYONE_PATTERN of');
		this.setInputsInline(true);
		this.setOutput(true, 'RegExp');
		this.setColour(230);
		this.setTooltip('Regular expression that globally matches `@everyone` and `@here`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=EVERYONE_PATTERN');
	}
};

Blockly.Blocks.MessageMentions_USERS_PATTERN = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get USERS_PATTERN of');
		this.setInputsInline(true);
		this.setOutput(true, 'RegExp');
		this.setColour(230);
		this.setTooltip('Regular expression that globally matches user mentions like `<@81440962496172032>`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=USERS_PATTERN');
	}
};

Blockly.Blocks.MessageMentions_ROLES_PATTERN = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get ROLES_PATTERN of');
		this.setInputsInline(true);
		this.setOutput(true, 'RegExp');
		this.setColour(230);
		this.setTooltip('Regular expression that globally matches role mentions like `<@&297577916114403338>`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=ROLES_PATTERN');
	}
};

Blockly.Blocks.MessageMentions_CHANNELS_PATTERN = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get CHANNELS_PATTERN of');
		this.setInputsInline(true);
		this.setOutput(true, 'RegExp');
		this.setColour(230);
		this.setTooltip('Regular expression that globally matches channel mentions like `<#222079895583457280>`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=CHANNELS_PATTERN');
	}
};

Blockly.Blocks.MessageReaction_message = {
	init() {
		this.appendValueInput('MessageReaction')
			.setCheck('MessageReaction')
			.appendField('get message of');
		this.setInputsInline(true);
		this.setOutput(true, 'Message');
		this.setColour(230);
		this.setTooltip('The message that this reaction refers to');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageReaction?scrollTo=message');
	}
};

Blockly.Blocks.MessageReaction_me = {
	init() {
		this.appendValueInput('MessageReaction')
			.setCheck('MessageReaction')
			.appendField('get me of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the client has given this reaction');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageReaction?scrollTo=me');
	}
};

Blockly.Blocks.MessageReaction_count = {
	init() {
		this.appendValueInput('MessageReaction')
			.setCheck('MessageReaction')
			.appendField('get count of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The number of people that have given the same reaction');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageReaction?scrollTo=count');
	}
};

Blockly.Blocks.MessageReaction_users = {
	init() {
		this.appendValueInput('MessageReaction')
			.setCheck('MessageReaction')
			.appendField('get users of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'User']);
		this.setColour(230);
		this.setTooltip('The users that have given this reaction, mapped by their ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageReaction?scrollTo=users');
	}
};

Blockly.Blocks.MessageReaction_emoji = {
	init() {
		this.appendValueInput('MessageReaction')
			.setCheck('MessageReaction')
			.appendField('get emoji of');
		this.setInputsInline(true);
		this.setOutput(true, 'Emoji');
		this.setColour(230);
		this.setTooltip('The emoji of this reaction, either an Emoji object for known custom emojis, or a ReactionEmoji\nobject which has fewer properties. Whatever the prototype of the emoji, it will still have\n`name`, `id`, `identifier` and `toString()`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageReaction?scrollTo=emoji');
	}
};

Blockly.Blocks.MessageReaction_remove = {
	init() {
		this.appendValueInput('MessageReaction')
			.setCheck('MessageReaction')
			.appendField('with');
		this.appendDummyInput()
			.appendField('remove with');


		this.appendValueInput('user')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Removes a user from this reaction.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageReaction?scrollTo=remove');
	}
};

Blockly.Blocks.MessageReaction_fetchUsers = {
	init() {
		this.appendValueInput('MessageReaction')
			.setCheck('MessageReaction')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchUsers with');


		this.appendValueInput('limit')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetch all the users that gave this reaction. Resolves with a collection of users, mapped by their IDs.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageReaction?scrollTo=fetchUsers');
	}
};

Blockly.Blocks.OAuth2Application_client = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the application');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=client');
	}
};

Blockly.Blocks.OAuth2Application_id = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the app');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=id');
	}
};

Blockly.Blocks.OAuth2Application_name = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the app');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=name');
	}
};

Blockly.Blocks.OAuth2Application_description = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get description of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The app\'s description');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=description');
	}
};

Blockly.Blocks.OAuth2Application_icon = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get icon of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The app\'s icon hash');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=icon');
	}
};

Blockly.Blocks.OAuth2Application_iconURL = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get iconURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The app\'s icon URL');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=iconURL');
	}
};

Blockly.Blocks.OAuth2Application_rpcOrigins = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get rpcOrigins of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'String']);
		this.setColour(230);
		this.setTooltip('The app\'s RPC origins');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=rpcOrigins');
	}
};

Blockly.Blocks.OAuth2Application_redirectURIs = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get redirectURIs of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'String']);
		this.setColour(230);
		this.setTooltip('The app\'s redirect URIs');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=redirectURIs');
	}
};

Blockly.Blocks.OAuth2Application_botRequireCodeGrant = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get botRequireCodeGrant of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If this app\'s bot requires a code grant when using the OAuth2 flow');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=botRequireCodeGrant');
	}
};

Blockly.Blocks.OAuth2Application_botPublic = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get botPublic of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If this app\'s bot is public');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=botPublic');
	}
};

Blockly.Blocks.OAuth2Application_rpcApplicationState = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get rpcApplicationState of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If this app can use rpc');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=rpcApplicationState');
	}
};

Blockly.Blocks.OAuth2Application_bot = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get bot of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Object containing basic info about this app\'s bot');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=bot');
	}
};

Blockly.Blocks.OAuth2Application_flags = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get flags of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The flags for the app');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=flags');
	}
};

Blockly.Blocks.OAuth2Application_secret = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get secret of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('OAuth2 secret for the application');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=secret');
	}
};

Blockly.Blocks.OAuth2Application_owner = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get owner of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The owner of this OAuth application');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=owner');
	}
};

Blockly.Blocks.OAuth2Application_createdTimestamp = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the app was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.OAuth2Application_createdAt = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the app was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=createdAt');
	}
};

Blockly.Blocks.OAuth2Application_reset = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('with');
		this.appendDummyInput()
			.appendField('reset');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Reset the app\'s secret and bot token.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=reset');
	}
};

Blockly.Blocks.OAuth2Application_toString = {
	init() {
		this.appendValueInput('OAuth2Application')
			.setCheck('OAuth2Application')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the app name rather than the app object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/OAuth2Application?scrollTo=toString');
	}
};

Blockly.Blocks.PartialGuild_client = {
	init() {
		this.appendValueInput('PartialGuild')
			.setCheck('PartialGuild')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this PartialGuild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuild?scrollTo=client');
	}
};

Blockly.Blocks.PartialGuild_id = {
	init() {
		this.appendValueInput('PartialGuild')
			.setCheck('PartialGuild')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of this guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuild?scrollTo=id');
	}
};

Blockly.Blocks.PartialGuild_name = {
	init() {
		this.appendValueInput('PartialGuild')
			.setCheck('PartialGuild')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of this guild');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuild?scrollTo=name');
	}
};

Blockly.Blocks.PartialGuild_icon = {
	init() {
		this.appendValueInput('PartialGuild')
			.setCheck('PartialGuild')
			.appendField('get icon of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The hash of this guild\'s icon');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuild?scrollTo=icon');
	}
};

Blockly.Blocks.PartialGuild_splash = {
	init() {
		this.appendValueInput('PartialGuild')
			.setCheck('PartialGuild')
			.appendField('get splash of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The hash of the guild splash image (VIP only)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuild?scrollTo=splash');
	}
};

Blockly.Blocks.PartialGuildChannel_client = {
	init() {
		this.appendValueInput('PartialGuildChannel')
			.setCheck('PartialGuildChannel')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this PartialGuildChannel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuildChannel?scrollTo=client');
	}
};

Blockly.Blocks.PartialGuildChannel_id = {
	init() {
		this.appendValueInput('PartialGuildChannel')
			.setCheck('PartialGuildChannel')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of this guild channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuildChannel?scrollTo=id');
	}
};

Blockly.Blocks.PartialGuildChannel_name = {
	init() {
		this.appendValueInput('PartialGuildChannel')
			.setCheck('PartialGuildChannel')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of this guild channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuildChannel?scrollTo=name');
	}
};

Blockly.Blocks.PartialGuildChannel_type = {
	init() {
		this.appendValueInput('PartialGuildChannel')
			.setCheck('PartialGuildChannel')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of this guild channel - `text` or `voice`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PartialGuildChannel?scrollTo=type');
	}
};

Blockly.Blocks.PermissionOverwrites_channel = {
	init() {
		this.appendValueInput('PermissionOverwrites')
			.setCheck('PermissionOverwrites')
			.appendField('get channel of');
		this.setInputsInline(true);
		this.setOutput(true, 'GuildChannel');
		this.setColour(230);
		this.setTooltip('The GuildChannel this overwrite is for');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PermissionOverwrites?scrollTo=channel');
	}
};

Blockly.Blocks.PermissionOverwrites_id = {
	init() {
		this.appendValueInput('PermissionOverwrites')
			.setCheck('PermissionOverwrites')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of this overwrite, either a user ID or a role ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PermissionOverwrites?scrollTo=id');
	}
};

Blockly.Blocks.PermissionOverwrites_type = {
	init() {
		this.appendValueInput('PermissionOverwrites')
			.setCheck('PermissionOverwrites')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of this overwrite');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PermissionOverwrites?scrollTo=type');
	}
};

Blockly.Blocks.PermissionOverwrites_delete = {
	init() {
		this.appendValueInput('PermissionOverwrites')
			.setCheck('PermissionOverwrites')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete with');


		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Delete this Permission Overwrite.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PermissionOverwrites?scrollTo=delete');
	}
};

Blockly.Blocks.Presence_status = {
	init() {
		this.appendValueInput('Presence')
			.setCheck('Presence')
			.appendField('get status of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The status of the presence:\n\n* **`online`** - user is online\n* **`offline`** - user is offline or invisible\n* **`idle`** - user is AFK\n* **`dnd`** - user is in Do not Disturb');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Presence?scrollTo=status');
	}
};

Blockly.Blocks.Presence_game = {
	init() {
		this.appendValueInput('Presence')
			.setCheck('Presence')
			.appendField('get game of');
		this.setInputsInline(true);
		this.setOutput(true, 'Game');
		this.setColour(230);
		this.setTooltip('The game that the user is playing');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Presence?scrollTo=game');
	}
};

Blockly.Blocks.Presence_equals = {
	init() {
		this.appendValueInput('Presence')
			.setCheck('Presence')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('presence')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Whether this presence is equal to another');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Presence?scrollTo=equals');
	}
};

Blockly.Blocks.Game_name = {
	init() {
		this.appendValueInput('Game')
			.setCheck('Game')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the game being played');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=name');
	}
};

Blockly.Blocks.Game_type = {
	init() {
		this.appendValueInput('Game')
			.setCheck('Game')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The type of the game status');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=type');
	}
};

Blockly.Blocks.Game_url = {
	init() {
		this.appendValueInput('Game')
			.setCheck('Game')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('If the game is being streamed, a link to the stream');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=url');
	}
};

Blockly.Blocks.Game_streaming = {
	init() {
		this.appendValueInput('Game')
			.setCheck('Game')
			.appendField('get streaming of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the game is being streamed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=streaming');
	}
};

Blockly.Blocks.Game_equals = {
	init() {
		this.appendValueInput('Game')
			.setCheck('Game')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('game')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Whether this game is equal to another game');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=equals');
	}
};

Blockly.Blocks.ReactionCollector_constructor = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('ReactionCollector_constructor');
		this.setOutput(true, 'ReactionCollector');
		this.setColour(160);
		this.setTooltip('Collects reactions on messages.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector');
	}
};

Blockly.Blocks.ReactionCollector_message = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get message of');
		this.setInputsInline(true);
		this.setOutput(true, 'Message');
		this.setColour(230);
		this.setTooltip('The message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=message');
	}
};

Blockly.Blocks.ReactionCollector_users = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get users of');
		this.setInputsInline(true);
		this.setOutput(true, 'Collection');
		this.setColour(230);
		this.setTooltip('The users which have reacted');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=users');
	}
};

Blockly.Blocks.ReactionCollector_total = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get total of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The total number of reactions collected');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=total');
	}
};

Blockly.Blocks.ReactionCollector_client = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=client');
	}
};

Blockly.Blocks.ReactionCollector_filter = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get filter of');
		this.setInputsInline(true);
		this.setOutput(true, 'CollectorFilter');
		this.setColour(230);
		this.setTooltip('The filter applied to this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=filter');
	}
};

Blockly.Blocks.ReactionCollector_options = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get options of');
		this.setInputsInline(true);
		this.setOutput(true, 'CollectorOptions');
		this.setColour(230);
		this.setTooltip('The options of this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=options');
	}
};

Blockly.Blocks.ReactionCollector_collected = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get collected of');
		this.setInputsInline(true);
		this.setOutput(true, 'Collection');
		this.setColour(230);
		this.setTooltip('The items collected by this collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=collected');
	}
};

Blockly.Blocks.ReactionCollector_ended = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get ended of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether this collector has finished collecting');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=ended');
	}
};

Blockly.Blocks.ReactionCollector_next = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get next of');
		this.setInputsInline(true);
		this.setOutput(true, 'Promise');
		this.setColour(230);
		this.setTooltip('Return a promise that resolves with the next collected element;\nrejects with collected elements if the collector finishes without receving a next element');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=next');
	}
};

Blockly.Blocks.ReactionCollector_collect = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits collect')
			.appendField(new Blockly.FieldVariable('element'), 'element').appendField(new Blockly.FieldVariable('collector'), 'collector');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted whenever an element is collected.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=collect');
	}
};

Blockly.Blocks.ReactionCollector_end = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('when');
		this.appendDummyInput()
			.appendField('emits end')
			.appendField(new Blockly.FieldVariable('collected'), 'collected').appendField(new Blockly.FieldVariable('reason'), 'reason');
		this.appendStatementInput('function')
			.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
		this.setTooltip('Emitted when the collector is finished collecting.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=end');
	}
};

Blockly.Blocks.ReactionEmoji_reaction = {
	init() {
		this.appendValueInput('ReactionEmoji')
			.setCheck('ReactionEmoji')
			.appendField('get reaction of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageReaction');
		this.setColour(230);
		this.setTooltip('The message reaction this emoji refers to');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionEmoji?scrollTo=reaction');
	}
};

Blockly.Blocks.ReactionEmoji_name = {
	init() {
		this.appendValueInput('ReactionEmoji')
			.setCheck('ReactionEmoji')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of this reaction emoji');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionEmoji?scrollTo=name');
	}
};

Blockly.Blocks.ReactionEmoji_id = {
	init() {
		this.appendValueInput('ReactionEmoji')
			.setCheck('ReactionEmoji')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of this reaction emoji');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionEmoji?scrollTo=id');
	}
};

Blockly.Blocks.ReactionEmoji_identifier = {
	init() {
		this.appendValueInput('ReactionEmoji')
			.setCheck('ReactionEmoji')
			.appendField('get identifier of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The identifier of this emoji, used for message reactions');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionEmoji?scrollTo=identifier');
	}
};

Blockly.Blocks.ReactionEmoji_toString = {
	init() {
		this.appendValueInput('ReactionEmoji')
			.setCheck('ReactionEmoji')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates the text required to form a graphical emoji on Discord.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionEmoji?scrollTo=toString');
	}
};

Blockly.Blocks.RichEmbed_constructor = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('RichEmbed_constructor');
		this.setOutput(true, 'RichEmbed');
		this.setColour(160);
		this.setTooltip('A rich embed to be sent with a message with a fluent interface for creation.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed');
	}
};

Blockly.Blocks.RichEmbed_title = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get title of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Title for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=title');
	}
};

Blockly.Blocks.RichEmbed_description = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get description of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Description for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=description');
	}
};

Blockly.Blocks.RichEmbed_url = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get url of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('URL for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=url');
	}
};

Blockly.Blocks.RichEmbed_color = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get color of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Color for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=color');
	}
};

Blockly.Blocks.RichEmbed_author = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get author of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Author for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=author');
	}
};

Blockly.Blocks.RichEmbed_timestamp = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get timestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('Timestamp for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=timestamp');
	}
};

Blockly.Blocks.RichEmbed_fields = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get fields of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'Object']);
		this.setColour(230);
		this.setTooltip('Fields for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=fields');
	}
};

Blockly.Blocks.RichEmbed_thumbnail = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get thumbnail of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Thumbnail for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=thumbnail');
	}
};

Blockly.Blocks.RichEmbed_image = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get image of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Image for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=image');
	}
};

Blockly.Blocks.RichEmbed_footer = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get footer of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Footer for this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=footer');
	}
};

Blockly.Blocks.RichEmbed_file = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('get file of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('File to upload alongside this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=file');
	}
};

Blockly.Blocks.RichEmbed_setTitle = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setTitle with');


		this.appendValueInput('title')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the title of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setTitle');
	}
};

Blockly.Blocks.RichEmbed_setDescription = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setDescription with');


		this.appendValueInput('description')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the description of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setDescription');
	}
};

Blockly.Blocks.RichEmbed_setURL = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setURL with');


		this.appendValueInput('url')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the URL of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setURL');
	}
};

Blockly.Blocks.RichEmbed_setColor = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setColor with');


		this.appendValueInput('color')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the color of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setColor');
	}
};

Blockly.Blocks.RichEmbed_setAuthor = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setAuthor with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('icon')
			.setCheck(null);

		this.appendValueInput('url')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the author of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setAuthor');
	}
};

Blockly.Blocks.RichEmbed_setTimestamp = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setTimestamp with');


		this.appendValueInput('timestamp')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the timestamp of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setTimestamp');
	}
};

Blockly.Blocks.RichEmbed_addField = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addField with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('value')
			.setCheck(null);

		this.appendValueInput('inline')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Adds a field to the embed (max 25).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=addField');
	}
};

Blockly.Blocks.RichEmbed_addBlankField = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addBlankField with');


		this.appendValueInput('inline')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Convenience function for `<RichEmbed>.addField(\'\u200B\', \'\u200B\', inline)`.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=addBlankField');
	}
};

Blockly.Blocks.RichEmbed_setThumbnail = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setThumbnail with');


		this.appendValueInput('url')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the thumbnail of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setThumbnail');
	}
};

Blockly.Blocks.RichEmbed_setImage = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setImage with');


		this.appendValueInput('url')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the image of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setImage');
	}
};

Blockly.Blocks.RichEmbed_setFooter = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setFooter with');


		this.appendValueInput('text')
			.setCheck(null);

		this.appendValueInput('icon')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the footer of this embed.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=setFooter');
	}
};

Blockly.Blocks.RichEmbed_attachFile = {
	init() {
		this.appendValueInput('RichEmbed')
			.setCheck('RichEmbed')
			.appendField('with');
		this.appendDummyInput()
			.appendField('attachFile with');


		this.appendValueInput('file')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the file to upload alongside the embed. This file can be accessed via `attachment://fileName.extension` when\nsetting an embed image or author/footer icons. Only one file may be attached.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=attachFile');
	}
};

Blockly.Blocks.Role_client = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the role');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=client');
	}
};

Blockly.Blocks.Role_guild = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild that the role belongs to');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=guild');
	}
};

Blockly.Blocks.Role_id = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the role (unique to the guild it is part of)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=id');
	}
};

Blockly.Blocks.Role_name = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the role');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=name');
	}
};

Blockly.Blocks.Role_color = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get color of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The base 10 color of the role');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=color');
	}
};

Blockly.Blocks.Role_hoist = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get hoist of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If true, users that are part of this role will appear in a separate category in the users list');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=hoist');
	}
};

Blockly.Blocks.Role_position = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get position of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of the role from the API');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=position');
	}
};

Blockly.Blocks.Role_permissions = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get permissions of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The permissions bitfield of the role');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=permissions');
	}
};

Blockly.Blocks.Role_managed = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get managed of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the role is managed by an external service');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=managed');
	}
};

Blockly.Blocks.Role_mentionable = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get mentionable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the role can be mentioned by anyone');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=mentionable');
	}
};

Blockly.Blocks.Role_createdTimestamp = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the role was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.Role_createdAt = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the role was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=createdAt');
	}
};

Blockly.Blocks.Role_hexColor = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get hexColor of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The hexadecimal version of the role color, with a leading hashtag');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=hexColor');
	}
};

Blockly.Blocks.Role_members = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get members of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildMember']);
		this.setColour(230);
		this.setTooltip('The cached guild members that have this role');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=members');
	}
};

Blockly.Blocks.Role_editable = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get editable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the role is editable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=editable');
	}
};

Blockly.Blocks.Role_calculatedPosition = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('get calculatedPosition of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of the role in the role manager');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=calculatedPosition');
	}
};

Blockly.Blocks.Role_serialize = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('serialize');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Get an object mapping permission names to whether or not the role enables that permission.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=serialize');
	}
};

Blockly.Blocks.Role_hasPermission = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('hasPermission with');


		this.appendValueInput('permission')
			.setCheck(null);

		this.appendValueInput('explicit')
			.setCheck(null);

		this.appendValueInput('checkAdmin')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if the role has a permission.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=hasPermission');
	}
};

Blockly.Blocks.Role_hasPermissions = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('hasPermissions with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.appendValueInput('explicit')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if the role has all specified permissions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=hasPermissions');
	}
};

Blockly.Blocks.Role_comparePositionTo = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('comparePositionTo with');


		this.appendValueInput('role')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Compares this role\'s position to another role\'s.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=comparePositionTo');
	}
};

Blockly.Blocks.Role_edit = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('data')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edits the role.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=edit');
	}
};

Blockly.Blocks.Role_setName = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setName with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new name for the role.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=setName');
	}
};

Blockly.Blocks.Role_setColor = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setColor with');


		this.appendValueInput('color')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new color for the role.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=setColor');
	}
};

Blockly.Blocks.Role_setHoist = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setHoist with');


		this.appendValueInput('hoist')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set whether or not the role should be hoisted.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=setHoist');
	}
};

Blockly.Blocks.Role_setPosition = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setPosition with');


		this.appendValueInput('position')
			.setCheck(null);

		this.appendValueInput('relative')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the position of the role.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=setPosition');
	}
};

Blockly.Blocks.Role_setPermissions = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setPermissions with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set the permissions of the role.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=setPermissions');
	}
};

Blockly.Blocks.Role_setMentionable = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setMentionable with');


		this.appendValueInput('mentionable')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set whether this role is mentionable.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=setMentionable');
	}
};

Blockly.Blocks.Role_delete = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete with');


		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes the role.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=delete');
	}
};

Blockly.Blocks.Role_equals = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('role')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Whether this role equals another role. It compares all properties, so for most operations\nit is advisable to just compare `role.id === role2.id` as it is much faster and is often\nwhat most users need.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=equals');
	}
};

Blockly.Blocks.Role_toString = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the role mention rather than the Role object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=toString');
	}
};

Blockly.Blocks.Role_comparePositions = {
	init() {
		this.appendValueInput('Role')
			.setCheck('Role')
			.appendField('with');
		this.appendDummyInput()
			.appendField('comparePositions with');


		this.appendValueInput('role1')
			.setCheck(null);

		this.appendValueInput('role2')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Compares the positions of two roles.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=comparePositions');
	}
};

Blockly.Blocks.TextChannel_topic = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get topic of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The topic of the text channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=topic');
	}
};

Blockly.Blocks.TextChannel_nsfw = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get nsfw of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If the Discord considers this channel NSFW');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=nsfw');
	}
};

Blockly.Blocks.TextChannel_members = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get members of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildMember']);
		this.setColour(230);
		this.setTooltip('A collection of members that can see this channel, mapped by their ID');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=members');
	}
};

Blockly.Blocks.TextChannel_messages = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get messages of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Message']);
		this.setColour(230);
		this.setTooltip('A collection containing the messages sent to this channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=messages');
	}
};

Blockly.Blocks.TextChannel_lastMessageID = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get lastMessageID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the last message in the channel, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=lastMessageID');
	}
};

Blockly.Blocks.TextChannel_typing = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get typing of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the typing indicator is being shown in the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=typing');
	}
};

Blockly.Blocks.TextChannel_typingCount = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get typingCount of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Number of times `startTyping` has been called');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=typingCount');
	}
};

Blockly.Blocks.TextChannel_guild = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild the channel is in');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=guild');
	}
};

Blockly.Blocks.TextChannel_name = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the guild channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=name');
	}
};

Blockly.Blocks.TextChannel_position = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get position of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of the channel in the list');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=position');
	}
};

Blockly.Blocks.TextChannel_permissionOverwrites = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get permissionOverwrites of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'PermissionOverwrites']);
		this.setColour(230);
		this.setTooltip('A map of permission overwrites in this channel for roles and users');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=permissionOverwrites');
	}
};

Blockly.Blocks.TextChannel_calculatedPosition = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get calculatedPosition of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=calculatedPosition');
	}
};

Blockly.Blocks.TextChannel_deletable = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get deletable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the channel is deletable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=deletable');
	}
};

Blockly.Blocks.TextChannel_muted = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get muted of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the channel is muted\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=muted');
	}
};

Blockly.Blocks.TextChannel_messageNotifications = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get messageNotifications of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageNotificationType');
		this.setColour(230);
		this.setTooltip('The type of message that should notify you\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=messageNotifications');
	}
};

Blockly.Blocks.TextChannel_fetchWebhooks = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchWebhooks');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetch all webhooks for the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=fetchWebhooks');
	}
};

Blockly.Blocks.TextChannel_createWebhook = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createWebhook with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('avatar')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Create a webhook for the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=createWebhook');
	}
};

Blockly.Blocks.TextChannel_send = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=send');
	}
};

Blockly.Blocks.TextChannel_fetchMessage = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMessage with');


		this.appendValueInput('messageID')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets a single message from this channel, regardless of it being cached or not. Since the single message fetching\nendpoint is reserved for bot accounts, this abstracts the `fetchMessages` method to obtain the single message when\nusing a user account.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=fetchMessage');
	}
};

Blockly.Blocks.TextChannel_fetchMessages = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchMessages with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets the past messages sent in this channel. Resolves with a collection mapping message ID\'s to Message objects.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=fetchMessages');
	}
};

Blockly.Blocks.TextChannel_fetchPinnedMessages = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchPinnedMessages');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Fetches the pinned messages of this channel and returns a collection of them.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=fetchPinnedMessages');
	}
};

Blockly.Blocks.TextChannel_search = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('search with');


		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Performs a search within the channel.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=search');
	}
};

Blockly.Blocks.TextChannel_createCollector = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createCollector with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a Message Collector');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=createCollector');
	}
};

Blockly.Blocks.TextChannel_createMessageCollector = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createMessageCollector with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a Message Collector.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=createMessageCollector');
	}
};

Blockly.Blocks.TextChannel_awaitMessages = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('awaitMessages with');


		this.appendValueInput('filter')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Similar to createCollector but in promise form. Resolves with a collection of messages that pass the specified\nfilter.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=awaitMessages');
	}
};

Blockly.Blocks.TextChannel_bulkDelete = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('bulkDelete with');


		this.appendValueInput('messages')
			.setCheck(null);

		this.appendValueInput('filterOld')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Bulk delete given messages that are newer than two weeks.\n<warn>This is only available when using a bot account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=bulkDelete');
	}
};

Blockly.Blocks.TextChannel_acknowledge = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('acknowledge');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Marks all messages in this channel as read.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=acknowledge');
	}
};

Blockly.Blocks.TextChannel_sendMessage = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendMessage with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=sendMessage');
	}
};

Blockly.Blocks.TextChannel_sendEmbed = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendEmbed with');


		this.appendValueInput('embed')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send an embed to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=sendEmbed');
	}
};

Blockly.Blocks.TextChannel_sendFiles = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFiles with');


		this.appendValueInput('files')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send files to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=sendFiles');
	}
};

Blockly.Blocks.TextChannel_sendFile = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a file to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=sendFile');
	}
};

Blockly.Blocks.TextChannel_sendCode = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a code block to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=sendCode');
	}
};

Blockly.Blocks.TextChannel_permissionsFor = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('permissionsFor with');


		this.appendValueInput('member')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets the overall set of permissions for a user in this channel, taking into account roles and permission\noverwrites.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=permissionsFor');
	}
};

Blockly.Blocks.TextChannel_overwritePermissions = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('overwritePermissions with');


		this.appendValueInput('userOrRole')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Overwrites the permissions for a user or role in this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=overwritePermissions');
	}
};

Blockly.Blocks.TextChannel_edit = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('data')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edits the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=edit');
	}
};

Blockly.Blocks.TextChannel_setName = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setName with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new name for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=setName');
	}
};

Blockly.Blocks.TextChannel_setPosition = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setPosition with');


		this.appendValueInput('position')
			.setCheck(null);

		this.appendValueInput('relative')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new position for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=setPosition');
	}
};

Blockly.Blocks.TextChannel_setTopic = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setTopic with');


		this.appendValueInput('topic')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new topic for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=setTopic');
	}
};

Blockly.Blocks.TextChannel_createInvite = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createInvite with');


		this.appendValueInput('options')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Create an invite to this guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=createInvite');
	}
};

Blockly.Blocks.TextChannel_clone = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('clone with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('withPermissions')
			.setCheck(null);

		this.appendValueInput('withTopic')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Clone this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=clone');
	}
};

Blockly.Blocks.TextChannel_equals = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if this channel has the same type, topic, position, name, overwrites and ID as another channel.\nIn most cases, a simple `channel.id === channel2.id` will do, and is much faster too.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=equals');
	}
};

Blockly.Blocks.TextChannel_toString = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically returns the channel\'s mention instead of the Channel object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=toString');
	}
};

Blockly.Blocks.User_client = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that created the instance of the user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=client');
	}
};

Blockly.Blocks.User_id = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=id');
	}
};

Blockly.Blocks.User_username = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get username of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The username of the user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=username');
	}
};

Blockly.Blocks.User_discriminator = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get discriminator of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A discriminator based on username for the user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=discriminator');
	}
};

Blockly.Blocks.User_avatar = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get avatar of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The ID of the user\'s avatar');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=avatar');
	}
};

Blockly.Blocks.User_bot = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get bot of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the user is a bot');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=bot');
	}
};

Blockly.Blocks.User_lastMessageID = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get lastMessageID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the last message sent by the user, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=lastMessageID');
	}
};

Blockly.Blocks.User_lastMessage = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get lastMessage of');
		this.setInputsInline(true);
		this.setOutput(true, 'Message');
		this.setColour(230);
		this.setTooltip('The Message object of the last message sent by the user, if one was sent');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=lastMessage');
	}
};

Blockly.Blocks.User_createdTimestamp = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get createdTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The timestamp the user was created at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=createdTimestamp');
	}
};

Blockly.Blocks.User_createdAt = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get createdAt of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The time the user was created');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=createdAt');
	}
};

Blockly.Blocks.User_presence = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get presence of');
		this.setInputsInline(true);
		this.setOutput(true, 'Presence');
		this.setColour(230);
		this.setTooltip('The presence of this user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=presence');
	}
};

Blockly.Blocks.User_avatarURL = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get avatarURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A link to the user\'s avatar');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=avatarURL');
	}
};

Blockly.Blocks.User_defaultAvatarURL = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get defaultAvatarURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A link to the user\'s default avatar');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=defaultAvatarURL');
	}
};

Blockly.Blocks.User_displayAvatarURL = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get displayAvatarURL of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A link to the user\'s avatar if they have one. Otherwise a link to their default avatar will be returned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=displayAvatarURL');
	}
};

Blockly.Blocks.User_tag = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get tag of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The Discord "tag" for this user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=tag');
	}
};

Blockly.Blocks.User_note = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get note of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The note that is set for the user\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=note');
	}
};

Blockly.Blocks.User_dmChannel = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('get dmChannel of');
		this.setInputsInline(true);
		this.setOutput(true, 'DMChannel');
		this.setColour(230);
		this.setTooltip('The DM between the client\'s user and this user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=dmChannel');
	}
};

Blockly.Blocks.User_typingIn = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('typingIn with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Check whether the user is typing in a channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=typingIn');
	}
};

Blockly.Blocks.User_typingSinceIn = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('typingSinceIn with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Get the time that the user started typing.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=typingSinceIn');
	}
};

Blockly.Blocks.User_typingDurationIn = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('typingDurationIn with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Get the amount of time the user has been typing in a channel for (in milliseconds), or -1 if they\'re not typing.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=typingDurationIn');
	}
};

Blockly.Blocks.User_createDM = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createDM');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates a DM channel between the client and the user.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=createDM');
	}
};

Blockly.Blocks.User_deleteDM = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('deleteDM');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=deleteDM');
	}
};

Blockly.Blocks.User_addFriend = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('addFriend');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sends a friend request to the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=addFriend');
	}
};

Blockly.Blocks.User_removeFriend = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('removeFriend');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Removes the user from your friends.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=removeFriend');
	}
};

Blockly.Blocks.User_block = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('block');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Blocks the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=block');
	}
};

Blockly.Blocks.User_unblock = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('unblock');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Unblocks the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=unblock');
	}
};

Blockly.Blocks.User_fetchProfile = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchProfile');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Get the profile of the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=fetchProfile');
	}
};

Blockly.Blocks.User_setNote = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setNote with');


		this.appendValueInput('note')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets a note for the user.\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=setNote');
	}
};

Blockly.Blocks.User_equals = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('user')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if the user is equal to another. It compares ID, username, discriminator, avatar, and bot flags.\nIt is recommended to compare equality by using `user.id === user2.id` unless you want to compare all properties.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=equals');
	}
};

Blockly.Blocks.User_toString = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically concatenates the user\'s mention instead of the User object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=toString');
	}
};

Blockly.Blocks.User_send = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=send');
	}
};

Blockly.Blocks.User_sendMessage = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendMessage with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=sendMessage');
	}
};

Blockly.Blocks.User_sendEmbed = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendEmbed with');


		this.appendValueInput('embed')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send an embed to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=sendEmbed');
	}
};

Blockly.Blocks.User_sendFile = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a file to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=sendFile');
	}
};

Blockly.Blocks.User_sendCode = {
	init() {
		this.appendValueInput('User')
			.setCheck('User')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a code block to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=sendCode');
	}
};

Blockly.Blocks.UserConnection_user = {
	init() {
		this.appendValueInput('UserConnection')
			.setCheck('UserConnection')
			.appendField('get user of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The user that owns the connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserConnection?scrollTo=user');
	}
};

Blockly.Blocks.UserConnection_type = {
	init() {
		this.appendValueInput('UserConnection')
			.setCheck('UserConnection')
			.appendField('get type of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The type of the connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserConnection?scrollTo=type');
	}
};

Blockly.Blocks.UserConnection_name = {
	init() {
		this.appendValueInput('UserConnection')
			.setCheck('UserConnection')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The username of the connection account');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserConnection?scrollTo=name');
	}
};

Blockly.Blocks.UserConnection_id = {
	init() {
		this.appendValueInput('UserConnection')
			.setCheck('UserConnection')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The id of the connection account');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserConnection?scrollTo=id');
	}
};

Blockly.Blocks.UserConnection_revoked = {
	init() {
		this.appendValueInput('UserConnection')
			.setCheck('UserConnection')
			.appendField('get revoked of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the connection is revoked');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserConnection?scrollTo=revoked');
	}
};

Blockly.Blocks.UserConnection_integrations = {
	init() {
		this.appendValueInput('UserConnection')
			.setCheck('UserConnection')
			.appendField('get integrations of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'Object']);
		this.setColour(230);
		this.setTooltip('Partial server integrations (not yet implemented)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserConnection?scrollTo=integrations');
	}
};

Blockly.Blocks.UserProfile_user = {
	init() {
		this.appendValueInput('UserProfile')
			.setCheck('UserProfile')
			.appendField('get user of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The owner of the profile');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserProfile?scrollTo=user');
	}
};

Blockly.Blocks.UserProfile_client = {
	init() {
		this.appendValueInput('UserProfile')
			.setCheck('UserProfile')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that created the instance of the UserProfile');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserProfile?scrollTo=client');
	}
};

Blockly.Blocks.UserProfile_mutualGuilds = {
	init() {
		this.appendValueInput('UserProfile')
			.setCheck('UserProfile')
			.appendField('get mutualGuilds of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Guild']);
		this.setColour(230);
		this.setTooltip('The guilds that the client user and the user share');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserProfile?scrollTo=mutualGuilds');
	}
};

Blockly.Blocks.UserProfile_connections = {
	init() {
		this.appendValueInput('UserProfile')
			.setCheck('UserProfile')
			.appendField('get connections of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'UserConnection']);
		this.setColour(230);
		this.setTooltip('The user\'s connections');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserProfile?scrollTo=connections');
	}
};

Blockly.Blocks.UserProfile_premium = {
	init() {
		this.appendValueInput('UserProfile')
			.setCheck('UserProfile')
			.appendField('get premium of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('If the user has Discord Premium');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserProfile?scrollTo=premium');
	}
};

Blockly.Blocks.UserProfile_premiumSince = {
	init() {
		this.appendValueInput('UserProfile')
			.setCheck('UserProfile')
			.appendField('get premiumSince of');
		this.setInputsInline(true);
		this.setOutput(true, 'Date');
		this.setColour(230);
		this.setTooltip('The date since which the user has had Discord Premium');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/UserProfile?scrollTo=premiumSince');
	}
};

Blockly.Blocks.VoiceChannel_members = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get members of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildMember']);
		this.setColour(230);
		this.setTooltip('The members in this voice channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=members');
	}
};

Blockly.Blocks.VoiceChannel_bitrate = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get bitrate of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The bitrate of this voice channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=bitrate');
	}
};

Blockly.Blocks.VoiceChannel_userLimit = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get userLimit of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The maximum amount of users allowed in this channel - 0 means unlimited.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=userLimit');
	}
};

Blockly.Blocks.VoiceChannel_connection = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get connection of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceConnection');
		this.setColour(230);
		this.setTooltip('The voice connection for this voice channel, if the client is connected');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=connection');
	}
};

Blockly.Blocks.VoiceChannel_full = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get full of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Checks if the voice channel is full');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=full');
	}
};

Blockly.Blocks.VoiceChannel_joinable = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get joinable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Checks if the client has permission join the voice channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=joinable');
	}
};

Blockly.Blocks.VoiceChannel_speakable = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get speakable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Checks if the client has permission to send audio to the voice channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=speakable');
	}
};

Blockly.Blocks.VoiceChannel_guild = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild the channel is in');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=guild');
	}
};

Blockly.Blocks.VoiceChannel_name = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the guild channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=name');
	}
};

Blockly.Blocks.VoiceChannel_position = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get position of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of the channel in the list');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=position');
	}
};

Blockly.Blocks.VoiceChannel_permissionOverwrites = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get permissionOverwrites of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'PermissionOverwrites']);
		this.setColour(230);
		this.setTooltip('A map of permission overwrites in this channel for roles and users');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=permissionOverwrites');
	}
};

Blockly.Blocks.VoiceChannel_calculatedPosition = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get calculatedPosition of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('The position of the channel');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=calculatedPosition');
	}
};

Blockly.Blocks.VoiceChannel_deletable = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get deletable of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the channel is deletable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=deletable');
	}
};

Blockly.Blocks.VoiceChannel_muted = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get muted of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the channel is muted\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=muted');
	}
};

Blockly.Blocks.VoiceChannel_messageNotifications = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('get messageNotifications of');
		this.setInputsInline(true);
		this.setOutput(true, 'MessageNotificationType');
		this.setColour(230);
		this.setTooltip('The type of message that should notify you\n<warn>This is only available when using a user account.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=messageNotifications');
	}
};

Blockly.Blocks.VoiceChannel_setBitrate = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setBitrate with');


		this.appendValueInput('bitrate')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the bitrate of the channel (in kbps).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=setBitrate');
	}
};

Blockly.Blocks.VoiceChannel_setUserLimit = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setUserLimit with');


		this.appendValueInput('userLimit')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Sets the user limit of the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=setUserLimit');
	}
};

Blockly.Blocks.VoiceChannel_join = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('join');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Attempts to join this voice channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=join');
	}
};

Blockly.Blocks.VoiceChannel_permissionsFor = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('permissionsFor with');


		this.appendValueInput('member')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets the overall set of permissions for a user in this channel, taking into account roles and permission\noverwrites.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=permissionsFor');
	}
};

Blockly.Blocks.VoiceChannel_overwritePermissions = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('overwritePermissions with');


		this.appendValueInput('userOrRole')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Overwrites the permissions for a user or role in this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=overwritePermissions');
	}
};

Blockly.Blocks.VoiceChannel_edit = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('data')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edits the channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=edit');
	}
};

Blockly.Blocks.VoiceChannel_setName = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setName with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new name for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=setName');
	}
};

Blockly.Blocks.VoiceChannel_setPosition = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setPosition with');


		this.appendValueInput('position')
			.setCheck(null);

		this.appendValueInput('relative')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new position for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=setPosition');
	}
};

Blockly.Blocks.VoiceChannel_setTopic = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('setTopic with');


		this.appendValueInput('topic')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Set a new topic for the guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=setTopic');
	}
};

Blockly.Blocks.VoiceChannel_createInvite = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('createInvite with');


		this.appendValueInput('options')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Create an invite to this guild channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=createInvite');
	}
};

Blockly.Blocks.VoiceChannel_clone = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('clone with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('withPermissions')
			.setCheck(null);

		this.appendValueInput('withTopic')
			.setCheck(null);

		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Clone this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=clone');
	}
};

Blockly.Blocks.VoiceChannel_equals = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('channel')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if this channel has the same type, topic, position, name, overwrites and ID as another channel.\nIn most cases, a simple `channel.id === channel2.id` will do, and is much faster too.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=equals');
	}
};

Blockly.Blocks.VoiceChannel_toString = {
	init() {
		this.appendValueInput('VoiceChannel')
			.setCheck('VoiceChannel')
			.appendField('with');
		this.appendDummyInput()
			.appendField('toString');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('When concatenated with a string, this automatically returns the channel\'s mention instead of the Channel object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceChannel?scrollTo=toString');
	}
};

Blockly.Blocks.VoiceRegion_id = {
	init() {
		this.appendValueInput('VoiceRegion')
			.setCheck('VoiceRegion')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The ID of the region');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceRegion?scrollTo=id');
	}
};

Blockly.Blocks.VoiceRegion_name = {
	init() {
		this.appendValueInput('VoiceRegion')
			.setCheck('VoiceRegion')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('Name of the region');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceRegion?scrollTo=name');
	}
};

Blockly.Blocks.VoiceRegion_vip = {
	init() {
		this.appendValueInput('VoiceRegion')
			.setCheck('VoiceRegion')
			.appendField('get vip of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the region is VIP-only');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceRegion?scrollTo=vip');
	}
};

Blockly.Blocks.VoiceRegion_deprecated = {
	init() {
		this.appendValueInput('VoiceRegion')
			.setCheck('VoiceRegion')
			.appendField('get deprecated of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the region is deprecated');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceRegion?scrollTo=deprecated');
	}
};

Blockly.Blocks.VoiceRegion_optimal = {
	init() {
		this.appendValueInput('VoiceRegion')
			.setCheck('VoiceRegion')
			.appendField('get optimal of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the region is optimal');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceRegion?scrollTo=optimal');
	}
};

Blockly.Blocks.VoiceRegion_custom = {
	init() {
		this.appendValueInput('VoiceRegion')
			.setCheck('VoiceRegion')
			.appendField('get custom of');
		this.setInputsInline(true);
		this.setOutput(true, 'Boolean');
		this.setColour(230);
		this.setTooltip('Whether the region is custom');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceRegion?scrollTo=custom');
	}
};

Blockly.Blocks.VoiceRegion_sampleHostname = {
	init() {
		this.appendValueInput('VoiceRegion')
			.setCheck('VoiceRegion')
			.appendField('get sampleHostname of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('A sample hostname for what a connection might look like');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceRegion?scrollTo=sampleHostname');
	}
};

Blockly.Blocks.Webhook_client = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=client');
	}
};

Blockly.Blocks.Webhook_name = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The name of the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=name');
	}
};

Blockly.Blocks.Webhook_token = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('get token of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The token for the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=token');
	}
};

Blockly.Blocks.Webhook_avatar = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('get avatar of');
		this.setInputsInline(true);
		this.setOutput(true, 'String');
		this.setColour(230);
		this.setTooltip('The avatar for the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=avatar');
	}
};

Blockly.Blocks.Webhook_id = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The ID of the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=id');
	}
};

Blockly.Blocks.Webhook_guildID = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('get guildID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The guild the webhook belongs to');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=guildID');
	}
};

Blockly.Blocks.Webhook_channelID = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('get channelID of');
		this.setInputsInline(true);
		this.setOutput(true, 'Snowflake');
		this.setColour(230);
		this.setTooltip('The channel the webhook belongs to');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=channelID');
	}
};

Blockly.Blocks.Webhook_owner = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('get owner of');
		this.setInputsInline(true);
		this.setOutput(true, 'User');
		this.setColour(230);
		this.setTooltip('The owner of the webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=owner');
	}
};

Blockly.Blocks.Webhook_send = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('with');
		this.appendDummyInput()
			.appendField('send with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message with this webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=send');
	}
};

Blockly.Blocks.Webhook_sendMessage = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendMessage with');


		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a message with this webhook');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=sendMessage');
	}
};

Blockly.Blocks.Webhook_sendFile = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendFile with');


		this.appendValueInput('attachment')
			.setCheck(null);

		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a file with this webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=sendFile');
	}
};

Blockly.Blocks.Webhook_sendCode = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendCode with');


		this.appendValueInput('lang')
			.setCheck(null);

		this.appendValueInput('content')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a code block with this webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=sendCode');
	}
};

Blockly.Blocks.Webhook_sendSlackMessage = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sendSlackMessage with');


		this.appendValueInput('body')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Send a raw slack message with this webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=sendSlackMessage');
	}
};

Blockly.Blocks.Webhook_edit = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('with');
		this.appendDummyInput()
			.appendField('edit with');


		this.appendValueInput('name')
			.setCheck(null);

		this.appendValueInput('avatar')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Edit the webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=edit');
	}
};

Blockly.Blocks.Webhook_delete = {
	init() {
		this.appendValueInput('Webhook')
			.setCheck('Webhook')
			.appendField('with');
		this.appendDummyInput()
			.appendField('delete with');


		this.appendValueInput('reason')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Delete the webhook.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Webhook?scrollTo=delete');
	}
};

Blockly.Blocks.Collection_array = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('array');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates an ordered array of the values of this collection, and caches it internally. The array will only be\nreconstructed if an item is added to or removed from the collection, or if you change the length of the array\nitself. If you don\'t want this caching behaviour, use `Array.from(collection.values())` instead.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=array');
	}
};

Blockly.Blocks.Collection_keyArray = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('keyArray');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates an ordered array of the keys of this collection, and caches it internally. The array will only be\nreconstructed if an item is added to or removed from the collection, or if you change the length of the array\nitself. If you don\'t want this caching behaviour, use `Array.from(collection.keys())` instead.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=keyArray');
	}
};

Blockly.Blocks.Collection_first = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('first with');


		this.appendValueInput('count')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains the first value(s) in this collection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=first');
	}
};

Blockly.Blocks.Collection_firstKey = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('firstKey with');


		this.appendValueInput('count')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains the first key(s) in this collection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=firstKey');
	}
};

Blockly.Blocks.Collection_last = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('last with');


		this.appendValueInput('count')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains the last value(s) in this collection. This relies on {@link Collection#array}, and thus the caching\nmechanism applies here as well.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=last');
	}
};

Blockly.Blocks.Collection_lastKey = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('lastKey with');


		this.appendValueInput('count')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains the last key(s) in this collection. This relies on {@link Collection#keyArray}, and thus the caching\nmechanism applies here as well.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=lastKey');
	}
};

Blockly.Blocks.Collection_random = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('random with');


		this.appendValueInput('count')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains random value(s) from this collection. This relies on {@link Collection#array}, and thus the caching\nmechanism applies here as well.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=random');
	}
};

Blockly.Blocks.Collection_randomKey = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('randomKey with');


		this.appendValueInput('count')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Obtains random key(s) from this collection. This relies on {@link Collection#keyArray}, and thus the caching\nmechanism applies here as well.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=randomKey');
	}
};

Blockly.Blocks.Collection_findAll = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('findAll with');


		this.appendValueInput('prop')
			.setCheck(null);

		this.appendValueInput('value')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Searches for all items where their specified property\'s value is identical to the given value\n(`item[prop] === value`).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=findAll');
	}
};

Blockly.Blocks.Collection_find = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('find with');


		this.appendValueInput('propOrFn')
			.setCheck(null);

		this.appendValueInput('value')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Searches for a single item where its specified property\'s value is identical to the given value\n(`item[prop] === value`), or the given function returns a truthy value. In the latter case, this is identical to\n[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).\n<warn>All collections used in Discord.js are mapped using their `id` property, and if you want to find by id you\nshould use the `get` method. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) for details.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=find');
	}
};

Blockly.Blocks.Collection_findKey = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('findKey with');


		this.appendValueInput('propOrFn')
			.setCheck(null);

		this.appendValueInput('value')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Searches for the key of a single item where its specified property\'s value is identical to the given value\n(`item[prop] === value`), or the given function returns a truthy value. In the latter case, this is identical to\n[Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=findKey');
	}
};

Blockly.Blocks.Collection_exists = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('exists with');


		this.appendValueInput('prop')
			.setCheck(null);

		this.appendValueInput('value')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Searches for the existence of a single item where its specified property\'s value is identical to the given value\n(`item[prop] === value`).\n<warn>Do not use this to check for an item by its ID. Instead, use `collection.has(id)`. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has) for details.</warn>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=exists');
	}
};

Blockly.Blocks.Collection_filter = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('filter with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('thisArg')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Identical to\n[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),\nbut returns a Collection instead of an Array.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=filter');
	}
};

Blockly.Blocks.Collection_filterArray = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('filterArray with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('thisArg')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Identical to\n[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=filterArray');
	}
};

Blockly.Blocks.Collection_map = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('map with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('thisArg')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Identical to\n[Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=map');
	}
};

Blockly.Blocks.Collection_some = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('some with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('thisArg')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Identical to\n[Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=some');
	}
};

Blockly.Blocks.Collection_every = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('every with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('thisArg')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Identical to\n[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=every');
	}
};

Blockly.Blocks.Collection_reduce = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('reduce with');


		this.appendValueInput('fn')
			.setCheck(null);

		this.appendValueInput('initialValue')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Identical to\n[Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=reduce');
	}
};

Blockly.Blocks.Collection_clone = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('clone');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Creates an identical shallow copy of this collection.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=clone');
	}
};

Blockly.Blocks.Collection_concat = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('concat with');


		this.appendValueInput('collections')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Combines this collection with others into a new collection. None of the source collections are modified.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=concat');
	}
};

Blockly.Blocks.Collection_deleteAll = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('deleteAll');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Calls the `delete()` method on all items that have it.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=deleteAll');
	}
};

Blockly.Blocks.Collection_equals = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('equals with');


		this.appendValueInput('collection')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks if this collection shares identical key-value pairings with another.\nThis is different to checking for equality using equal-signs, because\nthe collections may be different objects, but contain the same data.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=equals');
	}
};

Blockly.Blocks.Collection_sort = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('with');
		this.appendDummyInput()
			.appendField('sort with');


		this.appendValueInput('compareFunction')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('The sort() method sorts the elements of a collection in place and returns the collection.\nThe sort is not necessarily stable. The default sort order is according to string Unicode code points.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=sort');
	}
};

Blockly.Blocks.Permissions_constructor = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('Permissions_constructor');
		this.setOutput(true, 'Permissions');
		this.setColour(160);
		this.setTooltip('Data structure that makes it easy to interact with a permission bitfield. All {@link GuildMember}s have a set of\npermissions in their guild, and each channel in the guild may also have {@link PermissionOverwrites} for the member\nthat override their default permissions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions');
	}
};

Blockly.Blocks.Permissions__member = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('get _member of');
		this.setInputsInline(true);
		this.setOutput(true, 'GuildMember');
		this.setColour(230);
		this.setTooltip('Member the permissions are for');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=_member');
	}
};

Blockly.Blocks.Permissions_bitfield = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('get bitfield of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Bitfield of the packed permissions');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=bitfield');
	}
};

Blockly.Blocks.Permissions_raw = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('get raw of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Bitfield of the packed permissions');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=raw');
	}
};

Blockly.Blocks.Permissions_FLAGS = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('get FLAGS of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Numeric permission flags. All available properties:\n- `ADMINISTRATOR` (implicitly has *all* permissions, and bypasses all channel overwrites)\n- `CREATE_INSTANT_INVITE` (create invitations to the guild)\n- `KICK_MEMBERS`\n- `BAN_MEMBERS`\n- `MANAGE_CHANNELS` (edit and reorder channels)\n- `MANAGE_GUILD` (edit the guild information, region, etc.)\n- `ADD_REACTIONS` (add new reactions to messages)\n- `VIEW_AUDIT_LOG`\n- `READ_MESSAGES`\n- `SEND_MESSAGES`\n- `SEND_TTS_MESSAGES`\n- `MANAGE_MESSAGES` (delete messages and reactions)\n- `EMBED_LINKS` (links posted will have a preview embedded)\n- `ATTACH_FILES`\n- `READ_MESSAGE_HISTORY` (view messages that were posted prior to opening Discord)\n- `MENTION_EVERYONE`\n- `USE_EXTERNAL_EMOJIS` (use emojis from different guilds)\n- `EXTERNAL_EMOJIS` **(deprecated)**\n- `CONNECT` (connect to a voice channel)\n- `SPEAK` (speak in a voice channel)\n- `MUTE_MEMBERS` (mute members across all voice channels)\n- `DEAFEN_MEMBERS` (deafen members across all voice channels)\n- `MOVE_MEMBERS` (move members between voice channels)\n- `USE_VAD` (use voice activity detection)\n- `CHANGE_NICKNAME`\n- `MANAGE_NICKNAMES` (change other members\' nicknames)\n- `MANAGE_ROLES`\n- `MANAGE_ROLES_OR_PERMISSIONS` **(deprecated)**\n- `MANAGE_WEBHOOKS`\n- `MANAGE_EMOJIS`');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=FLAGS');
	}
};

Blockly.Blocks.Permissions_ALL = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('get ALL of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Bitfield representing every permission combined');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=ALL');
	}
};

Blockly.Blocks.Permissions_DEFAULT = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('get DEFAULT of');
		this.setInputsInline(true);
		this.setOutput(true, 'Number');
		this.setColour(230);
		this.setTooltip('Bitfield representing the default permissions for users');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=DEFAULT');
	}
};

Blockly.Blocks.Permissions_has = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('has with');


		this.appendValueInput('permission')
			.setCheck(null);

		this.appendValueInput('checkAdmin')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks whether the bitfield has a permission, or multiple permissions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=has');
	}
};

Blockly.Blocks.Permissions_missing = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('missing with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.appendValueInput('checkAdmin')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets all given permissions that are missing from the bitfield.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=missing');
	}
};

Blockly.Blocks.Permissions_add = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('add with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Adds permissions to this one, creating a new instance to represent the new bitfield.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=add');
	}
};

Blockly.Blocks.Permissions_remove = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('remove with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Removes permissions to this one, creating a new instance to represent the new bitfield.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=remove');
	}
};

Blockly.Blocks.Permissions_serialize = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('serialize with');


		this.appendValueInput('checkAdmin')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets an object mapping permission name (like `VIEW_CHANNEL`) to a {@link boolean} indicating whether the\npermission is available.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=serialize');
	}
};

Blockly.Blocks.Permissions_hasPermission = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('hasPermission with');


		this.appendValueInput('permission')
			.setCheck(null);

		this.appendValueInput('explicit')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks whether the user has a certain permission, e.g. `READ_MESSAGES`.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=hasPermission');
	}
};

Blockly.Blocks.Permissions_hasPermissions = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('hasPermissions with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.appendValueInput('explicit')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks whether the user has all specified permissions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=hasPermissions');
	}
};

Blockly.Blocks.Permissions_missingPermissions = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('missingPermissions with');


		this.appendValueInput('permissions')
			.setCheck(null);

		this.appendValueInput('explicit')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Checks whether the user has all specified permissions, and lists any missing permissions.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=missingPermissions');
	}
};

Blockly.Blocks.Permissions_resolve = {
	init() {
		this.appendValueInput('Permissions')
			.setCheck('Permissions')
			.appendField('with');
		this.appendDummyInput()
			.appendField('resolve with');


		this.appendValueInput('permission')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Resolves permissions to their numeric form.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=resolve');
	}
};

Blockly.Blocks.SnowflakeUtil_generate = {
	init() {
		this.appendValueInput('SnowflakeUtil')
			.setCheck('SnowflakeUtil')
			.appendField('with');
		this.appendDummyInput()
			.appendField('generate');

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Generates a Discord snowflake.\n<info>This hardcodes the worker ID as 1 and the process ID as 0.</info>');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SnowflakeUtil?scrollTo=generate');
	}
};

Blockly.Blocks.SnowflakeUtil_deconstruct = {
	init() {
		this.appendValueInput('SnowflakeUtil')
			.setCheck('SnowflakeUtil')
			.appendField('with');
		this.appendDummyInput()
			.appendField('deconstruct with');


		this.appendValueInput('snowflake')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Deconstructs a Discord snowflake.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SnowflakeUtil?scrollTo=deconstruct');
	}
};

Blockly.Blocks.Util_splitMessage = {
	init() {
		this.appendValueInput('Util')
			.setCheck('Util')
			.appendField('with');
		this.appendDummyInput()
			.appendField('splitMessage with');


		this.appendValueInput('text')
			.setCheck(null);

		this.appendValueInput('options')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Splits a string into multiple chunks at a designated character that do not exceed a specific length.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Util?scrollTo=splitMessage');
	}
};

Blockly.Blocks.Util_escapeMarkdown = {
	init() {
		this.appendValueInput('Util')
			.setCheck('Util')
			.appendField('with');
		this.appendDummyInput()
			.appendField('escapeMarkdown with');


		this.appendValueInput('text')
			.setCheck(null);

		this.appendValueInput('onlyCodeBlock')
			.setCheck(null);

		this.appendValueInput('onlyInlineCode')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Escapes any Discord-flavour markdown in a string.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Util?scrollTo=escapeMarkdown');
	}
};

Blockly.Blocks.Util_fetchRecommendedShards = {
	init() {
		this.appendValueInput('Util')
			.setCheck('Util')
			.appendField('with');
		this.appendDummyInput()
			.appendField('fetchRecommendedShards with');


		this.appendValueInput('token')
			.setCheck(null);

		this.appendValueInput('guildsPerShard')
			.setCheck(null);

		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Gets the recommended shard count from Discord.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Util?scrollTo=fetchRecommendedShards');
	}
};
