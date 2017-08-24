
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

Blockly.Blocks.Client_rest = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get rest of');
		this.setInputsInline(true);
		this.setOutput(true, 'RESTManager');
		this.setColour(230);
		this.setTooltip('The REST manager of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=rest');
	}
};

Blockly.Blocks.Client_dataManager = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get dataManager of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientDataManager');
		this.setColour(230);
		this.setTooltip('The data manager of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=dataManager');
	}
};

Blockly.Blocks.Client_manager = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get manager of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientManager');
		this.setColour(230);
		this.setTooltip('The manager of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=manager');
	}
};

Blockly.Blocks.Client_ws = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get ws of');
		this.setInputsInline(true);
		this.setOutput(true, 'WebSocketManager');
		this.setColour(230);
		this.setTooltip('The WebSocket manager of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=ws');
	}
};

Blockly.Blocks.Client_resolver = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get resolver of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientDataResolver');
		this.setColour(230);
		this.setTooltip('The data resolver of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=resolver');
	}
};

Blockly.Blocks.Client_actions = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get actions of');
		this.setInputsInline(true);
		this.setOutput(true, 'ActionsManager');
		this.setColour(230);
		this.setTooltip('The action manager of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=actions');
	}
};

Blockly.Blocks.Client_voice = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get voice of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientVoiceManager');
		this.setColour(230);
		this.setTooltip('The voice manager of the client (`null` in browsers)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=voice');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, ['Array', 'number']);
		this.setColour(230);
		this.setTooltip('Previous heartbeat pings of the websocket (most recent first, limited to three elements)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=pings');
	}
};

Blockly.Blocks.Client__timeouts = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get _timeouts of');
		this.setInputsInline(true);
		this.setOutput(true, ['Set', 'Timeout']);
		this.setColour(230);
		this.setTooltip('Timeouts set by {@link Client#setTimeout} that are still active');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=_timeouts');
	}
};

Blockly.Blocks.Client__intervals = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get _intervals of');
		this.setInputsInline(true);
		this.setOutput(true, ['Set', 'Timeout']);
		this.setColour(230);
		this.setTooltip('Intervals set by {@link Client#setInterval} that are still active');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=_intervals');
	}
};

Blockly.Blocks.Client__pingTimestamp = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get _pingTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('Timestamp of the latest ping\'s start time');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=_pingTimestamp');
	}
};

Blockly.Blocks.Client_status = {
	init() {
		this.appendValueInput('Client')
			.setCheck('Client')
			.appendField('get status of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether the client is in a browser environment');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=browser');
	}
};

Blockly.Blocks.ClientDataResolver_constructor = {
	init() {
		this.appendValueInput('ClientDataResolver')
			.setCheck('ClientDataResolver')
			.appendField('ClientDataResolver_constructor');
		this.setOutput(true, 'ClientDataResolver');
		this.setColour(160);
		this.setTooltip('The DataResolver identifies different objects and tries to resolve a specific piece of information from them, e.g.\nextracting a User from a Message object.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientDataResolver');
	}
};

Blockly.Blocks.ClientManager_client = {
	init() {
		this.appendValueInput('ClientManager')
			.setCheck('ClientManager')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this Manager');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientManager?scrollTo=client');
	}
};

Blockly.Blocks.ClientManager_heartbeatInterval = {
	init() {
		this.appendValueInput('ClientManager')
			.setCheck('ClientManager')
			.appendField('get heartbeatInterval of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The heartbeat interval');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientManager?scrollTo=heartbeatInterval');
	}
};

Blockly.Blocks.ClientManager_status = {
	init() {
		this.appendValueInput('ClientManager')
			.setCheck('ClientManager')
			.appendField('get status of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The status of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientManager?scrollTo=status');
	}
};

Blockly.Blocks.DiscordAPIError_code = {
	init() {
		this.appendValueInput('DiscordAPIError')
			.setCheck('DiscordAPIError')
			.appendField('get code of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('HTTP error code returned by Discord');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/DiscordAPIError?scrollTo=code');
	}
};

Blockly.Blocks.RequestHandler_constructor = {
	init() {
		this.appendValueInput('RequestHandler')
			.setCheck('RequestHandler')
			.appendField('RequestHandler_constructor');
		this.setOutput(true, 'RequestHandler');
		this.setColour(160);
		this.setTooltip('A base class for different types of rate limiting handlers for the REST API.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RequestHandler');
	}
};

Blockly.Blocks.RequestHandler_restManager = {
	init() {
		this.appendValueInput('RequestHandler')
			.setCheck('RequestHandler')
			.appendField('get restManager of');
		this.setInputsInline(true);
		this.setOutput(true, 'RESTManager');
		this.setColour(230);
		this.setTooltip('The RESTManager that instantiated this RequestHandler');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RequestHandler?scrollTo=restManager');
	}
};

Blockly.Blocks.RequestHandler_queue = {
	init() {
		this.appendValueInput('RequestHandler')
			.setCheck('RequestHandler')
			.appendField('get queue of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'APIRequest']);
		this.setColour(230);
		this.setTooltip('A list of requests that have yet to be processed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RequestHandler?scrollTo=queue');
	}
};

Blockly.Blocks.RequestHandler_globalLimit = {
	init() {
		this.appendValueInput('RequestHandler')
			.setCheck('RequestHandler')
			.appendField('get globalLimit of');
		this.setInputsInline(true);
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the client is being rate limited on every endpoint');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RequestHandler?scrollTo=globalLimit');
	}
};

Blockly.Blocks.SequentialRequestHandler_constructor = {
	init() {
		this.appendValueInput('SequentialRequestHandler')
			.setCheck('SequentialRequestHandler')
			.appendField('SequentialRequestHandler_constructor');
		this.setOutput(true, 'SequentialRequestHandler');
		this.setColour(160);
		this.setTooltip('Handles API Requests sequentially, i.e. we wait until the current request is finished before moving onto\nthe next. This plays a _lot_ nicer in terms of avoiding 429\'s when there is more than one session of the account,\nbut it can be slower.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SequentialRequestHandler');
	}
};

Blockly.Blocks.SequentialRequestHandler_endpoint = {
	init() {
		this.appendValueInput('SequentialRequestHandler')
			.setCheck('SequentialRequestHandler')
			.appendField('get endpoint of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('The endpoint that this handler is handling');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SequentialRequestHandler?scrollTo=endpoint');
	}
};

Blockly.Blocks.SequentialRequestHandler_timeDifference = {
	init() {
		this.appendValueInput('SequentialRequestHandler')
			.setCheck('SequentialRequestHandler')
			.appendField('get timeDifference of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The time difference between Discord\'s Dates and the local computer\'s Dates. A positive number means the local\ncomputer\'s time is ahead of Discord\'s');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SequentialRequestHandler?scrollTo=timeDifference');
	}
};

Blockly.Blocks.SequentialRequestHandler_busy = {
	init() {
		this.appendValueInput('SequentialRequestHandler')
			.setCheck('SequentialRequestHandler')
			.appendField('get busy of');
		this.setInputsInline(true);
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether the queue is being processed or not');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SequentialRequestHandler?scrollTo=busy');
	}
};

Blockly.Blocks.SequentialRequestHandler_restManager = {
	init() {
		this.appendValueInput('SequentialRequestHandler')
			.setCheck('SequentialRequestHandler')
			.appendField('get restManager of');
		this.setInputsInline(true);
		this.setOutput(true, 'RESTManager');
		this.setColour(230);
		this.setTooltip('The RESTManager that instantiated this RequestHandler');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SequentialRequestHandler?scrollTo=restManager');
	}
};

Blockly.Blocks.SequentialRequestHandler_queue = {
	init() {
		this.appendValueInput('SequentialRequestHandler')
			.setCheck('SequentialRequestHandler')
			.appendField('get queue of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'APIRequest']);
		this.setColour(230);
		this.setTooltip('A list of requests that have yet to be processed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SequentialRequestHandler?scrollTo=queue');
	}
};

Blockly.Blocks.SequentialRequestHandler_globalLimit = {
	init() {
		this.appendValueInput('SequentialRequestHandler')
			.setCheck('SequentialRequestHandler')
			.appendField('get globalLimit of');
		this.setInputsInline(true);
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the client is being rate limited on every endpoint');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SequentialRequestHandler?scrollTo=globalLimit');
	}
};

Blockly.Blocks.ClientVoiceManager_client = {
	init() {
		this.appendValueInput('ClientVoiceManager')
			.setCheck('ClientVoiceManager')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this voice manager');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientVoiceManager?scrollTo=client');
	}
};

Blockly.Blocks.ClientVoiceManager_connections = {
	init() {
		this.appendValueInput('ClientVoiceManager')
			.setCheck('ClientVoiceManager')
			.appendField('get connections of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'VoiceConnection']);
		this.setColour(230);
		this.setTooltip('A collection mapping connection IDs to the Connection objects');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ClientVoiceManager?scrollTo=connections');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The total time, taking into account pauses and skips, that the dispatcher has been streaming for');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/StreamDispatcher?scrollTo=totalStreamTime');
	}
};

Blockly.Blocks.BaseOpus_constructor = {
	init() {
		this.appendValueInput('BaseOpus')
			.setCheck('BaseOpus')
			.appendField('BaseOpus_constructor');
		this.setOutput(true, 'BaseOpus');
		this.setColour(160);
		this.setTooltip('The base opus encoding engine.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/BaseOpus');
	}
};

Blockly.Blocks.BaseOpus_bitrate = {
	init() {
		this.appendValueInput('BaseOpus')
			.setCheck('BaseOpus')
			.appendField('get bitrate of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The desired bitrate (kbps)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/BaseOpus?scrollTo=bitrate');
	}
};

Blockly.Blocks.BaseOpus_options = {
	init() {
		this.appendValueInput('BaseOpus')
			.setCheck('BaseOpus')
			.appendField('get options of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Miscellaneous Opus options');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/BaseOpus?scrollTo=options');
	}
};

Blockly.Blocks.AudioPlayer_voiceConnection = {
	init() {
		this.appendValueInput('AudioPlayer')
			.setCheck('AudioPlayer')
			.appendField('get voiceConnection of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceConnection');
		this.setColour(230);
		this.setTooltip('The voice connection that the player serves');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/AudioPlayer?scrollTo=voiceConnection');
	}
};

Blockly.Blocks.AudioPlayer_prism = {
	init() {
		this.appendValueInput('AudioPlayer')
			.setCheck('AudioPlayer')
			.appendField('get prism of');
		this.setInputsInline(true);
		this.setOutput(true, 'Prism');
		this.setColour(230);
		this.setTooltip('The prism transcoder that the player uses');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/AudioPlayer?scrollTo=prism');
	}
};

Blockly.Blocks.AudioPlayer_transcoder = {
	init() {
		this.appendValueInput('AudioPlayer')
			.setCheck('AudioPlayer')
			.appendField('get transcoder of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('The current transcoder');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/AudioPlayer?scrollTo=transcoder');
	}
};

Blockly.Blocks.AudioPlayer_dispatcher = {
	init() {
		this.appendValueInput('AudioPlayer')
			.setCheck('AudioPlayer')
			.appendField('get dispatcher of');
		this.setInputsInline(true);
		this.setOutput(true, 'StreamDispatcher');
		this.setColour(230);
		this.setTooltip('The current dispatcher');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/AudioPlayer?scrollTo=dispatcher');
	}
};

Blockly.Blocks.VoiceReceiver_destroyed = {
	init() {
		this.appendValueInput('VoiceReceiver')
			.setCheck('VoiceReceiver')
			.appendField('get destroyed of');
		this.setInputsInline(true);
		this.setOutput(true, 'boolean');
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

Blockly.Blocks.SecretKey_key = {
	init() {
		this.appendValueInput('SecretKey')
			.setCheck('SecretKey')
			.appendField('get key of');
		this.setInputsInline(true);
		this.setOutput(true, 'Uint8Array');
		this.setColour(230);
		this.setTooltip('The key used for encryption');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/SecretKey?scrollTo=key');
	}
};

Blockly.Blocks.VolumeInterface_volume = {
	init() {
		this.appendValueInput('VolumeInterface')
			.setCheck('VolumeInterface')
			.appendField('get volume of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The current volume of the broadcast from a logarithmic scale');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VolumeInterface?scrollTo=volumeLogarithmic');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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

Blockly.Blocks.VoiceConnection_authentication = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get authentication of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('The authentication data needed to connect to the voice server');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=authentication');
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

Blockly.Blocks.VoiceConnection_ssrcMap = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get ssrcMap of');
		this.setInputsInline(true);
		this.setOutput(true, ['Map', 'number', 'boolean']);
		this.setColour(230);
		this.setTooltip('Map SSRC to speaking values');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=ssrcMap');
	}
};

Blockly.Blocks.VoiceConnection_sockets = {
	init() {
		this.appendValueInput('VoiceConnection')
			.setCheck('VoiceConnection')
			.appendField('get sockets of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Object that wraps contains the `ws` and `udp` sockets of this voice connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnection?scrollTo=sockets');
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

Blockly.Blocks.VoiceConnectionUDPClient_voiceConnection = {
	init() {
		this.appendValueInput('VoiceConnectionUDPClient')
			.setCheck('VoiceConnectionUDPClient')
			.appendField('get voiceConnection of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceConnection');
		this.setColour(230);
		this.setTooltip('The voice connection that this UDP client serves');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnectionUDPClient?scrollTo=voiceConnection');
	}
};

Blockly.Blocks.VoiceConnectionUDPClient_socket = {
	init() {
		this.appendValueInput('VoiceConnectionUDPClient')
			.setCheck('VoiceConnectionUDPClient')
			.appendField('get socket of');
		this.setInputsInline(true);
		this.setOutput(true, 'Socket');
		this.setColour(230);
		this.setTooltip('The UDP socket');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnectionUDPClient?scrollTo=socket');
	}
};

Blockly.Blocks.VoiceConnectionUDPClient_discordAddress = {
	init() {
		this.appendValueInput('VoiceConnectionUDPClient')
			.setCheck('VoiceConnectionUDPClient')
			.appendField('get discordAddress of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('The address of the Discord voice server');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnectionUDPClient?scrollTo=discordAddress');
	}
};

Blockly.Blocks.VoiceConnectionUDPClient_localAddress = {
	init() {
		this.appendValueInput('VoiceConnectionUDPClient')
			.setCheck('VoiceConnectionUDPClient')
			.appendField('get localAddress of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('The local IP address');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnectionUDPClient?scrollTo=localAddress');
	}
};

Blockly.Blocks.VoiceConnectionUDPClient_localPort = {
	init() {
		this.appendValueInput('VoiceConnectionUDPClient')
			.setCheck('VoiceConnectionUDPClient')
			.appendField('get localPort of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('The local port');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnectionUDPClient?scrollTo=localPort');
	}
};

Blockly.Blocks.VoiceConnectionUDPClient_discordPort = {
	init() {
		this.appendValueInput('VoiceConnectionUDPClient')
			.setCheck('VoiceConnectionUDPClient')
			.appendField('get discordPort of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The port of the Discord voice server');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceConnectionUDPClient?scrollTo=discordPort');
	}
};

Blockly.Blocks.VoiceWebSocket_client = {
	init() {
		this.appendValueInput('VoiceWebSocket')
			.setCheck('VoiceWebSocket')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client of this voice WebSocket');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceWebSocket?scrollTo=client');
	}
};

Blockly.Blocks.VoiceWebSocket_voiceConnection = {
	init() {
		this.appendValueInput('VoiceWebSocket')
			.setCheck('VoiceWebSocket')
			.appendField('get voiceConnection of');
		this.setInputsInline(true);
		this.setOutput(true, 'VoiceConnection');
		this.setColour(230);
		this.setTooltip('The Voice Connection that this WebSocket serves');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceWebSocket?scrollTo=voiceConnection');
	}
};

Blockly.Blocks.VoiceWebSocket_attempts = {
	init() {
		this.appendValueInput('VoiceWebSocket')
			.setCheck('VoiceWebSocket')
			.appendField('get attempts of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('How many connection attempts have been made');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceWebSocket?scrollTo=attempts');
	}
};

Blockly.Blocks.VoiceWebSocket_ws = {
	init() {
		this.appendValueInput('VoiceWebSocket')
			.setCheck('VoiceWebSocket')
			.appendField('get ws of');
		this.setInputsInline(true);
		this.setOutput(true, 'WebSocket');
		this.setColour(230);
		this.setTooltip('The actual WebSocket used to connect to the Voice WebSocket Server.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/VoiceWebSocket?scrollTo=ws');
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

Blockly.Blocks.WebhookClient_rest = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get rest of');
		this.setInputsInline(true);
		this.setOutput(true, 'RESTManager');
		this.setColour(230);
		this.setTooltip('The REST manager of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=rest');
	}
};

Blockly.Blocks.WebhookClient_resolver = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get resolver of');
		this.setInputsInline(true);
		this.setOutput(true, 'ClientDataResolver');
		this.setColour(230);
		this.setTooltip('The data resolver of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=resolver');
	}
};

Blockly.Blocks.WebhookClient__timeouts = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get _timeouts of');
		this.setInputsInline(true);
		this.setOutput(true, ['Set', 'Timeout']);
		this.setColour(230);
		this.setTooltip('Timeouts set by {@link WebhookClient#setTimeout} that are still active');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=_timeouts');
	}
};

Blockly.Blocks.WebhookClient__intervals = {
	init() {
		this.appendValueInput('WebhookClient')
			.setCheck('WebhookClient')
			.appendField('get _intervals of');
		this.setInputsInline(true);
		this.setOutput(true, ['Set', 'Timeout']);
		this.setColour(230);
		this.setTooltip('Intervals set by {@link WebhookClient#setInterval} that are still active');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebhookClient?scrollTo=_intervals');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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

Blockly.Blocks.WebSocketConnection_constructor = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('WebSocketConnection_constructor');
		this.setOutput(true, 'WebSocketConnection');
		this.setColour(160);
		this.setTooltip('Abstracts a WebSocket connection with decoding/encoding for the Discord gateway.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection');
	}
};

Blockly.Blocks.WebSocketConnection_manager = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get manager of');
		this.setInputsInline(true);
		this.setOutput(true, 'WebSocketManager');
		this.setColour(230);
		this.setTooltip('The WebSocket Manager of this connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=manager');
	}
};

Blockly.Blocks.WebSocketConnection_client = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client this belongs to');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=client');
	}
};

Blockly.Blocks.WebSocketConnection_ws = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get ws of');
		this.setInputsInline(true);
		this.setOutput(true, 'WebSocket');
		this.setColour(230);
		this.setTooltip('The WebSocket connection itself');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=ws');
	}
};

Blockly.Blocks.WebSocketConnection_sequence = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get sequence of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The current sequence of the WebSocket');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=sequence');
	}
};

Blockly.Blocks.WebSocketConnection_status = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get status of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The current status of the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=status');
	}
};

Blockly.Blocks.WebSocketConnection_packetManager = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get packetManager of');
		this.setInputsInline(true);
		this.setOutput(true, 'WebSocketPacketManager');
		this.setColour(230);
		this.setTooltip('The Packet Manager of the connection');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=packetManager');
	}
};

Blockly.Blocks.WebSocketConnection_lastPingTimestamp = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get lastPingTimestamp of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The last time a ping was sent (a timestamp)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=lastPingTimestamp');
	}
};

Blockly.Blocks.WebSocketConnection_ratelimit = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get ratelimit of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Contains the rate limit queue and metadata');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=ratelimit');
	}
};

Blockly.Blocks.WebSocketConnection_disabledEvents = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get disabledEvents of');
		this.setInputsInline(true);
		this.setOutput(true, 'Object');
		this.setColour(230);
		this.setTooltip('Events that are disabled (will not be processed)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=disabledEvents');
	}
};

Blockly.Blocks.WebSocketConnection_closeSequence = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get closeSequence of');
		this.setInputsInline(true);
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The sequence on WebSocket close');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=closeSequence');
	}
};

Blockly.Blocks.WebSocketConnection_expectingClose = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get expectingClose of');
		this.setInputsInline(true);
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the WebSocket is expecting to be closed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=expectingClose');
	}
};

Blockly.Blocks.WebSocketConnection_ENCODING = {
	init() {
		this.appendValueInput('WebSocketConnection')
			.setCheck('WebSocketConnection')
			.appendField('get ENCODING of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('Encoding the WebSocket connections will use.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketConnection?scrollTo=ENCODING');
	}
};

Blockly.Blocks.WebSocketManager_client = {
	init() {
		this.appendValueInput('WebSocketManager')
			.setCheck('WebSocketManager')
			.appendField('get client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client that instantiated this WebSocketManager');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketManager?scrollTo=client');
	}
};

Blockly.Blocks.WebSocketManager_connection = {
	init() {
		this.appendValueInput('WebSocketManager')
			.setCheck('WebSocketManager')
			.appendField('get connection of');
		this.setInputsInline(true);
		this.setOutput(true, 'WebSocketConnection');
		this.setColour(230);
		this.setTooltip('The WebSocket connection of this manager');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/WebSocketManager?scrollTo=connection');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('Total number of shards');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardClientUtil?scrollTo=count');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, ['Array', 'string']);
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, ['Collection', 'number', 'Shard']);
		this.setColour(230);
		this.setTooltip('A collection of shards that this manager has spawned');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ShardingManager?scrollTo=shards');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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

Blockly.Blocks.ClientUser_verified = {
	init() {
		this.appendValueInput('ClientUser')
			.setCheck('ClientUser')
			.appendField('get verified of');
		this.setInputsInline(true);
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, ['Collection', 'Snowflake', 'string']);
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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

Blockly.Blocks.ClientUserChannelOverride_muted = {
	init() {
		this.appendValueInput('ClientUserChannelOverride')
			.setCheck('ClientUserChannelOverride')
			.appendField('get muted of');
		this.setInputsInline(true);
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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

Blockly.Blocks.ClientUserSettings_convertEmoticons = {
	init() {
		this.appendValueInput('ClientUserSettings')
			.setCheck('ClientUserSettings')
			.appendField('get convertEmoticons of');
		this.setInputsInline(true);
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('The identifier of this emoji, used for message reactions');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Emoji?scrollTo=identifier');
	}
};

Blockly.Blocks.GroupDMChannel_name = {
	init() {
		this.appendValueInput('GroupDMChannel')
			.setCheck('GroupDMChannel')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, ['Collection', 'Snowflake', 'string']);
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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

Blockly.Blocks.Guild__sortedRoles = {
	init() {
		this.appendValueInput('Guild')
			.setCheck('Guild')
			.appendField('get _sortedRoles of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'Role']);
		this.setColour(230);
		this.setTooltip('Fetches a collection of roles in the current guild sorted by position');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Guild?scrollTo=_sortedRoles');
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

Blockly.Blocks.GuildAuditLogsEntry_targetType = {
	init() {
		this.appendValueInput('GuildAuditLogsEntry')
			.setCheck('GuildAuditLogsEntry')
			.appendField('get targetType of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether the member is bannable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=bannable');
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
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether this collector has finished collecting');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=ended');
	}
};

Blockly.Blocks.Collector__timeout = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('get _timeout of');
		this.setInputsInline(true);
		this.setOutput(true, 'Timeout');
		this.setColour(230);
		this.setTooltip('Timeout for cleanup');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=_timeout');
	}
};

Blockly.Blocks.Collector_listener = {
	init() {
		this.appendValueInput('Collector')
			.setCheck('Collector')
			.appendField('get listener of');
		this.setInputsInline(true);
		this.setOutput(true, 'function');
		this.setColour(230);
		this.setTooltip('Call this to handle an event as a collectable element\nAccepts any event data as parameters');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collector?scrollTo=listener');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('The URL to the invite');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Invite?scrollTo=url');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether this message is a hit in a search');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=hit');
	}
};

Blockly.Blocks.Message__edits = {
	init() {
		this.appendValueInput('Message')
			.setCheck('Message')
			.appendField('get _edits of');
		this.setInputsInline(true);
		this.setOutput(true, ['Array', 'Message']);
		this.setColour(230);
		this.setTooltip('The previous versions of the message, sorted with the most recent first');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=_edits');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether the message is pinnable by the client user');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=pinnable');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether this collector has finished collecting');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=ended');
	}
};

Blockly.Blocks.MessageCollector__timeout = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get _timeout of');
		this.setInputsInline(true);
		this.setOutput(true, 'Timeout');
		this.setColour(230);
		this.setTooltip('Timeout for cleanup');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=_timeout');
	}
};

Blockly.Blocks.MessageCollector_listener = {
	init() {
		this.appendValueInput('MessageCollector')
			.setCheck('MessageCollector')
			.appendField('get listener of');
		this.setInputsInline(true);
		this.setOutput(true, 'function');
		this.setColour(230);
		this.setTooltip('Call this to handle an event as a collectable element\nAccepts any event data as parameters');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageCollector?scrollTo=listener');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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

Blockly.Blocks.MessageMentions__content = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get _content of');
		this.setInputsInline(true);
		this.setOutput(true, 'Message');
		this.setColour(230);
		this.setTooltip('Content of the message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=_content');
	}
};

Blockly.Blocks.MessageMentions__client = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get _client of');
		this.setInputsInline(true);
		this.setOutput(true, 'Client');
		this.setColour(230);
		this.setTooltip('The client the message is from');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=_client');
	}
};

Blockly.Blocks.MessageMentions__guild = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get _guild of');
		this.setInputsInline(true);
		this.setOutput(true, 'Guild');
		this.setColour(230);
		this.setTooltip('The guild the message is in');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=_guild');
	}
};

Blockly.Blocks.MessageMentions__members = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get _members of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildMember']);
		this.setColour(230);
		this.setTooltip('Cached members for {@MessageMention#members}');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=_members');
	}
};

Blockly.Blocks.MessageMentions__channels = {
	init() {
		this.appendValueInput('MessageMentions')
			.setCheck('MessageMentions')
			.appendField('get _channels of');
		this.setInputsInline(true);
		this.setOutput(true, ['Collection', 'Snowflake', 'GuildChannel']);
		this.setColour(230);
		this.setTooltip('Cached channels for {@MessageMention#channels}');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=_channels');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, ['Array', 'string']);
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
		this.setOutput(true, ['Array', 'string']);
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('The type of this overwrite');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/PermissionOverwrites?scrollTo=type');
	}
};

Blockly.Blocks.Presence_status = {
	init() {
		this.appendValueInput('Presence')
			.setCheck('Presence')
			.appendField('get status of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
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

Blockly.Blocks.Game_name = {
	init() {
		this.appendValueInput('Game')
			.setCheck('Game')
			.appendField('get name of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether or not the game is being streamed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=streaming');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
		this.setColour(230);
		this.setTooltip('Whether this collector has finished collecting');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=ended');
	}
};

Blockly.Blocks.ReactionCollector__timeout = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get _timeout of');
		this.setInputsInline(true);
		this.setOutput(true, 'Timeout');
		this.setColour(230);
		this.setTooltip('Timeout for cleanup');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=_timeout');
	}
};

Blockly.Blocks.ReactionCollector_listener = {
	init() {
		this.appendValueInput('ReactionCollector')
			.setCheck('ReactionCollector')
			.appendField('get listener of');
		this.setInputsInline(true);
		this.setOutput(true, 'function');
		this.setColour(230);
		this.setTooltip('Call this to handle an event as a collectable element\nAccepts any event data as parameters');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=listener');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('The identifier of this emoji, used for message reactions');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/ReactionEmoji?scrollTo=identifier');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
		this.setColour(230);
		this.setTooltip('File to upload alongside this Embed');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=file');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('The position of the role in the role manager');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Role?scrollTo=calculatedPosition');
	}
};

Blockly.Blocks.TextChannel_topic = {
	init() {
		this.appendValueInput('TextChannel')
			.setCheck('TextChannel')
			.appendField('get topic of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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

Blockly.Blocks.VoiceRegion_id = {
	init() {
		this.appendValueInput('VoiceRegion')
			.setCheck('VoiceRegion')
			.appendField('get id of');
		this.setInputsInline(true);
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'boolean');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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
		this.setOutput(true, 'string');
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

Blockly.Blocks.Collection__array = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('get _array of');
		this.setInputsInline(true);
		this.setOutput(true, 'Array');
		this.setColour(230);
		this.setTooltip('Cached array for the `array()` method - will be reset to `null` whenever `set()` or `delete()` are called');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=_array');
	}
};

Blockly.Blocks.Collection__keyArray = {
	init() {
		this.appendValueInput('Collection')
			.setCheck('Collection')
			.appendField('get _keyArray of');
		this.setInputsInline(true);
		this.setOutput(true, 'Array');
		this.setColour(230);
		this.setTooltip('Cached array for the `keyArray()` method - will be reset to `null` whenever `set()` or `delete()` are called');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Collection?scrollTo=_keyArray');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
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
		this.setOutput(true, 'number');
		this.setColour(230);
		this.setTooltip('Bitfield representing the default permissions for users');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=DEFAULT');
	}
};
