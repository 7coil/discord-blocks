Blockly.JavaScript.Client_constructor = () => {
	const code = 'new Discord.Client()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_options = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.options`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_shard = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.shard`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_users = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.users`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_guilds = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.guilds`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_channels = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.channels`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_presences = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.presences`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_token = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.token`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_user = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.user`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_readyAt = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.readyAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_broadcasts = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.broadcasts`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_pings = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.pings`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_status = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.status`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_uptime = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.uptime`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_ping = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.ping`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_voiceConnections = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.voiceConnections`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_emojis = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.emojis`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_readyTimestamp = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.readyTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_browser = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.browser`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_createVoiceBroadcast = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Client}.createVoiceBroadcast();
`;
	return code;
};

Blockly.JavaScript.Client_login = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.login(${token});
`;
	return code;
};

Blockly.JavaScript.Client_destroy = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Client}.destroy();
`;
	return code;
};

Blockly.JavaScript.Client_syncGuilds = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const guilds = Blockly.JavaScript.valueToCode(block, 'guilds', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.syncGuilds(${guilds});
`;
	return code;
};

Blockly.JavaScript.Client_fetchUser = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC); const cache = Blockly.JavaScript.valueToCode(block, 'cache', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.fetchUser(${id},${cache});
`;
	return code;
};

Blockly.JavaScript.Client_fetchInvite = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const invite = Blockly.JavaScript.valueToCode(block, 'invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.fetchInvite(${invite});
`;
	return code;
};

Blockly.JavaScript.Client_fetchWebhook = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC); const token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.fetchWebhook(${id},${token});
`;
	return code;
};

Blockly.JavaScript.Client_fetchVoiceRegions = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Client}.fetchVoiceRegions();
`;
	return code;
};

Blockly.JavaScript.Client_sweepMessages = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const lifetime = Blockly.JavaScript.valueToCode(block, 'lifetime', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.sweepMessages(${lifetime});
`;
	return code;
};

Blockly.JavaScript.Client_fetchApplication = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.fetchApplication(${id});
`;
	return code;
};

Blockly.JavaScript.Client_generateInvite = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.generateInvite(${permissions});
`;
	return code;
};

Blockly.JavaScript.Client_setTimeout = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC); const args = Blockly.JavaScript.valueToCode(block, 'args', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.setTimeout(${fn},${delay},${args});
`;
	return code;
};

Blockly.JavaScript.Client_clearTimeout = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const timeout = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.clearTimeout(${timeout});
`;
	return code;
};

Blockly.JavaScript.Client_setInterval = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC); const args = Blockly.JavaScript.valueToCode(block, 'args', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.setInterval(${fn},${delay},${args});
`;
	return code;
};

Blockly.JavaScript.Client_clearInterval = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const interval = Blockly.JavaScript.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.clearInterval(${interval});
`;
	return code;
};

Blockly.JavaScript.Client_channelUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldChannel = block.getFieldValue('oldChannel'); const newChannel = block.getFieldValue('newChannel');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('channelUpdate', (${oldChannel},${newChannel}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildUnavailable = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = block.getFieldValue('guild');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildUnavailable', (${guild}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_emojiCreate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const emoji = block.getFieldValue('emoji');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('emojiCreate', (${emoji}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_emojiDelete = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const emoji = block.getFieldValue('emoji');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('emojiDelete', (${emoji}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_emojiUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldEmoji = block.getFieldValue('oldEmoji'); const newEmoji = block.getFieldValue('newEmoji');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('emojiUpdate', (${oldEmoji},${newEmoji}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildMemberRemove = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const member = block.getFieldValue('member');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildMemberRemove', (${member}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_roleCreate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const role = block.getFieldValue('role');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('roleCreate', (${role}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_roleDelete = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const role = block.getFieldValue('role');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('roleDelete', (${role}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_roleUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldRole = block.getFieldValue('oldRole'); const newRole = block.getFieldValue('newRole');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('roleUpdate', (${oldRole},${newRole}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldGuild = block.getFieldValue('oldGuild'); const newGuild = block.getFieldValue('newGuild');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildUpdate', (${oldGuild},${newGuild}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_messageReactionAdd = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const messageReaction = block.getFieldValue('messageReaction'); const user = block.getFieldValue('user');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('messageReactionAdd', (${messageReaction},${user}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_messageReactionRemove = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const messageReaction = block.getFieldValue('messageReaction'); const user = block.getFieldValue('user');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('messageReactionRemove', (${messageReaction},${user}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_messageReactionRemoveAll = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const message = block.getFieldValue('message');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('messageReactionRemoveAll', (${message}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_messageUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldMessage = block.getFieldValue('oldMessage'); const newMessage = block.getFieldValue('newMessage');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('messageUpdate', (${oldMessage},${newMessage}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_userNoteUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const user = block.getFieldValue('user'); const oldNote = block.getFieldValue('oldNote'); const newNote = block.getFieldValue('newNote');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('userNoteUpdate', (${user},${oldNote},${newNote}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_warn = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const info = block.getFieldValue('info');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('warn', (${info}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_debug = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const info = block.getFieldValue('info');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('debug', (${info}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildCreate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = block.getFieldValue('guild');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildCreate', (${guild}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_channelCreate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = block.getFieldValue('channel');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('channelCreate', (${channel}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_channelDelete = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = block.getFieldValue('channel');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('channelDelete', (${channel}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_channelPinsUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = block.getFieldValue('channel'); const time = block.getFieldValue('time');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('channelPinsUpdate', (${channel},${time}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildBanAdd = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = block.getFieldValue('guild'); const user = block.getFieldValue('user');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildBanAdd', (${guild},${user}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildBanRemove = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = block.getFieldValue('guild'); const user = block.getFieldValue('user');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildBanRemove', (${guild},${user}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildDelete = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = block.getFieldValue('guild');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildDelete', (${guild}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildMembersChunk = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const members = block.getFieldValue('members'); const guild = block.getFieldValue('guild');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildMembersChunk', (${members},${guild}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_message = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const message = block.getFieldValue('message');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('message', (${message}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_messageDelete = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const message = block.getFieldValue('message');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('messageDelete', (${message}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_messageDeleteBulk = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const messages = block.getFieldValue('messages');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('messageDeleteBulk', (${messages}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_presenceUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldMember = block.getFieldValue('oldMember'); const newMember = block.getFieldValue('newMember');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('presenceUpdate', (${oldMember},${newMember}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_userUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldUser = block.getFieldValue('oldUser'); const newUser = block.getFieldValue('newUser');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('userUpdate', (${oldUser},${newUser}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildMemberAvailable = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const member = block.getFieldValue('member');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildMemberAvailable', (${member}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_resume = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const replayed = block.getFieldValue('replayed');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('resume', (${replayed}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_typingStart = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = block.getFieldValue('channel'); const user = block.getFieldValue('user');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('typingStart', (${channel},${user}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_typingStop = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = block.getFieldValue('channel'); const user = block.getFieldValue('user');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('typingStop', (${channel},${user}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_clientUserGuildSettingsUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const clientUserGuildSettings = block.getFieldValue('clientUserGuildSettings');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('clientUserGuildSettingsUpdate', (${clientUserGuildSettings}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_clientUserSettingsUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const clientUserSettings = block.getFieldValue('clientUserSettings');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('clientUserSettingsUpdate', (${clientUserSettings}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_voiceStateUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldMember = block.getFieldValue('oldMember'); const newMember = block.getFieldValue('newMember');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('voiceStateUpdate', (${oldMember},${newMember}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_ready = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('ready', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_reconnecting = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('reconnecting', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_error = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const error = block.getFieldValue('error');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('error', (${error}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_disconnect = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const event = block.getFieldValue('event');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('disconnect', (${event}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildMemberAdd = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const member = block.getFieldValue('member');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildMemberAdd', (${member}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildMemberUpdate = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const oldMember = block.getFieldValue('oldMember'); const newMember = block.getFieldValue('newMember');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildMemberUpdate', (${oldMember},${newMember}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Client_guildMemberSpeaking = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const member = block.getFieldValue('member'); const speaking = block.getFieldValue('speaking');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Client}.on('guildMemberSpeaking', (${member},${speaking}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.DiscordAPIError_code = (block) => {
	const DiscordAPIError = Blockly.JavaScript.valueToCode(block, 'DiscordAPIError', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DiscordAPIError}.code`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.StreamDispatcher_player = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.player`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.StreamDispatcher_stream = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.stream`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.StreamDispatcher_paused = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.paused`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.StreamDispatcher_destroyed = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.destroyed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.StreamDispatcher_passes = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.passes`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.StreamDispatcher_time = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.time`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.StreamDispatcher_totalStreamTime = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.totalStreamTime`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.StreamDispatcher_pause = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${StreamDispatcher}.pause();
`;
	return code;
};

Blockly.JavaScript.StreamDispatcher_resume = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${StreamDispatcher}.resume();
`;
	return code;
};

Blockly.JavaScript.StreamDispatcher_end = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.end(${reason});
`;
	return code;
};

Blockly.JavaScript.StreamDispatcher_setBitrate = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const bitrate = Blockly.JavaScript.valueToCode(block, 'bitrate', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${StreamDispatcher}.setBitrate(${bitrate});
`;
	return code;
};

Blockly.JavaScript.StreamDispatcher_speaking = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const value = block.getFieldValue('value');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${StreamDispatcher}.on('speaking', (${value}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.StreamDispatcher_debug = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const info = block.getFieldValue('info');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${StreamDispatcher}.on('debug', (${info}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.StreamDispatcher_start = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${StreamDispatcher}.on('start', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.StreamDispatcher_end = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = block.getFieldValue('reason');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${StreamDispatcher}.on('end', (${reason}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.StreamDispatcher_error = (block) => {
	const StreamDispatcher = Blockly.JavaScript.valueToCode(block, 'StreamDispatcher', Blockly.JavaScript.ORDER_ATOMIC);
	const error = block.getFieldValue('error');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${StreamDispatcher}.on('error', (${error}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceReceiver_destroyed = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceReceiver}.destroyed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceReceiver_voiceConnection = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceReceiver}.voiceConnection`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceReceiver_recreate = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceReceiver}.recreate();
`;
	return code;
};

Blockly.JavaScript.VoiceReceiver_destroy = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceReceiver}.destroy();
`;
	return code;
};

Blockly.JavaScript.VoiceReceiver_createOpusStream = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceReceiver}.createOpusStream(${user});
`;
	return code;
};

Blockly.JavaScript.VoiceReceiver_createPCMStream = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceReceiver}.createPCMStream(${user});
`;
	return code;
};

Blockly.JavaScript.VoiceReceiver_warn = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = block.getFieldValue('reason'); const message = block.getFieldValue('message');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceReceiver}.on('warn', (${reason},${message}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceReceiver_opus = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);
	const user = block.getFieldValue('user'); const buffer = block.getFieldValue('buffer');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceReceiver}.on('opus', (${user},${buffer}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceReceiver_pcm = (block) => {
	const VoiceReceiver = Blockly.JavaScript.valueToCode(block, 'VoiceReceiver', Blockly.JavaScript.ORDER_ATOMIC);
	const user = block.getFieldValue('user'); const buffer = block.getFieldValue('buffer');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceReceiver}.on('pcm', (${user},${buffer}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VolumeInterface_volume = (block) => {
	const VolumeInterface = Blockly.JavaScript.valueToCode(block, 'VolumeInterface', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VolumeInterface}.volume`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VolumeInterface_volumeDecibels = (block) => {
	const VolumeInterface = Blockly.JavaScript.valueToCode(block, 'VolumeInterface', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VolumeInterface}.volumeDecibels`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VolumeInterface_volumeLogarithmic = (block) => {
	const VolumeInterface = Blockly.JavaScript.valueToCode(block, 'VolumeInterface', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VolumeInterface}.volumeLogarithmic`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VolumeInterface_setVolume = (block) => {
	const VolumeInterface = Blockly.JavaScript.valueToCode(block, 'VolumeInterface', Blockly.JavaScript.ORDER_ATOMIC);
	const volume = Blockly.JavaScript.valueToCode(block, 'volume', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VolumeInterface}.setVolume(${volume});
`;
	return code;
};

Blockly.JavaScript.VolumeInterface_setVolumeDecibels = (block) => {
	const VolumeInterface = Blockly.JavaScript.valueToCode(block, 'VolumeInterface', Blockly.JavaScript.ORDER_ATOMIC);
	const db = Blockly.JavaScript.valueToCode(block, 'db', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VolumeInterface}.setVolumeDecibels(${db});
`;
	return code;
};

Blockly.JavaScript.VolumeInterface_setVolumeLogarithmic = (block) => {
	const VolumeInterface = Blockly.JavaScript.valueToCode(block, 'VolumeInterface', Blockly.JavaScript.ORDER_ATOMIC);
	const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VolumeInterface}.setVolumeLogarithmic(${value});
`;
	return code;
};

Blockly.JavaScript.VolumeInterface_volumeChange = (block) => {
	const VolumeInterface = Blockly.JavaScript.valueToCode(block, 'VolumeInterface', Blockly.JavaScript.ORDER_ATOMIC);
	const oldVolume = block.getFieldValue('oldVolume'); const newVolume = block.getFieldValue('newVolume');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VolumeInterface}.on('volumeChange', (${oldVolume},${newVolume}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_client = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceBroadcast_prism = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.prism`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceBroadcast_currentTranscoder = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.currentTranscoder`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceBroadcast_dispatchers = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.dispatchers`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceBroadcast_playStream = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const stream = Blockly.JavaScript.valueToCode(block, 'stream', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.playStream(${stream},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_playFile = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.playFile(${file},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_playConvertedStream = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const stream = Blockly.JavaScript.valueToCode(block, 'stream', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.playConvertedStream(${stream},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_playOpusStream = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const stream = Blockly.JavaScript.valueToCode(block, 'stream', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.playOpusStream(${stream},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_playArbitraryInput = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceBroadcast}.playArbitraryInput(${input},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_pause = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceBroadcast}.pause();
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_resume = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceBroadcast}.resume();
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_end = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceBroadcast}.end();
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_destroy = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceBroadcast}.destroy();
`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_unsubscribe = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const dispatcher = block.getFieldValue('dispatcher');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceBroadcast}.on('unsubscribe', (${dispatcher}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_subscribe = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const dispatcher = block.getFieldValue('dispatcher');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceBroadcast}.on('subscribe', (${dispatcher}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_error = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const error = block.getFieldValue('error');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceBroadcast}.on('error', (${error}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_warn = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);
	const warning = block.getFieldValue('warning');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceBroadcast}.on('warn', (${warning}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceBroadcast_end = (block) => {
	const VoiceBroadcast = Blockly.JavaScript.valueToCode(block, 'VoiceBroadcast', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceBroadcast}.on('end', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_voiceManager = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.voiceManager`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_client = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_prism = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.prism`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_channel = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.channel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_status = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.status`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_speaking = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.speaking`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_receivers = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.receivers`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_player = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.player`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_dispatcher = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.dispatcher`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_sendVoiceStateUpdate = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.sendVoiceStateUpdate(${options});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_setTokenAndEndpoint = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC); const endpoint = Blockly.JavaScript.valueToCode(block, 'endpoint', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.setTokenAndEndpoint(${token},${endpoint});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_setSessionID = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const sessionID = Blockly.JavaScript.valueToCode(block, 'sessionID', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.setSessionID(${sessionID});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_disconnect = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceConnection}.disconnect();
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_playFile = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.playFile(${file},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_playArbitraryInput = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.playArbitraryInput(${input},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_playStream = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const stream = Blockly.JavaScript.valueToCode(block, 'stream', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.playStream(${stream},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_playConvertedStream = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const stream = Blockly.JavaScript.valueToCode(block, 'stream', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.playConvertedStream(${stream},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_playOpusStream = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const stream = Blockly.JavaScript.valueToCode(block, 'stream', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.playOpusStream(${stream},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_playBroadcast = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const broadcast = Blockly.JavaScript.valueToCode(block, 'broadcast', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.playBroadcast(${broadcast},${options});
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_createReceiver = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceConnection}.createReceiver();
`;
	return code;
};

Blockly.JavaScript.VoiceConnection_debug = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const message = block.getFieldValue('message');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('debug', (${message}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_warn = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const warning = block.getFieldValue('warning');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('warn', (${warning}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_newSession = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('newSession', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_authenticated = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('authenticated', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_failed = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const error = block.getFieldValue('error');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('failed', (${error}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_reconnecting = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('reconnecting', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_disconnect = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('disconnect', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_error = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const error = block.getFieldValue('error');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('error', (${error}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_ready = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);

	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('ready', () => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.VoiceConnection_speaking = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const user = block.getFieldValue('user'); const speaking = block.getFieldValue('speaking');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${VoiceConnection}.on('speaking', (${user},${speaking}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.WebhookClient_constructor = () => {
	const code = 'new Discord.WebhookClient()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_options = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.options`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_client = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_name = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_token = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.token`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_avatar = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.avatar`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_id = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_guildID = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.guildID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_channelID = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.channelID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_owner = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.owner`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_setTimeout = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC); const args = Blockly.JavaScript.valueToCode(block, 'args', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.setTimeout(${fn},${delay},${args});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_clearTimeout = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const timeout = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.clearTimeout(${timeout});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_setInterval = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC); const args = Blockly.JavaScript.valueToCode(block, 'args', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.setInterval(${fn},${delay},${args});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_clearInterval = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const interval = Blockly.JavaScript.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.clearInterval(${interval});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_destroy = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${WebhookClient}.destroy();
`;
	return code;
};

Blockly.JavaScript.WebhookClient_send = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.send(${content},${options});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_sendMessage = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.sendMessage(${content},${options});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_sendFile = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.sendFile(${attachment},${name},${content},${options});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_sendCode = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.sendCode(${lang},${content},${options});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_sendSlackMessage = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const body = Blockly.JavaScript.valueToCode(block, 'body', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.sendSlackMessage(${body});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_edit = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const avatar = Blockly.JavaScript.valueToCode(block, 'avatar', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.edit(${name},${avatar});
`;
	return code;
};

Blockly.JavaScript.WebhookClient_delete = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.delete(${reason});
`;
	return code;
};

Blockly.JavaScript.Shard_constructor = () => {
	const code = 'new Discord.Shard()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Shard_manager = (block) => {
	const Shard = Blockly.JavaScript.valueToCode(block, 'Shard', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Shard}.manager`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Shard_id = (block) => {
	const Shard = Blockly.JavaScript.valueToCode(block, 'Shard', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Shard}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Shard_env = (block) => {
	const Shard = Blockly.JavaScript.valueToCode(block, 'Shard', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Shard}.env`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Shard_process = (block) => {
	const Shard = Blockly.JavaScript.valueToCode(block, 'Shard', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Shard}.process`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Shard_send = (block) => {
	const Shard = Blockly.JavaScript.valueToCode(block, 'Shard', Blockly.JavaScript.ORDER_ATOMIC);
	const message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Shard}.send(${message});
`;
	return code;
};

Blockly.JavaScript.Shard_fetchClientValue = (block) => {
	const Shard = Blockly.JavaScript.valueToCode(block, 'Shard', Blockly.JavaScript.ORDER_ATOMIC);
	const prop = Blockly.JavaScript.valueToCode(block, 'prop', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Shard}.fetchClientValue(${prop});
`;
	return code;
};

Blockly.JavaScript.Shard_eval = (block) => {
	const Shard = Blockly.JavaScript.valueToCode(block, 'Shard', Blockly.JavaScript.ORDER_ATOMIC);
	const script = Blockly.JavaScript.valueToCode(block, 'script', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Shard}.eval(${script});
`;
	return code;
};

Blockly.JavaScript.ShardClientUtil_constructor = () => {
	const code = 'new Discord.ShardClientUtil()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardClientUtil_id = (block) => {
	const ShardClientUtil = Blockly.JavaScript.valueToCode(block, 'ShardClientUtil', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardClientUtil}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardClientUtil_count = (block) => {
	const ShardClientUtil = Blockly.JavaScript.valueToCode(block, 'ShardClientUtil', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardClientUtil}.count`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardClientUtil_send = (block) => {
	const ShardClientUtil = Blockly.JavaScript.valueToCode(block, 'ShardClientUtil', Blockly.JavaScript.ORDER_ATOMIC);
	const message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardClientUtil}.send(${message});
`;
	return code;
};

Blockly.JavaScript.ShardClientUtil_fetchClientValues = (block) => {
	const ShardClientUtil = Blockly.JavaScript.valueToCode(block, 'ShardClientUtil', Blockly.JavaScript.ORDER_ATOMIC);
	const prop = Blockly.JavaScript.valueToCode(block, 'prop', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardClientUtil}.fetchClientValues(${prop});
`;
	return code;
};

Blockly.JavaScript.ShardClientUtil_broadcastEval = (block) => {
	const ShardClientUtil = Blockly.JavaScript.valueToCode(block, 'ShardClientUtil', Blockly.JavaScript.ORDER_ATOMIC);
	const script = Blockly.JavaScript.valueToCode(block, 'script', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardClientUtil}.broadcastEval(${script});
`;
	return code;
};

Blockly.JavaScript.ShardClientUtil_singleton = (block) => {
	const ShardClientUtil = Blockly.JavaScript.valueToCode(block, 'ShardClientUtil', Blockly.JavaScript.ORDER_ATOMIC);
	const client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardClientUtil}.singleton(${client});
`;
	return code;
};

Blockly.JavaScript.ShardingManager_constructor = () => {
	const code = 'new Discord.ShardingManager()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardingManager_file = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.file`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardingManager_totalShards = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.totalShards`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardingManager_respawn = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.respawn`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardingManager_shardArgs = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.shardArgs`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardingManager_token = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.token`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardingManager_shards = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.shards`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ShardingManager_createShard = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.createShard(${id});
`;
	return code;
};

Blockly.JavaScript.ShardingManager_spawn = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const amount = Blockly.JavaScript.valueToCode(block, 'amount', Blockly.JavaScript.ORDER_ATOMIC); const delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.spawn(${amount},${delay});
`;
	return code;
};

Blockly.JavaScript.ShardingManager_broadcast = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.broadcast(${message});
`;
	return code;
};

Blockly.JavaScript.ShardingManager_broadcastEval = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const script = Blockly.JavaScript.valueToCode(block, 'script', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.broadcastEval(${script});
`;
	return code;
};

Blockly.JavaScript.ShardingManager_fetchClientValues = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const prop = Blockly.JavaScript.valueToCode(block, 'prop', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ShardingManager}.fetchClientValues(${prop});
`;
	return code;
};

Blockly.JavaScript.ShardingManager_message = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const shard = block.getFieldValue('shard'); const message = block.getFieldValue('message');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${ShardingManager}.on('message', (${shard},${message}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.ShardingManager_launch = (block) => {
	const ShardingManager = Blockly.JavaScript.valueToCode(block, 'ShardingManager', Blockly.JavaScript.ORDER_ATOMIC);
	const shard = block.getFieldValue('shard');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${ShardingManager}.on('launch', (${shard}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Attachment_constructor = () => {
	const code = 'new Discord.Attachment()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Attachment_name = (block) => {
	const Attachment = Blockly.JavaScript.valueToCode(block, 'Attachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Attachment}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Attachment_attachment = (block) => {
	const Attachment = Blockly.JavaScript.valueToCode(block, 'Attachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Attachment}.attachment`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Attachment_setAttachment = (block) => {
	const Attachment = Blockly.JavaScript.valueToCode(block, 'Attachment', Blockly.JavaScript.ORDER_ATOMIC);
	const file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Attachment}.setAttachment(${file},${name});
`;
	return code;
};

Blockly.JavaScript.Attachment_setFile = (block) => {
	const Attachment = Blockly.JavaScript.valueToCode(block, 'Attachment', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Attachment}.setFile(${attachment});
`;
	return code;
};

Blockly.JavaScript.Attachment_setName = (block) => {
	const Attachment = Blockly.JavaScript.valueToCode(block, 'Attachment', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Attachment}.setName(${name});
`;
	return code;
};

Blockly.JavaScript.Channel_client = (block) => {
	const Channel = Blockly.JavaScript.valueToCode(block, 'Channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Channel}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Channel_type = (block) => {
	const Channel = Blockly.JavaScript.valueToCode(block, 'Channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Channel}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Channel_id = (block) => {
	const Channel = Blockly.JavaScript.valueToCode(block, 'Channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Channel}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Channel_createdTimestamp = (block) => {
	const Channel = Blockly.JavaScript.valueToCode(block, 'Channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Channel}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Channel_createdAt = (block) => {
	const Channel = Blockly.JavaScript.valueToCode(block, 'Channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Channel}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Channel_delete = (block) => {
	const Channel = Blockly.JavaScript.valueToCode(block, 'Channel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Channel}.delete();
`;
	return code;
};

Blockly.JavaScript.ClientUser_verified = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.verified`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_email = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.email`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_friends = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.friends`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_blocked = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.blocked`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_notes = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.notes`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_premium = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.premium`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_mfaEnabled = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.mfaEnabled`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_mobile = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.mobile`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_settings = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.settings`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_guildSettings = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.guildSettings`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_client = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_id = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_username = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.username`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_discriminator = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.discriminator`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_avatar = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.avatar`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_bot = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.bot`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_lastMessageID = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.lastMessageID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_lastMessage = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.lastMessage`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_createdTimestamp = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_createdAt = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_presence = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.presence`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_avatarURL = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.avatarURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_defaultAvatarURL = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.defaultAvatarURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_displayAvatarURL = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.displayAvatarURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_tag = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.tag`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_note = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.note`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_dmChannel = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.dmChannel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUser_setUsername = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const username = Blockly.JavaScript.valueToCode(block, 'username', Blockly.JavaScript.ORDER_ATOMIC); const password = Blockly.JavaScript.valueToCode(block, 'password', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setUsername(${username},${password});
`;
	return code;
};

Blockly.JavaScript.ClientUser_setEmail = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const email = Blockly.JavaScript.valueToCode(block, 'email', Blockly.JavaScript.ORDER_ATOMIC); const password = Blockly.JavaScript.valueToCode(block, 'password', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setEmail(${email},${password});
`;
	return code;
};

Blockly.JavaScript.ClientUser_setPassword = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const newPassword = Blockly.JavaScript.valueToCode(block, 'newPassword', Blockly.JavaScript.ORDER_ATOMIC); const oldPassword = Blockly.JavaScript.valueToCode(block, 'oldPassword', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setPassword(${newPassword},${oldPassword});
`;
	return code;
};

Blockly.JavaScript.ClientUser_setAvatar = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const avatar = Blockly.JavaScript.valueToCode(block, 'avatar', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setAvatar(${avatar});
`;
	return code;
};

Blockly.JavaScript.ClientUser_setPresence = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setPresence(${data});
`;
	return code;
};

Blockly.JavaScript.ClientUser_setStatus = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setStatus(${status});
`;
	return code;
};

Blockly.JavaScript.ClientUser_setGame = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const game = Blockly.JavaScript.valueToCode(block, 'game', Blockly.JavaScript.ORDER_ATOMIC); const streamingURL = Blockly.JavaScript.valueToCode(block, 'streamingURL', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setGame(${game},${streamingURL});
`;
	return code;
};

Blockly.JavaScript.ClientUser_setAFK = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const afk = Blockly.JavaScript.valueToCode(block, 'afk', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setAFK(${afk});
`;
	return code;
};

Blockly.JavaScript.ClientUser_fetchMentions = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.fetchMentions(${options});
`;
	return code;
};

Blockly.JavaScript.ClientUser_addFriend = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.addFriend(${user});
`;
	return code;
};

Blockly.JavaScript.ClientUser_removeFriend = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.removeFriend(${user});
`;
	return code;
};

Blockly.JavaScript.ClientUser_createGuild = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const region = Blockly.JavaScript.valueToCode(block, 'region', Blockly.JavaScript.ORDER_ATOMIC); const icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.createGuild(${name},${region},${icon});
`;
	return code;
};

Blockly.JavaScript.ClientUser_createGroupDM = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const recipients = Blockly.JavaScript.valueToCode(block, 'recipients', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.createGroupDM(${recipients});
`;
	return code;
};

Blockly.JavaScript.ClientUser_acceptInvite = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const invite = Blockly.JavaScript.valueToCode(block, 'invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.acceptInvite(${invite});
`;
	return code;
};

Blockly.JavaScript.ClientUser_typingIn = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.typingIn(${channel});
`;
	return code;
};

Blockly.JavaScript.ClientUser_typingSinceIn = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.typingSinceIn(${channel});
`;
	return code;
};

Blockly.JavaScript.ClientUser_typingDurationIn = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.typingDurationIn(${channel});
`;
	return code;
};

Blockly.JavaScript.ClientUser_createDM = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${ClientUser}.createDM();
`;
	return code;
};

Blockly.JavaScript.ClientUser_deleteDM = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${ClientUser}.deleteDM();
`;
	return code;
};

Blockly.JavaScript.ClientUser_block = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${ClientUser}.block();
`;
	return code;
};

Blockly.JavaScript.ClientUser_unblock = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${ClientUser}.unblock();
`;
	return code;
};

Blockly.JavaScript.ClientUser_fetchProfile = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${ClientUser}.fetchProfile();
`;
	return code;
};

Blockly.JavaScript.ClientUser_setNote = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const note = Blockly.JavaScript.valueToCode(block, 'note', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.setNote(${note});
`;
	return code;
};

Blockly.JavaScript.ClientUser_equals = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.equals(${user});
`;
	return code;
};

Blockly.JavaScript.ClientUser_toString = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${ClientUser}.toString();
`;
	return code;
};

Blockly.JavaScript.ClientUser_send = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.send(${content},${options});
`;
	return code;
};

Blockly.JavaScript.ClientUser_sendMessage = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.sendMessage(${content},${options});
`;
	return code;
};

Blockly.JavaScript.ClientUser_sendEmbed = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const embed = Blockly.JavaScript.valueToCode(block, 'embed', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.sendEmbed(${embed},${content},${options});
`;
	return code;
};

Blockly.JavaScript.ClientUser_sendFile = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.sendFile(${attachment},${name},${content},${options});
`;
	return code;
};

Blockly.JavaScript.ClientUser_sendCode = (block) => {
	const ClientUser = Blockly.JavaScript.valueToCode(block, 'ClientUser', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUser}.sendCode(${lang},${content},${options});
`;
	return code;
};

Blockly.JavaScript.ClientUserChannelOverride_muted = (block) => {
	const ClientUserChannelOverride = Blockly.JavaScript.valueToCode(block, 'ClientUserChannelOverride', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserChannelOverride}.muted`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserChannelOverride_messageNotifications = (block) => {
	const ClientUserChannelOverride = Blockly.JavaScript.valueToCode(block, 'ClientUserChannelOverride', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserChannelOverride}.messageNotifications`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserChannelOverride_patch = (block) => {
	const ClientUserChannelOverride = Blockly.JavaScript.valueToCode(block, 'ClientUserChannelOverride', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserChannelOverride}.patch(${data});
`;
	return code;
};

Blockly.JavaScript.ClientUserGuildSettings_client = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserGuildSettings_guildID = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.guildID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserGuildSettings_mobilePush = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.mobilePush`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserGuildSettings_messageNotifications = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.messageNotifications`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserGuildSettings_muted = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.muted`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserGuildSettings_suppressEveryone = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.suppressEveryone`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserGuildSettings_channelOverrides = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.channelOverrides`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserGuildSettings_patch = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.patch(${data});
`;
	return code;
};

Blockly.JavaScript.ClientUserGuildSettings_update = (block) => {
	const ClientUserGuildSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserGuildSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserGuildSettings}.update(${name},${value});
`;
	return code;
};

Blockly.JavaScript.ClientUserSettings_convertEmoticons = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.convertEmoticons`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_defaultGuildsRestricted = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.defaultGuildsRestricted`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_detectPlatformAccounts = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.detectPlatformAccounts`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_developerMode = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.developerMode`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_enableTTSCommand = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.enableTTSCommand`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_theme = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.theme`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_status = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.status`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_showCurrentGame = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.showCurrentGame`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_inlineAttachmentMedia = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.inlineAttachmentMedia`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_inlineEmbedMedia = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.inlineEmbedMedia`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_locale = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.locale`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_messageDisplayCompact = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.messageDisplayCompact`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_renderReactions = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.renderReactions`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_guildPositions = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.guildPositions`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_restrictedGuilds = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.restrictedGuilds`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_explicitContentFilter = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.explicitContentFilter`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_friendSources = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.friendSources`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientUserSettings_patch = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.patch(${data});
`;
	return code;
};

Blockly.JavaScript.ClientUserSettings_update = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.update(${name},${value});
`;
	return code;
};

Blockly.JavaScript.ClientUserSettings_setGuildPosition = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = Blockly.JavaScript.valueToCode(block, 'guild', Blockly.JavaScript.ORDER_ATOMIC); const position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC); const relative = Blockly.JavaScript.valueToCode(block, 'relative', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.setGuildPosition(${guild},${position},${relative});
`;
	return code;
};

Blockly.JavaScript.ClientUserSettings_addRestrictedGuild = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = Blockly.JavaScript.valueToCode(block, 'guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.addRestrictedGuild(${guild});
`;
	return code;
};

Blockly.JavaScript.ClientUserSettings_removeRestrictedGuild = (block) => {
	const ClientUserSettings = Blockly.JavaScript.valueToCode(block, 'ClientUserSettings', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = Blockly.JavaScript.valueToCode(block, 'guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientUserSettings}.removeRestrictedGuild(${guild});
`;
	return code;
};

Blockly.JavaScript.DMChannel_recipient = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.recipient`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_messages = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.messages`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_lastMessageID = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.lastMessageID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_typing = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.typing`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_typingCount = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.typingCount`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_client = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_type = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_id = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_createdTimestamp = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_createdAt = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DMChannel_toString = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${DMChannel}.toString();
`;
	return code;
};

Blockly.JavaScript.DMChannel_send = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.send(${content},${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_fetchMessage = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const messageID = Blockly.JavaScript.valueToCode(block, 'messageID', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.fetchMessage(${messageID});
`;
	return code;
};

Blockly.JavaScript.DMChannel_fetchMessages = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.fetchMessages(${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_fetchPinnedMessages = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${DMChannel}.fetchPinnedMessages();
`;
	return code;
};

Blockly.JavaScript.DMChannel_search = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.search(${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_startTyping = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.startTyping(${count});
`;
	return code;
};

Blockly.JavaScript.DMChannel_stopTyping = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const force = Blockly.JavaScript.valueToCode(block, 'force', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.stopTyping(${force});
`;
	return code;
};

Blockly.JavaScript.DMChannel_createCollector = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.createCollector(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_awaitMessages = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.awaitMessages(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_acknowledge = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${DMChannel}.acknowledge();
`;
	return code;
};

Blockly.JavaScript.DMChannel_sendMessage = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.sendMessage(${content},${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_sendEmbed = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const embed = Blockly.JavaScript.valueToCode(block, 'embed', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.sendEmbed(${embed},${content},${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_sendFiles = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const files = Blockly.JavaScript.valueToCode(block, 'files', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.sendFiles(${files},${content},${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_sendFile = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.sendFile(${attachment},${name},${content},${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_sendCode = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DMChannel}.sendCode(${lang},${content},${options});
`;
	return code;
};

Blockly.JavaScript.DMChannel_delete = (block) => {
	const DMChannel = Blockly.JavaScript.valueToCode(block, 'DMChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${DMChannel}.delete();
`;
	return code;
};

Blockly.JavaScript.Emoji_client = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_guild = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_id = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_name = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_requiresColons = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.requiresColons`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_managed = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.managed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_createdTimestamp = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_createdAt = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_roles = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.roles`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_url = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_identifier = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.identifier`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Emoji_edit = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.edit(${data},${reason});
`;
	return code;
};

Blockly.JavaScript.Emoji_setName = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.setName(${name},${reason});
`;
	return code;
};

Blockly.JavaScript.Emoji_addRestrictedRole = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.addRestrictedRole(${role});
`;
	return code;
};

Blockly.JavaScript.Emoji_addRestrictedRoles = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const roles = Blockly.JavaScript.valueToCode(block, 'roles', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.addRestrictedRoles(${roles});
`;
	return code;
};

Blockly.JavaScript.Emoji_removeRestrictedRole = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.removeRestrictedRole(${role});
`;
	return code;
};

Blockly.JavaScript.Emoji_removeRestrictedRoles = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const roles = Blockly.JavaScript.valueToCode(block, 'roles', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.removeRestrictedRoles(${roles});
`;
	return code;
};

Blockly.JavaScript.Emoji_toString = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Emoji}.toString();
`;
	return code;
};

Blockly.JavaScript.Emoji_equals = (block) => {
	const Emoji = Blockly.JavaScript.valueToCode(block, 'Emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const other = Blockly.JavaScript.valueToCode(block, 'other', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Emoji}.equals(${other});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_name = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_icon = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.icon`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_ownerID = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.ownerID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_managed = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.managed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_applicationID = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.applicationID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_nicks = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.nicks`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_recipients = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.recipients`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_owner = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.owner`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_iconURL = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.iconURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_messages = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.messages`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_lastMessageID = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.lastMessageID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_typing = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.typing`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_typingCount = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.typingCount`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_client = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_type = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_id = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_createdTimestamp = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_createdAt = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GroupDMChannel_equals = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.equals(${channel});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_addUser = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const accessTokenOrID = Blockly.JavaScript.valueToCode(block, 'accessTokenOrID', Blockly.JavaScript.ORDER_ATOMIC); const nick = Blockly.JavaScript.valueToCode(block, 'nick', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.addUser(${accessTokenOrID},${nick});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_setIcon = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.setIcon(${icon});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_toString = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GroupDMChannel}.toString();
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_send = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.send(${content},${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_fetchMessage = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const messageID = Blockly.JavaScript.valueToCode(block, 'messageID', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.fetchMessage(${messageID});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_fetchMessages = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.fetchMessages(${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_fetchPinnedMessages = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GroupDMChannel}.fetchPinnedMessages();
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_search = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.search(${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_startTyping = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.startTyping(${count});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_stopTyping = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const force = Blockly.JavaScript.valueToCode(block, 'force', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.stopTyping(${force});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_createCollector = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.createCollector(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_awaitMessages = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.awaitMessages(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_acknowledge = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GroupDMChannel}.acknowledge();
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_sendMessage = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.sendMessage(${content},${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_sendEmbed = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const embed = Blockly.JavaScript.valueToCode(block, 'embed', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.sendEmbed(${embed},${content},${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_sendFiles = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const files = Blockly.JavaScript.valueToCode(block, 'files', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.sendFiles(${files},${content},${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_sendFile = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.sendFile(${attachment},${name},${content},${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_sendCode = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GroupDMChannel}.sendCode(${lang},${content},${options});
`;
	return code;
};

Blockly.JavaScript.GroupDMChannel_delete = (block) => {
	const GroupDMChannel = Blockly.JavaScript.valueToCode(block, 'GroupDMChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GroupDMChannel}.delete();
`;
	return code;
};

Blockly.JavaScript.Guild_client = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_members = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.members`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_channels = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.channels`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_roles = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.roles`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_presences = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.presences`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_available = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.available`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_id = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_name = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_icon = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.icon`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_splash = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.splash`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_region = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.region`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_memberCount = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.memberCount`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_large = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.large`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_features = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.features`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_applicationID = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.applicationID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_afkTimeout = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.afkTimeout`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_afkChannelID = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.afkChannelID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_systemChannelID = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.systemChannelID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_embedEnabled = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.embedEnabled`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_verificationLevel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.verificationLevel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_explicitContentFilter = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.explicitContentFilter`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_joinedTimestamp = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.joinedTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_ownerID = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.ownerID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_emojis = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.emojis`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_createdTimestamp = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_createdAt = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_joinedAt = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.joinedAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_iconURL = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.iconURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_nameAcronym = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.nameAcronym`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_splashURL = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.splashURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_owner = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.owner`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_afkChannel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.afkChannel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_systemChannel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.systemChannel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_voiceConnection = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.voiceConnection`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_position = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.position`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_muted = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.muted`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_messageNotifications = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.messageNotifications`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_mobilePush = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.mobilePush`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_suppressEveryone = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.suppressEveryone`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_defaultRole = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.defaultRole`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_me = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.me`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_defaultChannel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.defaultChannel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_member = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.member(${user});
`;
	return code;
};

Blockly.JavaScript.Guild_fetchBans = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.fetchBans();
`;
	return code;
};

Blockly.JavaScript.Guild_fetchInvites = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.fetchInvites();
`;
	return code;
};

Blockly.JavaScript.Guild_fetchWebhooks = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.fetchWebhooks();
`;
	return code;
};

Blockly.JavaScript.Guild_fetchVoiceRegions = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.fetchVoiceRegions();
`;
	return code;
};

Blockly.JavaScript.Guild_fetchAuditLogs = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.fetchAuditLogs(${options});
`;
	return code;
};

Blockly.JavaScript.Guild_addMember = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.addMember(${user},${options});
`;
	return code;
};

Blockly.JavaScript.Guild_fetchMember = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC); const cache = Blockly.JavaScript.valueToCode(block, 'cache', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.fetchMember(${user},${cache});
`;
	return code;
};

Blockly.JavaScript.Guild_fetchMembers = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const query = Blockly.JavaScript.valueToCode(block, 'query', Blockly.JavaScript.ORDER_ATOMIC); const limit = Blockly.JavaScript.valueToCode(block, 'limit', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.fetchMembers(${query},${limit});
`;
	return code;
};

Blockly.JavaScript.Guild_search = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.search(${options});
`;
	return code;
};

Blockly.JavaScript.Guild_edit = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.edit(${data},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setExplicitContentFilter = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const explicitContentFilter = Blockly.JavaScript.valueToCode(block, 'explicitContentFilter', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setExplicitContentFilter(${explicitContentFilter},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setName = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setName(${name},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setRegion = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const region = Blockly.JavaScript.valueToCode(block, 'region', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setRegion(${region},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setVerificationLevel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const verificationLevel = Blockly.JavaScript.valueToCode(block, 'verificationLevel', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setVerificationLevel(${verificationLevel},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setAFKChannel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const afkChannel = Blockly.JavaScript.valueToCode(block, 'afkChannel', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setAFKChannel(${afkChannel},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setSystemChannel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const systemChannel = Blockly.JavaScript.valueToCode(block, 'systemChannel', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setSystemChannel(${systemChannel},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setAFKTimeout = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const afkTimeout = Blockly.JavaScript.valueToCode(block, 'afkTimeout', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setAFKTimeout(${afkTimeout},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setIcon = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setIcon(${icon},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setOwner = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const owner = Blockly.JavaScript.valueToCode(block, 'owner', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setOwner(${owner},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setSplash = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const splash = Blockly.JavaScript.valueToCode(block, 'splash', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setSplash(${splash},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setPosition = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC); const relative = Blockly.JavaScript.valueToCode(block, 'relative', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setPosition(${position},${relative});
`;
	return code;
};

Blockly.JavaScript.Guild_acknowledge = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.acknowledge();
`;
	return code;
};

Blockly.JavaScript.Guild_allowDMs = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const allow = Blockly.JavaScript.valueToCode(block, 'allow', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.allowDMs(${allow});
`;
	return code;
};

Blockly.JavaScript.Guild_ban = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.ban(${user},${options});
`;
	return code;
};

Blockly.JavaScript.Guild_unban = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.unban(${user},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_pruneMembers = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const days = Blockly.JavaScript.valueToCode(block, 'days', Blockly.JavaScript.ORDER_ATOMIC); const dry = Blockly.JavaScript.valueToCode(block, 'dry', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.pruneMembers(${days},${dry},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_sync = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.sync();
`;
	return code;
};

Blockly.JavaScript.Guild_createChannel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC); const overwrites = Blockly.JavaScript.valueToCode(block, 'overwrites', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.createChannel(${name},${type},${overwrites},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_setChannelPositions = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const channelPositions = Blockly.JavaScript.valueToCode(block, 'channelPositions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setChannelPositions(${channelPositions});
`;
	return code;
};

Blockly.JavaScript.Guild_createRole = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.createRole(${data},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_createEmoji = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const roles = Blockly.JavaScript.valueToCode(block, 'roles', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.createEmoji(${attachment},${name},${roles},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_deleteEmoji = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const emoji = Blockly.JavaScript.valueToCode(block, 'emoji', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.deleteEmoji(${emoji},${reason});
`;
	return code;
};

Blockly.JavaScript.Guild_leave = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.leave();
`;
	return code;
};

Blockly.JavaScript.Guild_delete = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.delete();
`;
	return code;
};

Blockly.JavaScript.Guild_equals = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const guild = Blockly.JavaScript.valueToCode(block, 'guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.equals(${guild});
`;
	return code;
};

Blockly.JavaScript.Guild_toString = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Guild}.toString();
`;
	return code;
};

Blockly.JavaScript.Guild_setRolePosition = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC); const position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC); const relative = Blockly.JavaScript.valueToCode(block, 'relative', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setRolePosition(${role},${position},${relative});
`;
	return code;
};

Blockly.JavaScript.Guild_setChannelPosition = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC); const position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC); const relative = Blockly.JavaScript.valueToCode(block, 'relative', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.setChannelPosition(${channel},${position},${relative});
`;
	return code;
};

Blockly.JavaScript.GuildAuditLogs_entries = (block) => {
	const GuildAuditLogs = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogs', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogs}.entries`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogs_build = (block) => {
	const GuildAuditLogs = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogs', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GuildAuditLogs}.build();
`;
	return code;
};

Blockly.JavaScript.GuildAuditLogs_targetType = (block) => {
	const GuildAuditLogs = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogs', Blockly.JavaScript.ORDER_ATOMIC);
	const target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogs}.targetType(${target});
`;
	return code;
};

Blockly.JavaScript.GuildAuditLogs_actionType = (block) => {
	const GuildAuditLogs = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogs', Blockly.JavaScript.ORDER_ATOMIC);
	const action = Blockly.JavaScript.valueToCode(block, 'action', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogs}.actionType(${action});
`;
	return code;
};

Blockly.JavaScript.GuildAuditLogsEntry_targetType = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.targetType`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_actionType = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.actionType`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_action = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.action`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_reason = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.reason`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_executor = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.executor`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_changes = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.changes`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_id = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_extra = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.extra`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_target = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.target`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_createdTimestamp = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogsEntry_createdAt = (block) => {
	const GuildAuditLogsEntry = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogsEntry', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogsEntry}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_guild = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_name = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_position = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.position`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_permissionOverwrites = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.permissionOverwrites`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_calculatedPosition = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.calculatedPosition`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_deletable = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.deletable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_muted = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.muted`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_messageNotifications = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.messageNotifications`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_client = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_type = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_id = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_createdTimestamp = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_createdAt = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildChannel_permissionsFor = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.permissionsFor(${member});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_overwritePermissions = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const userOrRole = Blockly.JavaScript.valueToCode(block, 'userOrRole', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.overwritePermissions(${userOrRole},${options},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_edit = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.edit(${data},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_setName = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.setName(${name},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_setPosition = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC); const relative = Blockly.JavaScript.valueToCode(block, 'relative', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.setPosition(${position},${relative});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_setTopic = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.setTopic(${topic},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_createInvite = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.createInvite(${options},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_clone = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const withPermissions = Blockly.JavaScript.valueToCode(block, 'withPermissions', Blockly.JavaScript.ORDER_ATOMIC); const withTopic = Blockly.JavaScript.valueToCode(block, 'withTopic', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.clone(${name},${withPermissions},${withTopic},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_equals = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildChannel}.equals(${channel});
`;
	return code;
};

Blockly.JavaScript.GuildChannel_toString = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GuildChannel}.toString();
`;
	return code;
};

Blockly.JavaScript.GuildChannel_delete = (block) => {
	const GuildChannel = Blockly.JavaScript.valueToCode(block, 'GuildChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GuildChannel}.delete();
`;
	return code;
};

Blockly.JavaScript.GuildMember_client = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_guild = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_user = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.user`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_lastMessageID = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.lastMessageID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_lastMessage = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.lastMessage`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_serverDeaf = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.serverDeaf`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_serverMute = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.serverMute`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_selfMute = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.selfMute`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_selfDeaf = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.selfDeaf`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_voiceSessionID = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.voiceSessionID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_voiceChannelID = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.voiceChannelID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_speaking = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.speaking`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_nickname = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.nickname`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_joinedTimestamp = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.joinedTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_joinedAt = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.joinedAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_presence = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.presence`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_roles = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.roles`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_highestRole = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.highestRole`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_colorRole = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.colorRole`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_displayColor = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.displayColor`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_displayHexColor = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.displayHexColor`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_hoistRole = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.hoistRole`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_mute = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.mute`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_deaf = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.deaf`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_voiceChannel = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.voiceChannel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_id = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_displayName = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.displayName`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_permissions = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.permissions`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_kickable = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.kickable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_bannable = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.bannable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildMember_permissionsIn = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.permissionsIn(${channel});
`;
	return code;
};

Blockly.JavaScript.GuildMember_hasPermission = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const permission = Blockly.JavaScript.valueToCode(block, 'permission', Blockly.JavaScript.ORDER_ATOMIC); const explicit = Blockly.JavaScript.valueToCode(block, 'explicit', Blockly.JavaScript.ORDER_ATOMIC); const checkAdmin = Blockly.JavaScript.valueToCode(block, 'checkAdmin', Blockly.JavaScript.ORDER_ATOMIC); const checkOwner = Blockly.JavaScript.valueToCode(block, 'checkOwner', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.hasPermission(${permission},${explicit},${checkAdmin},${checkOwner});
`;
	return code;
};

Blockly.JavaScript.GuildMember_hasPermissions = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC); const explicit = Blockly.JavaScript.valueToCode(block, 'explicit', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.hasPermissions(${permissions},${explicit});
`;
	return code;
};

Blockly.JavaScript.GuildMember_missingPermissions = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC); const explicit = Blockly.JavaScript.valueToCode(block, 'explicit', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.missingPermissions(${permissions},${explicit});
`;
	return code;
};

Blockly.JavaScript.GuildMember_edit = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.edit(${data},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_setMute = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const mute = Blockly.JavaScript.valueToCode(block, 'mute', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.setMute(${mute},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_setDeaf = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const deaf = Blockly.JavaScript.valueToCode(block, 'deaf', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.setDeaf(${deaf},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_setVoiceChannel = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.setVoiceChannel(${channel});
`;
	return code;
};

Blockly.JavaScript.GuildMember_setRoles = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const roles = Blockly.JavaScript.valueToCode(block, 'roles', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.setRoles(${roles},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_addRole = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.addRole(${role},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_addRoles = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const roles = Blockly.JavaScript.valueToCode(block, 'roles', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.addRoles(${roles},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_removeRole = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.removeRole(${role},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_removeRoles = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const roles = Blockly.JavaScript.valueToCode(block, 'roles', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.removeRoles(${roles},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_setNickname = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const nick = Blockly.JavaScript.valueToCode(block, 'nick', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.setNickname(${nick},${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_createDM = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GuildMember}.createDM();
`;
	return code;
};

Blockly.JavaScript.GuildMember_deleteDM = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GuildMember}.deleteDM();
`;
	return code;
};

Blockly.JavaScript.GuildMember_kick = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.kick(${reason});
`;
	return code;
};

Blockly.JavaScript.GuildMember_ban = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.ban(${options});
`;
	return code;
};

Blockly.JavaScript.GuildMember_toString = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${GuildMember}.toString();
`;
	return code;
};

Blockly.JavaScript.GuildMember_send = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.send(${content},${options});
`;
	return code;
};

Blockly.JavaScript.GuildMember_sendMessage = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.sendMessage(${content},${options});
`;
	return code;
};

Blockly.JavaScript.GuildMember_sendEmbed = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const embed = Blockly.JavaScript.valueToCode(block, 'embed', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.sendEmbed(${embed},${content},${options});
`;
	return code;
};

Blockly.JavaScript.GuildMember_sendFile = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.sendFile(${attachment},${name},${content},${options});
`;
	return code;
};

Blockly.JavaScript.GuildMember_sendCode = (block) => {
	const GuildMember = Blockly.JavaScript.valueToCode(block, 'GuildMember', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildMember}.sendCode(${lang},${content},${options});
`;
	return code;
};

Blockly.JavaScript.Collector_client = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collector_filter = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.filter`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collector_options = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.options`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collector_collected = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.collected`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collector_ended = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.ended`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collector_next = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.next`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collector_stop = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.stop(${reason});
`;
	return code;
};

Blockly.JavaScript.Collector_handle = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const args = Blockly.JavaScript.valueToCode(block, 'args', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.handle(${args});
`;
	return code;
};

Blockly.JavaScript.Collector_postCheck = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const args = Blockly.JavaScript.valueToCode(block, 'args', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.postCheck(${args});
`;
	return code;
};

Blockly.JavaScript.Collector_cleanup = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Collector}.cleanup();
`;
	return code;
};

Blockly.JavaScript.Collector_collect = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const element = block.getFieldValue('element'); const collector = block.getFieldValue('collector');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Collector}.on('collect', (${element},${collector}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Collector_end = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const collected = block.getFieldValue('collected'); const reason = block.getFieldValue('reason');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${Collector}.on('end', (${collected},${reason}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.Invite_client = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_guild = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_code = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.code`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_presenceCount = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.presenceCount`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_memberCount = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.memberCount`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_textChannelCount = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.textChannelCount`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_voiceChannelCount = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.voiceChannelCount`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_temporary = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.temporary`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_maxAge = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.maxAge`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_uses = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.uses`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_maxUses = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.maxUses`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_inviter = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.inviter`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_channel = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.channel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_createdTimestamp = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_createdAt = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_expiresTimestamp = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.expiresTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_expiresAt = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.expiresAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_url = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Invite_delete = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Invite}.delete(${reason});
`;
	return code;
};

Blockly.JavaScript.Invite_toString = (block) => {
	const Invite = Blockly.JavaScript.valueToCode(block, 'Invite', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Invite}.toString();
`;
	return code;
};

Blockly.JavaScript.Message_client = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_channel = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.channel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_id = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_type = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_content = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.content`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_author = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.author`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_member = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.member`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_pinned = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.pinned`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_tts = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.tts`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_nonce = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.nonce`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_system = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.system`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_embeds = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.embeds`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_attachments = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.attachments`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_createdTimestamp = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_editedTimestamp = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.editedTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_reactions = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.reactions`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_mentions = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.mentions`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_webhookID = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.webhookID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_hit = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.hit`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_createdAt = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_editedAt = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.editedAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_guild = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_cleanContent = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.cleanContent`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_edits = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.edits`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_editable = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.editable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_deletable = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.deletable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_pinnable = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.pinnable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Message_createReactionCollector = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.createReactionCollector(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.Message_awaitReactions = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.awaitReactions(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.Message_isMentioned = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.isMentioned(${data});
`;
	return code;
};

Blockly.JavaScript.Message_isMemberMentioned = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.isMemberMentioned(${member});
`;
	return code;
};

Blockly.JavaScript.Message_edit = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.edit(${content},${options});
`;
	return code;
};

Blockly.JavaScript.Message_editCode = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.editCode(${lang},${content});
`;
	return code;
};

Blockly.JavaScript.Message_pin = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Message}.pin();
`;
	return code;
};

Blockly.JavaScript.Message_unpin = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Message}.unpin();
`;
	return code;
};

Blockly.JavaScript.Message_react = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const emoji = Blockly.JavaScript.valueToCode(block, 'emoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.react(${emoji});
`;
	return code;
};

Blockly.JavaScript.Message_clearReactions = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Message}.clearReactions();
`;
	return code;
};

Blockly.JavaScript.Message_delete = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const timeout = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.delete(${timeout});
`;
	return code;
};

Blockly.JavaScript.Message_reply = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.reply(${content},${options});
`;
	return code;
};

Blockly.JavaScript.Message_acknowledge = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Message}.acknowledge();
`;
	return code;
};

Blockly.JavaScript.Message_fetchWebhook = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Message}.fetchWebhook();
`;
	return code;
};

Blockly.JavaScript.Message_equals = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC); const rawData = Blockly.JavaScript.valueToCode(block, 'rawData', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}.equals(${message},${rawData});
`;
	return code;
};

Blockly.JavaScript.Message_toString = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Message}.toString();
`;
	return code;
};

Blockly.JavaScript.MessageAttachment_client = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageAttachment_message = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.message`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageAttachment_id = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageAttachment_filename = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.filename`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageAttachment_filesize = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.filesize`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageAttachment_url = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageAttachment_proxyURL = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.proxyURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageAttachment_height = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.height`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageAttachment_width = (block) => {
	const MessageAttachment = Blockly.JavaScript.valueToCode(block, 'MessageAttachment', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageAttachment}.width`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_constructor = () => {
	const code = 'new Discord.MessageCollector()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_channel = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.channel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_received = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.received`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_client = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_filter = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.filter`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_options = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.options`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_collected = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.collected`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_ended = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.ended`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_next = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.next`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_stop = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.stop(${reason});
`;
	return code;
};

Blockly.JavaScript.MessageCollector_message = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const message = block.getFieldValue('message');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${MessageCollector}.on('message', (${message}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.MessageCollector_collect = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const element = block.getFieldValue('element'); const collector = block.getFieldValue('collector');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${MessageCollector}.on('collect', (${element},${collector}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.MessageCollector_end = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const collected = block.getFieldValue('collected'); const reason = block.getFieldValue('reason');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${MessageCollector}.on('end', (${collected},${reason}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.MessageEmbed_client = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_message = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.message`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_type = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_title = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.title`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_description = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.description`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_url = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_color = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.color`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_fields = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.fields`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_createdTimestamp = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_thumbnail = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.thumbnail`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_image = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.image`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_video = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.video`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_author = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.author`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_provider = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.provider`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_footer = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.footer`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_createdAt = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbed_hexColor = (block) => {
	const MessageEmbed = Blockly.JavaScript.valueToCode(block, 'MessageEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbed}.hexColor`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedThumbnail_embed = (block) => {
	const MessageEmbedThumbnail = Blockly.JavaScript.valueToCode(block, 'MessageEmbedThumbnail', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedThumbnail}.embed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedThumbnail_url = (block) => {
	const MessageEmbedThumbnail = Blockly.JavaScript.valueToCode(block, 'MessageEmbedThumbnail', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedThumbnail}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedThumbnail_proxyURL = (block) => {
	const MessageEmbedThumbnail = Blockly.JavaScript.valueToCode(block, 'MessageEmbedThumbnail', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedThumbnail}.proxyURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedThumbnail_height = (block) => {
	const MessageEmbedThumbnail = Blockly.JavaScript.valueToCode(block, 'MessageEmbedThumbnail', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedThumbnail}.height`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedThumbnail_width = (block) => {
	const MessageEmbedThumbnail = Blockly.JavaScript.valueToCode(block, 'MessageEmbedThumbnail', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedThumbnail}.width`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedImage_embed = (block) => {
	const MessageEmbedImage = Blockly.JavaScript.valueToCode(block, 'MessageEmbedImage', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedImage}.embed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedImage_url = (block) => {
	const MessageEmbedImage = Blockly.JavaScript.valueToCode(block, 'MessageEmbedImage', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedImage}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedImage_proxyURL = (block) => {
	const MessageEmbedImage = Blockly.JavaScript.valueToCode(block, 'MessageEmbedImage', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedImage}.proxyURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedImage_height = (block) => {
	const MessageEmbedImage = Blockly.JavaScript.valueToCode(block, 'MessageEmbedImage', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedImage}.height`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedImage_width = (block) => {
	const MessageEmbedImage = Blockly.JavaScript.valueToCode(block, 'MessageEmbedImage', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedImage}.width`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedVideo_embed = (block) => {
	const MessageEmbedVideo = Blockly.JavaScript.valueToCode(block, 'MessageEmbedVideo', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedVideo}.embed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedVideo_url = (block) => {
	const MessageEmbedVideo = Blockly.JavaScript.valueToCode(block, 'MessageEmbedVideo', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedVideo}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedVideo_height = (block) => {
	const MessageEmbedVideo = Blockly.JavaScript.valueToCode(block, 'MessageEmbedVideo', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedVideo}.height`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedVideo_width = (block) => {
	const MessageEmbedVideo = Blockly.JavaScript.valueToCode(block, 'MessageEmbedVideo', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedVideo}.width`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedProvider_embed = (block) => {
	const MessageEmbedProvider = Blockly.JavaScript.valueToCode(block, 'MessageEmbedProvider', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedProvider}.embed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedProvider_name = (block) => {
	const MessageEmbedProvider = Blockly.JavaScript.valueToCode(block, 'MessageEmbedProvider', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedProvider}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedProvider_url = (block) => {
	const MessageEmbedProvider = Blockly.JavaScript.valueToCode(block, 'MessageEmbedProvider', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedProvider}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedAuthor_embed = (block) => {
	const MessageEmbedAuthor = Blockly.JavaScript.valueToCode(block, 'MessageEmbedAuthor', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedAuthor}.embed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedAuthor_name = (block) => {
	const MessageEmbedAuthor = Blockly.JavaScript.valueToCode(block, 'MessageEmbedAuthor', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedAuthor}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedAuthor_url = (block) => {
	const MessageEmbedAuthor = Blockly.JavaScript.valueToCode(block, 'MessageEmbedAuthor', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedAuthor}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedAuthor_iconURL = (block) => {
	const MessageEmbedAuthor = Blockly.JavaScript.valueToCode(block, 'MessageEmbedAuthor', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedAuthor}.iconURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedField_embed = (block) => {
	const MessageEmbedField = Blockly.JavaScript.valueToCode(block, 'MessageEmbedField', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedField}.embed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedField_name = (block) => {
	const MessageEmbedField = Blockly.JavaScript.valueToCode(block, 'MessageEmbedField', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedField}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedField_value = (block) => {
	const MessageEmbedField = Blockly.JavaScript.valueToCode(block, 'MessageEmbedField', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedField}.value`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedField_inline = (block) => {
	const MessageEmbedField = Blockly.JavaScript.valueToCode(block, 'MessageEmbedField', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedField}.inline`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedFooter_embed = (block) => {
	const MessageEmbedFooter = Blockly.JavaScript.valueToCode(block, 'MessageEmbedFooter', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedFooter}.embed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedFooter_text = (block) => {
	const MessageEmbedFooter = Blockly.JavaScript.valueToCode(block, 'MessageEmbedFooter', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedFooter}.text`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedFooter_iconURL = (block) => {
	const MessageEmbedFooter = Blockly.JavaScript.valueToCode(block, 'MessageEmbedFooter', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedFooter}.iconURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageEmbedFooter_proxyIconUrl = (block) => {
	const MessageEmbedFooter = Blockly.JavaScript.valueToCode(block, 'MessageEmbedFooter', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageEmbedFooter}.proxyIconUrl`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_everyone = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.everyone`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_users = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.users`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_roles = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.roles`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_members = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.members`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_channels = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.channels`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_EVERYONE_PATTERN = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.EVERYONE_PATTERN`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_USERS_PATTERN = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.USERS_PATTERN`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_ROLES_PATTERN = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.ROLES_PATTERN`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions_CHANNELS_PATTERN = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}.CHANNELS_PATTERN`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageReaction_message = (block) => {
	const MessageReaction = Blockly.JavaScript.valueToCode(block, 'MessageReaction', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageReaction}.message`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageReaction_me = (block) => {
	const MessageReaction = Blockly.JavaScript.valueToCode(block, 'MessageReaction', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageReaction}.me`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageReaction_count = (block) => {
	const MessageReaction = Blockly.JavaScript.valueToCode(block, 'MessageReaction', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageReaction}.count`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageReaction_users = (block) => {
	const MessageReaction = Blockly.JavaScript.valueToCode(block, 'MessageReaction', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageReaction}.users`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageReaction_emoji = (block) => {
	const MessageReaction = Blockly.JavaScript.valueToCode(block, 'MessageReaction', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageReaction}.emoji`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageReaction_remove = (block) => {
	const MessageReaction = Blockly.JavaScript.valueToCode(block, 'MessageReaction', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageReaction}.remove(${user});
`;
	return code;
};

Blockly.JavaScript.MessageReaction_fetchUsers = (block) => {
	const MessageReaction = Blockly.JavaScript.valueToCode(block, 'MessageReaction', Blockly.JavaScript.ORDER_ATOMIC);
	const limit = Blockly.JavaScript.valueToCode(block, 'limit', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageReaction}.fetchUsers(${limit});
`;
	return code;
};

Blockly.JavaScript.OAuth2Application_client = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_id = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_name = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_description = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.description`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_icon = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.icon`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_iconURL = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.iconURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_rpcOrigins = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.rpcOrigins`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_redirectURIs = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.redirectURIs`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_botRequireCodeGrant = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.botRequireCodeGrant`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_botPublic = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.botPublic`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_rpcApplicationState = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.rpcApplicationState`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_bot = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.bot`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_flags = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.flags`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_secret = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.secret`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_owner = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.owner`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_createdTimestamp = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_createdAt = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${OAuth2Application}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.OAuth2Application_reset = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${OAuth2Application}.reset();
`;
	return code;
};

Blockly.JavaScript.OAuth2Application_toString = (block) => {
	const OAuth2Application = Blockly.JavaScript.valueToCode(block, 'OAuth2Application', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${OAuth2Application}.toString();
`;
	return code;
};

Blockly.JavaScript.PartialGuild_client = (block) => {
	const PartialGuild = Blockly.JavaScript.valueToCode(block, 'PartialGuild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuild}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PartialGuild_id = (block) => {
	const PartialGuild = Blockly.JavaScript.valueToCode(block, 'PartialGuild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuild}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PartialGuild_name = (block) => {
	const PartialGuild = Blockly.JavaScript.valueToCode(block, 'PartialGuild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuild}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PartialGuild_icon = (block) => {
	const PartialGuild = Blockly.JavaScript.valueToCode(block, 'PartialGuild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuild}.icon`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PartialGuild_splash = (block) => {
	const PartialGuild = Blockly.JavaScript.valueToCode(block, 'PartialGuild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuild}.splash`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PartialGuildChannel_client = (block) => {
	const PartialGuildChannel = Blockly.JavaScript.valueToCode(block, 'PartialGuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuildChannel}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PartialGuildChannel_id = (block) => {
	const PartialGuildChannel = Blockly.JavaScript.valueToCode(block, 'PartialGuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuildChannel}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PartialGuildChannel_name = (block) => {
	const PartialGuildChannel = Blockly.JavaScript.valueToCode(block, 'PartialGuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuildChannel}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PartialGuildChannel_type = (block) => {
	const PartialGuildChannel = Blockly.JavaScript.valueToCode(block, 'PartialGuildChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PartialGuildChannel}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PermissionOverwrites_channel = (block) => {
	const PermissionOverwrites = Blockly.JavaScript.valueToCode(block, 'PermissionOverwrites', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PermissionOverwrites}.channel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PermissionOverwrites_id = (block) => {
	const PermissionOverwrites = Blockly.JavaScript.valueToCode(block, 'PermissionOverwrites', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PermissionOverwrites}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PermissionOverwrites_type = (block) => {
	const PermissionOverwrites = Blockly.JavaScript.valueToCode(block, 'PermissionOverwrites', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PermissionOverwrites}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.PermissionOverwrites_delete = (block) => {
	const PermissionOverwrites = Blockly.JavaScript.valueToCode(block, 'PermissionOverwrites', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${PermissionOverwrites}.delete(${reason});
`;
	return code;
};

Blockly.JavaScript.Presence_status = (block) => {
	const Presence = Blockly.JavaScript.valueToCode(block, 'Presence', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Presence}.status`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Presence_game = (block) => {
	const Presence = Blockly.JavaScript.valueToCode(block, 'Presence', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Presence}.game`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Presence_equals = (block) => {
	const Presence = Blockly.JavaScript.valueToCode(block, 'Presence', Blockly.JavaScript.ORDER_ATOMIC);
	const presence = Blockly.JavaScript.valueToCode(block, 'presence', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Presence}.equals(${presence});
`;
	return code;
};

Blockly.JavaScript.Game_name = (block) => {
	const Game = Blockly.JavaScript.valueToCode(block, 'Game', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Game}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Game_type = (block) => {
	const Game = Blockly.JavaScript.valueToCode(block, 'Game', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Game}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Game_url = (block) => {
	const Game = Blockly.JavaScript.valueToCode(block, 'Game', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Game}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Game_streaming = (block) => {
	const Game = Blockly.JavaScript.valueToCode(block, 'Game', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Game}.streaming`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Game_equals = (block) => {
	const Game = Blockly.JavaScript.valueToCode(block, 'Game', Blockly.JavaScript.ORDER_ATOMIC);
	const game = Blockly.JavaScript.valueToCode(block, 'game', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Game}.equals(${game});
`;
	return code;
};

Blockly.JavaScript.ReactionCollector_constructor = () => {
	const code = 'new Discord.ReactionCollector()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_message = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.message`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_users = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.users`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_total = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.total`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_client = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_filter = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.filter`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_options = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.options`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_collected = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.collected`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_ended = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.ended`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_next = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.next`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_stop = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.stop(${reason});
`;
	return code;
};

Blockly.JavaScript.ReactionCollector_collect = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const element = block.getFieldValue('element'); const collector = block.getFieldValue('collector');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${ReactionCollector}.on('collect', (${element},${collector}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.ReactionCollector_end = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const collected = block.getFieldValue('collected'); const reason = block.getFieldValue('reason');
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = `${ReactionCollector}.on('end', (${collected},${reason}) => {${statements_function}});`;
	return code;
};

Blockly.JavaScript.ReactionEmoji_reaction = (block) => {
	const ReactionEmoji = Blockly.JavaScript.valueToCode(block, 'ReactionEmoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionEmoji}.reaction`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionEmoji_name = (block) => {
	const ReactionEmoji = Blockly.JavaScript.valueToCode(block, 'ReactionEmoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionEmoji}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionEmoji_id = (block) => {
	const ReactionEmoji = Blockly.JavaScript.valueToCode(block, 'ReactionEmoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionEmoji}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionEmoji_identifier = (block) => {
	const ReactionEmoji = Blockly.JavaScript.valueToCode(block, 'ReactionEmoji', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionEmoji}.identifier`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionEmoji_toString = (block) => {
	const ReactionEmoji = Blockly.JavaScript.valueToCode(block, 'ReactionEmoji', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${ReactionEmoji}.toString();
`;
	return code;
};

Blockly.JavaScript.RichEmbed_constructor = () => {
	const code = 'new Discord.RichEmbed()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_title = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.title`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_description = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.description`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_url = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.url`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_color = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.color`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_author = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.author`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_timestamp = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.timestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_fields = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.fields`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_thumbnail = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.thumbnail`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_image = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.image`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_footer = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.footer`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_file = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.file`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RichEmbed_setTitle = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setTitle(${title});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_setDescription = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setDescription(${description});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_setURL = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setURL(${url});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_setColor = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setColor(${color});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_setAuthor = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC); const url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setAuthor(${name},${icon},${url});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_setTimestamp = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const timestamp = Blockly.JavaScript.valueToCode(block, 'timestamp', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setTimestamp(${timestamp});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_addField = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC); const inline = Blockly.JavaScript.valueToCode(block, 'inline', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.addField(${name},${value},${inline});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_addBlankField = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const inline = Blockly.JavaScript.valueToCode(block, 'inline', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.addBlankField(${inline});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_setThumbnail = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setThumbnail(${url});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_setImage = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setImage(${url});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_setFooter = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC); const icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.setFooter(${text},${icon});
`;
	return code;
};

Blockly.JavaScript.RichEmbed_attachFile = (block) => {
	const RichEmbed = Blockly.JavaScript.valueToCode(block, 'RichEmbed', Blockly.JavaScript.ORDER_ATOMIC);
	const file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RichEmbed}.attachFile(${file});
`;
	return code;
};

Blockly.JavaScript.Role_client = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_guild = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_id = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_name = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_color = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.color`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_hoist = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.hoist`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_position = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.position`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_permissions = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.permissions`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_managed = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.managed`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_mentionable = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.mentionable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_createdTimestamp = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_createdAt = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_hexColor = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.hexColor`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_members = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.members`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_editable = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.editable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_calculatedPosition = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.calculatedPosition`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Role_serialize = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Role}.serialize();
`;
	return code;
};

Blockly.JavaScript.Role_hasPermission = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const permission = Blockly.JavaScript.valueToCode(block, 'permission', Blockly.JavaScript.ORDER_ATOMIC); const explicit = Blockly.JavaScript.valueToCode(block, 'explicit', Blockly.JavaScript.ORDER_ATOMIC); const checkAdmin = Blockly.JavaScript.valueToCode(block, 'checkAdmin', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.hasPermission(${permission},${explicit},${checkAdmin});
`;
	return code;
};

Blockly.JavaScript.Role_hasPermissions = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC); const explicit = Blockly.JavaScript.valueToCode(block, 'explicit', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.hasPermissions(${permissions},${explicit});
`;
	return code;
};

Blockly.JavaScript.Role_comparePositionTo = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.comparePositionTo(${role});
`;
	return code;
};

Blockly.JavaScript.Role_edit = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.edit(${data},${reason});
`;
	return code;
};

Blockly.JavaScript.Role_setName = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.setName(${name},${reason});
`;
	return code;
};

Blockly.JavaScript.Role_setColor = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.setColor(${color},${reason});
`;
	return code;
};

Blockly.JavaScript.Role_setHoist = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const hoist = Blockly.JavaScript.valueToCode(block, 'hoist', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.setHoist(${hoist},${reason});
`;
	return code;
};

Blockly.JavaScript.Role_setPosition = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC); const relative = Blockly.JavaScript.valueToCode(block, 'relative', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.setPosition(${position},${relative});
`;
	return code;
};

Blockly.JavaScript.Role_setPermissions = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.setPermissions(${permissions},${reason});
`;
	return code;
};

Blockly.JavaScript.Role_setMentionable = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const mentionable = Blockly.JavaScript.valueToCode(block, 'mentionable', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.setMentionable(${mentionable},${reason});
`;
	return code;
};

Blockly.JavaScript.Role_delete = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.delete(${reason});
`;
	return code;
};

Blockly.JavaScript.Role_equals = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.equals(${role});
`;
	return code;
};

Blockly.JavaScript.Role_toString = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Role}.toString();
`;
	return code;
};

Blockly.JavaScript.Role_comparePositions = (block) => {
	const Role = Blockly.JavaScript.valueToCode(block, 'Role', Blockly.JavaScript.ORDER_ATOMIC);
	const role1 = Blockly.JavaScript.valueToCode(block, 'role1', Blockly.JavaScript.ORDER_ATOMIC); const role2 = Blockly.JavaScript.valueToCode(block, 'role2', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Role}.comparePositions(${role1},${role2});
`;
	return code;
};

Blockly.JavaScript.TextChannel_topic = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.topic`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_nsfw = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.nsfw`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_members = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.members`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_messages = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.messages`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_lastMessageID = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.lastMessageID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_typing = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.typing`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_typingCount = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.typingCount`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_guild = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_name = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_position = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.position`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_permissionOverwrites = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.permissionOverwrites`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_calculatedPosition = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.calculatedPosition`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_deletable = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.deletable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_muted = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.muted`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_messageNotifications = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.messageNotifications`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.TextChannel_fetchWebhooks = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${TextChannel}.fetchWebhooks();
`;
	return code;
};

Blockly.JavaScript.TextChannel_createWebhook = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const avatar = Blockly.JavaScript.valueToCode(block, 'avatar', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.createWebhook(${name},${avatar},${reason});
`;
	return code;
};

Blockly.JavaScript.TextChannel_send = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.send(${content},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_fetchMessage = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const messageID = Blockly.JavaScript.valueToCode(block, 'messageID', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.fetchMessage(${messageID});
`;
	return code;
};

Blockly.JavaScript.TextChannel_fetchMessages = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.fetchMessages(${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_fetchPinnedMessages = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${TextChannel}.fetchPinnedMessages();
`;
	return code;
};

Blockly.JavaScript.TextChannel_search = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.search(${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_startTyping = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.startTyping(${count});
`;
	return code;
};

Blockly.JavaScript.TextChannel_stopTyping = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const force = Blockly.JavaScript.valueToCode(block, 'force', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.stopTyping(${force});
`;
	return code;
};

Blockly.JavaScript.TextChannel_createCollector = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.createCollector(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_createMessageCollector = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.createMessageCollector(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_awaitMessages = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.awaitMessages(${filter},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_bulkDelete = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const messages = Blockly.JavaScript.valueToCode(block, 'messages', Blockly.JavaScript.ORDER_ATOMIC); const filterOld = Blockly.JavaScript.valueToCode(block, 'filterOld', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.bulkDelete(${messages},${filterOld});
`;
	return code;
};

Blockly.JavaScript.TextChannel_acknowledge = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${TextChannel}.acknowledge();
`;
	return code;
};

Blockly.JavaScript.TextChannel_sendMessage = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.sendMessage(${content},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_sendEmbed = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const embed = Blockly.JavaScript.valueToCode(block, 'embed', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.sendEmbed(${embed},${content},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_sendFiles = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const files = Blockly.JavaScript.valueToCode(block, 'files', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.sendFiles(${files},${content},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_sendFile = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.sendFile(${attachment},${name},${content},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_sendCode = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.sendCode(${lang},${content},${options});
`;
	return code;
};

Blockly.JavaScript.TextChannel_permissionsFor = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.permissionsFor(${member});
`;
	return code;
};

Blockly.JavaScript.TextChannel_overwritePermissions = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const userOrRole = Blockly.JavaScript.valueToCode(block, 'userOrRole', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.overwritePermissions(${userOrRole},${options},${reason});
`;
	return code;
};

Blockly.JavaScript.TextChannel_edit = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.edit(${data},${reason});
`;
	return code;
};

Blockly.JavaScript.TextChannel_setName = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.setName(${name},${reason});
`;
	return code;
};

Blockly.JavaScript.TextChannel_setPosition = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC); const relative = Blockly.JavaScript.valueToCode(block, 'relative', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.setPosition(${position},${relative});
`;
	return code;
};

Blockly.JavaScript.TextChannel_setTopic = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.setTopic(${topic},${reason});
`;
	return code;
};

Blockly.JavaScript.TextChannel_createInvite = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.createInvite(${options},${reason});
`;
	return code;
};

Blockly.JavaScript.TextChannel_clone = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const withPermissions = Blockly.JavaScript.valueToCode(block, 'withPermissions', Blockly.JavaScript.ORDER_ATOMIC); const withTopic = Blockly.JavaScript.valueToCode(block, 'withTopic', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.clone(${name},${withPermissions},${withTopic},${reason});
`;
	return code;
};

Blockly.JavaScript.TextChannel_equals = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${TextChannel}.equals(${channel});
`;
	return code;
};

Blockly.JavaScript.TextChannel_toString = (block) => {
	const TextChannel = Blockly.JavaScript.valueToCode(block, 'TextChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${TextChannel}.toString();
`;
	return code;
};

Blockly.JavaScript.User_client = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_id = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_username = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.username`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_discriminator = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.discriminator`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_avatar = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.avatar`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_bot = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.bot`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_lastMessageID = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.lastMessageID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_lastMessage = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.lastMessage`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_createdTimestamp = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.createdTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_createdAt = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.createdAt`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_presence = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.presence`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_avatarURL = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.avatarURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_defaultAvatarURL = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.defaultAvatarURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_displayAvatarURL = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.displayAvatarURL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_tag = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.tag`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_note = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.note`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_dmChannel = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.dmChannel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.User_typingIn = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.typingIn(${channel});
`;
	return code;
};

Blockly.JavaScript.User_typingSinceIn = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.typingSinceIn(${channel});
`;
	return code;
};

Blockly.JavaScript.User_typingDurationIn = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.typingDurationIn(${channel});
`;
	return code;
};

Blockly.JavaScript.User_createDM = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${User}.createDM();
`;
	return code;
};

Blockly.JavaScript.User_deleteDM = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${User}.deleteDM();
`;
	return code;
};

Blockly.JavaScript.User_addFriend = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${User}.addFriend();
`;
	return code;
};

Blockly.JavaScript.User_removeFriend = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${User}.removeFriend();
`;
	return code;
};

Blockly.JavaScript.User_block = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${User}.block();
`;
	return code;
};

Blockly.JavaScript.User_unblock = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${User}.unblock();
`;
	return code;
};

Blockly.JavaScript.User_fetchProfile = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${User}.fetchProfile();
`;
	return code;
};

Blockly.JavaScript.User_setNote = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const note = Blockly.JavaScript.valueToCode(block, 'note', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.setNote(${note});
`;
	return code;
};

Blockly.JavaScript.User_equals = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.equals(${user});
`;
	return code;
};

Blockly.JavaScript.User_toString = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${User}.toString();
`;
	return code;
};

Blockly.JavaScript.User_send = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.send(${content},${options});
`;
	return code;
};

Blockly.JavaScript.User_sendMessage = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.sendMessage(${content},${options});
`;
	return code;
};

Blockly.JavaScript.User_sendEmbed = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const embed = Blockly.JavaScript.valueToCode(block, 'embed', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.sendEmbed(${embed},${content},${options});
`;
	return code;
};

Blockly.JavaScript.User_sendFile = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.sendFile(${attachment},${name},${content},${options});
`;
	return code;
};

Blockly.JavaScript.User_sendCode = (block) => {
	const User = Blockly.JavaScript.valueToCode(block, 'User', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${User}.sendCode(${lang},${content},${options});
`;
	return code;
};

Blockly.JavaScript.UserConnection_user = (block) => {
	const UserConnection = Blockly.JavaScript.valueToCode(block, 'UserConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserConnection}.user`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserConnection_type = (block) => {
	const UserConnection = Blockly.JavaScript.valueToCode(block, 'UserConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserConnection}.type`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserConnection_name = (block) => {
	const UserConnection = Blockly.JavaScript.valueToCode(block, 'UserConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserConnection}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserConnection_id = (block) => {
	const UserConnection = Blockly.JavaScript.valueToCode(block, 'UserConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserConnection}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserConnection_revoked = (block) => {
	const UserConnection = Blockly.JavaScript.valueToCode(block, 'UserConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserConnection}.revoked`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserConnection_integrations = (block) => {
	const UserConnection = Blockly.JavaScript.valueToCode(block, 'UserConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserConnection}.integrations`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserProfile_user = (block) => {
	const UserProfile = Blockly.JavaScript.valueToCode(block, 'UserProfile', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserProfile}.user`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserProfile_client = (block) => {
	const UserProfile = Blockly.JavaScript.valueToCode(block, 'UserProfile', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserProfile}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserProfile_mutualGuilds = (block) => {
	const UserProfile = Blockly.JavaScript.valueToCode(block, 'UserProfile', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserProfile}.mutualGuilds`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserProfile_connections = (block) => {
	const UserProfile = Blockly.JavaScript.valueToCode(block, 'UserProfile', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserProfile}.connections`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserProfile_premium = (block) => {
	const UserProfile = Blockly.JavaScript.valueToCode(block, 'UserProfile', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserProfile}.premium`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.UserProfile_premiumSince = (block) => {
	const UserProfile = Blockly.JavaScript.valueToCode(block, 'UserProfile', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${UserProfile}.premiumSince`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_members = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.members`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_bitrate = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.bitrate`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_userLimit = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.userLimit`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_connection = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.connection`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_full = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.full`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_joinable = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.joinable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_speakable = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.speakable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_guild = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_name = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_position = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.position`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_permissionOverwrites = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.permissionOverwrites`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_calculatedPosition = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.calculatedPosition`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_deletable = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.deletable`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_muted = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.muted`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_messageNotifications = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.messageNotifications`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceChannel_setBitrate = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const bitrate = Blockly.JavaScript.valueToCode(block, 'bitrate', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.setBitrate(${bitrate},${reason});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_setUserLimit = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const userLimit = Blockly.JavaScript.valueToCode(block, 'userLimit', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.setUserLimit(${userLimit},${reason});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_join = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceChannel}.join();
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_leave = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceChannel}.leave();
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_permissionsFor = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.permissionsFor(${member});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_overwritePermissions = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const userOrRole = Blockly.JavaScript.valueToCode(block, 'userOrRole', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.overwritePermissions(${userOrRole},${options},${reason});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_edit = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.edit(${data},${reason});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_setName = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.setName(${name},${reason});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_setPosition = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC); const relative = Blockly.JavaScript.valueToCode(block, 'relative', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.setPosition(${position},${relative});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_setTopic = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.setTopic(${topic},${reason});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_createInvite = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.createInvite(${options},${reason});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_clone = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const withPermissions = Blockly.JavaScript.valueToCode(block, 'withPermissions', Blockly.JavaScript.ORDER_ATOMIC); const withTopic = Blockly.JavaScript.valueToCode(block, 'withTopic', Blockly.JavaScript.ORDER_ATOMIC); const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.clone(${name},${withPermissions},${withTopic},${reason});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_equals = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);
	const channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceChannel}.equals(${channel});
`;
	return code;
};

Blockly.JavaScript.VoiceChannel_toString = (block) => {
	const VoiceChannel = Blockly.JavaScript.valueToCode(block, 'VoiceChannel', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${VoiceChannel}.toString();
`;
	return code;
};

Blockly.JavaScript.VoiceRegion_id = (block) => {
	const VoiceRegion = Blockly.JavaScript.valueToCode(block, 'VoiceRegion', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceRegion}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceRegion_name = (block) => {
	const VoiceRegion = Blockly.JavaScript.valueToCode(block, 'VoiceRegion', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceRegion}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceRegion_vip = (block) => {
	const VoiceRegion = Blockly.JavaScript.valueToCode(block, 'VoiceRegion', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceRegion}.vip`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceRegion_deprecated = (block) => {
	const VoiceRegion = Blockly.JavaScript.valueToCode(block, 'VoiceRegion', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceRegion}.deprecated`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceRegion_optimal = (block) => {
	const VoiceRegion = Blockly.JavaScript.valueToCode(block, 'VoiceRegion', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceRegion}.optimal`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceRegion_custom = (block) => {
	const VoiceRegion = Blockly.JavaScript.valueToCode(block, 'VoiceRegion', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceRegion}.custom`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceRegion_sampleHostname = (block) => {
	const VoiceRegion = Blockly.JavaScript.valueToCode(block, 'VoiceRegion', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceRegion}.sampleHostname`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_client = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_name = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.name`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_token = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.token`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_avatar = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.avatar`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_id = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.id`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_guildID = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.guildID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_channelID = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.channelID`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_owner = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.owner`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Webhook_send = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.send(${content},${options});
`;
	return code;
};

Blockly.JavaScript.Webhook_sendMessage = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.sendMessage(${content},${options});
`;
	return code;
};

Blockly.JavaScript.Webhook_sendFile = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const attachment = Blockly.JavaScript.valueToCode(block, 'attachment', Blockly.JavaScript.ORDER_ATOMIC); const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.sendFile(${attachment},${name},${content},${options});
`;
	return code;
};

Blockly.JavaScript.Webhook_sendCode = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const lang = Blockly.JavaScript.valueToCode(block, 'lang', Blockly.JavaScript.ORDER_ATOMIC); const content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.sendCode(${lang},${content},${options});
`;
	return code;
};

Blockly.JavaScript.Webhook_sendSlackMessage = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const body = Blockly.JavaScript.valueToCode(block, 'body', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.sendSlackMessage(${body});
`;
	return code;
};

Blockly.JavaScript.Webhook_edit = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC); const avatar = Blockly.JavaScript.valueToCode(block, 'avatar', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.edit(${name},${avatar});
`;
	return code;
};

Blockly.JavaScript.Webhook_delete = (block) => {
	const Webhook = Blockly.JavaScript.valueToCode(block, 'Webhook', Blockly.JavaScript.ORDER_ATOMIC);
	const reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Webhook}.delete(${reason});
`;
	return code;
};

Blockly.JavaScript.Collection_array = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Collection}.array();
`;
	return code;
};

Blockly.JavaScript.Collection_keyArray = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Collection}.keyArray();
`;
	return code;
};

Blockly.JavaScript.Collection_first = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.first(${count});
`;
	return code;
};

Blockly.JavaScript.Collection_firstKey = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.firstKey(${count});
`;
	return code;
};

Blockly.JavaScript.Collection_last = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.last(${count});
`;
	return code;
};

Blockly.JavaScript.Collection_lastKey = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.lastKey(${count});
`;
	return code;
};

Blockly.JavaScript.Collection_random = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.random(${count});
`;
	return code;
};

Blockly.JavaScript.Collection_randomKey = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.randomKey(${count});
`;
	return code;
};

Blockly.JavaScript.Collection_findAll = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const prop = Blockly.JavaScript.valueToCode(block, 'prop', Blockly.JavaScript.ORDER_ATOMIC); const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.findAll(${prop},${value});
`;
	return code;
};

Blockly.JavaScript.Collection_find = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const propOrFn = Blockly.JavaScript.valueToCode(block, 'propOrFn', Blockly.JavaScript.ORDER_ATOMIC); const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.find(${propOrFn},${value});
`;
	return code;
};

Blockly.JavaScript.Collection_findKey = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const propOrFn = Blockly.JavaScript.valueToCode(block, 'propOrFn', Blockly.JavaScript.ORDER_ATOMIC); const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.findKey(${propOrFn},${value});
`;
	return code;
};

Blockly.JavaScript.Collection_exists = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const prop = Blockly.JavaScript.valueToCode(block, 'prop', Blockly.JavaScript.ORDER_ATOMIC); const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.exists(${prop},${value});
`;
	return code;
};

Blockly.JavaScript.Collection_filter = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const thisArg = Blockly.JavaScript.valueToCode(block, 'thisArg', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.filter(${fn},${thisArg});
`;
	return code;
};

Blockly.JavaScript.Collection_filterArray = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const thisArg = Blockly.JavaScript.valueToCode(block, 'thisArg', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.filterArray(${fn},${thisArg});
`;
	return code;
};

Blockly.JavaScript.Collection_map = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const thisArg = Blockly.JavaScript.valueToCode(block, 'thisArg', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.map(${fn},${thisArg});
`;
	return code;
};

Blockly.JavaScript.Collection_some = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const thisArg = Blockly.JavaScript.valueToCode(block, 'thisArg', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.some(${fn},${thisArg});
`;
	return code;
};

Blockly.JavaScript.Collection_every = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const thisArg = Blockly.JavaScript.valueToCode(block, 'thisArg', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.every(${fn},${thisArg});
`;
	return code;
};

Blockly.JavaScript.Collection_reduce = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const fn = Blockly.JavaScript.valueToCode(block, 'fn', Blockly.JavaScript.ORDER_ATOMIC); const initialValue = Blockly.JavaScript.valueToCode(block, 'initialValue', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.reduce(${fn},${initialValue});
`;
	return code;
};

Blockly.JavaScript.Collection_clone = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Collection}.clone();
`;
	return code;
};

Blockly.JavaScript.Collection_concat = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const collections = Blockly.JavaScript.valueToCode(block, 'collections', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.concat(${collections});
`;
	return code;
};

Blockly.JavaScript.Collection_deleteAll = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${Collection}.deleteAll();
`;
	return code;
};

Blockly.JavaScript.Collection_equals = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const collection = Blockly.JavaScript.valueToCode(block, 'collection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.equals(${collection});
`;
	return code;
};

Blockly.JavaScript.Collection_sort = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const compareFunction = Blockly.JavaScript.valueToCode(block, 'compareFunction', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}.sort(${compareFunction});
`;
	return code;
};

Blockly.JavaScript.Permissions_constructor = () => {
	const code = 'new Discord.Permissions()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Permissions__member = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}._member`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Permissions_bitfield = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.bitfield`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Permissions_raw = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.raw`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Permissions_FLAGS = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.FLAGS`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Permissions_ALL = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.ALL`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Permissions_DEFAULT = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.DEFAULT`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Permissions_has = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const permission = Blockly.JavaScript.valueToCode(block, 'permission', Blockly.JavaScript.ORDER_ATOMIC); const checkAdmin = Blockly.JavaScript.valueToCode(block, 'checkAdmin', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.has(${permission},${checkAdmin});
`;
	return code;
};

Blockly.JavaScript.Permissions_missing = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC); const checkAdmin = Blockly.JavaScript.valueToCode(block, 'checkAdmin', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.missing(${permissions},${checkAdmin});
`;
	return code;
};

Blockly.JavaScript.Permissions_add = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.add(${permissions});
`;
	return code;
};

Blockly.JavaScript.Permissions_remove = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.remove(${permissions});
`;
	return code;
};

Blockly.JavaScript.Permissions_serialize = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const checkAdmin = Blockly.JavaScript.valueToCode(block, 'checkAdmin', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.serialize(${checkAdmin});
`;
	return code;
};

Blockly.JavaScript.Permissions_hasPermission = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const permission = Blockly.JavaScript.valueToCode(block, 'permission', Blockly.JavaScript.ORDER_ATOMIC); const explicit = Blockly.JavaScript.valueToCode(block, 'explicit', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.hasPermission(${permission},${explicit});
`;
	return code;
};

Blockly.JavaScript.Permissions_hasPermissions = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC); const explicit = Blockly.JavaScript.valueToCode(block, 'explicit', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.hasPermissions(${permissions},${explicit});
`;
	return code;
};

Blockly.JavaScript.Permissions_missingPermissions = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const permissions = Blockly.JavaScript.valueToCode(block, 'permissions', Blockly.JavaScript.ORDER_ATOMIC); const explicit = Blockly.JavaScript.valueToCode(block, 'explicit', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.missingPermissions(${permissions},${explicit});
`;
	return code;
};

Blockly.JavaScript.Permissions_resolve = (block) => {
	const Permissions = Blockly.JavaScript.valueToCode(block, 'Permissions', Blockly.JavaScript.ORDER_ATOMIC);
	const permission = Blockly.JavaScript.valueToCode(block, 'permission', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Permissions}.resolve(${permission});
`;
	return code;
};

Blockly.JavaScript.SnowflakeUtil_generate = (block) => {
	const SnowflakeUtil = Blockly.JavaScript.valueToCode(block, 'SnowflakeUtil', Blockly.JavaScript.ORDER_ATOMIC);

	const code = `${SnowflakeUtil}.generate();
`;
	return code;
};

Blockly.JavaScript.SnowflakeUtil_deconstruct = (block) => {
	const SnowflakeUtil = Blockly.JavaScript.valueToCode(block, 'SnowflakeUtil', Blockly.JavaScript.ORDER_ATOMIC);
	const snowflake = Blockly.JavaScript.valueToCode(block, 'snowflake', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${SnowflakeUtil}.deconstruct(${snowflake});
`;
	return code;
};

Blockly.JavaScript.Util_splitMessage = (block) => {
	const Util = Blockly.JavaScript.valueToCode(block, 'Util', Blockly.JavaScript.ORDER_ATOMIC);
	const text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC); const options = Blockly.JavaScript.valueToCode(block, 'options', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Util}.splitMessage(${text},${options});
`;
	return code;
};

Blockly.JavaScript.Util_escapeMarkdown = (block) => {
	const Util = Blockly.JavaScript.valueToCode(block, 'Util', Blockly.JavaScript.ORDER_ATOMIC);
	const text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC); const onlyCodeBlock = Blockly.JavaScript.valueToCode(block, 'onlyCodeBlock', Blockly.JavaScript.ORDER_ATOMIC); const onlyInlineCode = Blockly.JavaScript.valueToCode(block, 'onlyInlineCode', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Util}.escapeMarkdown(${text},${onlyCodeBlock},${onlyInlineCode});
`;
	return code;
};

Blockly.JavaScript.Util_fetchRecommendedShards = (block) => {
	const Util = Blockly.JavaScript.valueToCode(block, 'Util', Blockly.JavaScript.ORDER_ATOMIC);
	const token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC); const guildsPerShard = Blockly.JavaScript.valueToCode(block, 'guildsPerShard', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Util}.fetchRecommendedShards(${token},${guildsPerShard});
`;
	return code;
};
