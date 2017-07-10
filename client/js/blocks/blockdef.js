Blockly.Blocks['client_constructor'] = {
	init: function() {
		this.appendValueInput("NAME")
				.setCheck("ClientOptions")
				.appendField("new discord client");
		this.setOutput(true, "Client");
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.Blocks['clientoptions'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("with client options");
		this.appendStatementInput("NAME")
				.setCheck("ClientOption");
		this.setOutput(true, "ClientOptions");
		this.setColour(230);
		this.setTooltip('The options given to the constructor to make the client');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_messagecachemaxsize'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("message cache size")
				.appendField(new Blockly.FieldNumber(200, -1), "size");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('Maximum number of messages to cache per channel (-1 for unlimited - don\'t do this without message sweeping, otherwise memory usage will climb indefinitely)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_shardcount'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("number of shards")
				.appendField(new Blockly.FieldNumber(0, 0), "count");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('Total number of shards');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_shardid'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("id of shard")
				.appendField(new Blockly.FieldNumber(0, 0), "id");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('ID of the shard to run');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_apirequestmethod'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("api request via")
				.appendField(new Blockly.FieldDropdown([["sequential","sequential"], ["burst","burst"]]), "method");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('One of sequential or burst. The sequential handler executes all requests in the order they are triggered, whereas the burst handler runs multiple in parallel, and doesn\'t provide the guarantee of any particular order. Burst mode is more likely to hit a 429 ratelimit error by its nature, and is therefore slightly riskier to use.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_messagecachelifetime'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("message cache time")
				.appendField(new Blockly.FieldNumber(0, 0), "time");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('How long a message should stay in the cache until it is considered sweepable (in seconds, 0 for forever)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_messagesweepinterval'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("message sweep inteval")
				.appendField(new Blockly.FieldNumber(0, 0), "interval");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('How frequently to remove messages from the cache that are older than the message cache lifetime (in seconds, 0 for never)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_fetchallmembers'] = {
	init: function() {
		this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["don't","false"], ["do","true"]]), "members")
				.appendField("cache guild members");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('Whether to cache all guild members and users upon startup, as well as upon joining a guild (should be avoided whenever possible)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_disableeveryone'] = {
	init: function() {
		this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["don't","false"], ["do","true"]]), "everyone")
				.appendField("disable @everyone");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('Default value for MessageOptions#disableEveryone');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_sync'] = {
	init: function() {
		this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["don't","false"], ["do","true"]]), "sync")
				.appendField("sync periodically");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('Whether to periodically sync guilds (for user accounts)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_restwsbridgetimeout'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("REST timeout after")
				.appendField(new Blockly.FieldNumber(5000, 0), "timeout")
				.appendField("milliseconds");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('Maximum time permitted between REST responses and their corresponding websocket events');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['clientoption_resttimeoffset'] = {
	init: function() {
		this.appendDummyInput()
				.appendField("add")
				.appendField(new Blockly.FieldNumber(500, 0), "extra")
				.appendField("extra milliseconds between REST requests");
		this.setPreviousStatement(true, "ClientOption");
		this.setNextStatement(true, "ClientOption");
		this.setColour(230);
		this.setTooltip('Extra time in millseconds to wait before continuing to make REST requests (higher values will reduce rate-limiting errors on bad connections)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/typedef/ClientOptions');
	}
};

Blockly.Blocks['client_browser'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("is");
		this.appendDummyInput()
				.appendField("in a web browser");
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setColour(230);
		this.setTooltip('Whether the client is in a browser environment');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=browser');
	}
};

Blockly.Blocks['client_ping'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("get ping of");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(230);
		this.setTooltip('Average heartbeat ping of the websocket, obtained by averaging the Client#pings property');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=ping');
	}
};

Blockly.Blocks['client_pings'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("get last three pings of");
		this.setInputsInline(true);
		this.setOutput(true, "Array");
		this.setColour(230);
		this.setTooltip('Previous heartbeat pings of the websocket (most recent first, limited to three elements)');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=pings');
	}
};

Blockly.Blocks['client_readytimestamp'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("get startup timestamp of");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(230);
		this.setTooltip('Timestamp of the time the client was last READY at');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=readyTimestamp');
	}
};

Blockly.Blocks['client_status'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("get status of");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(230);
		this.setTooltip('Current status of the client\'s connection to Discord');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=status');
	}
};

Blockly.Blocks['client_token'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("get token of");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(230);
		this.setTooltip('Authorization token for the logged in user/bot - THIS SHOULD BE KEPT PRIVATE AT ALL TIMES');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=token');
	}
};

Blockly.Blocks['client_uptime'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("get uptime of");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(230);
		this.setTooltip('How long it has been since the client last entered the READY state');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=uptime');
	}
};

Blockly.Blocks['client_user'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("get user of");
		this.setInputsInline(true);
		this.setOutput(true, ["ClientUser", "User"]);
		this.setColour(230);
		this.setTooltip('User that the client is logged in as');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=user');
	}
};

Blockly.Blocks['client_on_message'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("when");
		this.appendDummyInput()
				.appendField("sees a message being sent, save the message as")
				.appendField(new Blockly.FieldVariable("message"), "message");
		this.appendStatementInput("function")
				.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('Emitted whenever a message is created.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=message');
	}
};

Blockly.Blocks['client_on_messagedelete'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("when");
		this.appendDummyInput()
				.appendField("sees a message being deleted, save the message as")
				.appendField(new Blockly.FieldVariable("message"), "message");
		this.appendStatementInput("function")
				.setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('Emitted whenever a message is deleted.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=messageDelete');
	}
};

Blockly.Blocks['message_author'] = {
	init: function() {
		this.appendValueInput("message")
				.setCheck("Message")
				.appendField("get author of");
		this.setInputsInline(true);
		this.setOutput(true, "User");
		this.setColour(230);
		this.setTooltip('The author of the message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=author');
	}
};

Blockly.Blocks['message_channel'] = {
	init: function() {
		this.appendValueInput("message")
				.setCheck("Message")
				.appendField("get channel of");
		this.setInputsInline(true);
		this.setOutput(true, ["TextChannel", "DMChannel", "GroupDMChannel"]);
		this.setColour(230);
		this.setTooltip('The channel that the message was sent in');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=channel');
	}
};

Blockly.Blocks['message_cleancontent'] = {
	init: function() {
		this.appendValueInput("message")
				.setCheck("Message")
				.appendField("get clean content of");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(230);
		this.setTooltip('The message contents with all mentions replaced by the equivalent text. If mentions cannot be resolved to a name, the relevant mention in the message content will not be converted');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=cleanContent');
	}
};

Blockly.Blocks['message_client'] = {
	init: function() {
		this.appendValueInput("message")
				.setCheck("Message")
				.appendField("get client of");
		this.setInputsInline(true);
		this.setOutput(true, "Client");
		this.setColour(230);
		this.setTooltip('The client that instantiated the Message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=client');
	}
};

Blockly.Blocks['message_content'] = {
	init: function() {
		this.appendValueInput("message")
				.setCheck("Message")
				.appendField("get content of");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(230);
		this.setTooltip('The content of the message');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=content');
	}
};

Blockly.Blocks['client_login'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck("Client")
				.appendField("login to");
		this.appendValueInput("token")
				.setCheck("String")
				.appendField("with token");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('Logs the client in, establishing a websocket connection to Discord. Both bot and regular user accounts are supported, but it is highly recommended to use a bot account whenever possible. User accounts are subject to harsher ratelimits and other restrictions that don\'t apply to bot accounts. Bot accounts also have access to many features that user accounts cannot utilise. User accounts that are found to be abusing/overusing the API will be banned, locking you out of Discord entirely.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=login');
	}
};

Blockly.Blocks['send'] = {
	init: function() {
		this.appendValueInput("client")
				.setCheck(["ClientUser", "DMChannel", "GroupDMChannel", "GuildMember", "TextChannel", "User", "Webhook", "WebhookClient"])
				.appendField("send a message to");
		this.appendValueInput("token")
				.setCheck("String")
				.appendField("containing");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('Send a message to this channel.');
		this.setHelpUrl('https://discord.js.org/#/docs/main/stable/class/User?scrollTo=send');
	}
};

Blockly.Blocks['console_log'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck(null)
        .appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Outputs a message to the Web Console.');
    this.setHelpUrl('https://developer.mozilla.org/en/docs/Web/API/Console/log');
  }
};
