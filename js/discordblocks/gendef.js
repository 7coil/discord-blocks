
Blockly.JavaScript.Client_constructor = () => {
	const code = 'new Discord.Client()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_options = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.options`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_rest = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.rest`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_dataManager = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.dataManager`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_manager = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.manager`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_ws = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.ws`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_resolver = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.resolver`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_actions = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.actions`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client_voice = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}.voice`;
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

Blockly.JavaScript.Client__timeouts = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}._timeouts`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client__intervals = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}._intervals`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Client__pingTimestamp = (block) => {
	const Client = Blockly.JavaScript.valueToCode(block, 'Client', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Client}._pingTimestamp`;
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

Blockly.JavaScript.ClientDataResolver_constructor = () => {
	const code = 'new Discord.ClientDataResolver()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientManager_client = (block) => {
	const ClientManager = Blockly.JavaScript.valueToCode(block, 'ClientManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientManager}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientManager_heartbeatInterval = (block) => {
	const ClientManager = Blockly.JavaScript.valueToCode(block, 'ClientManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientManager}.heartbeatInterval`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientManager_status = (block) => {
	const ClientManager = Blockly.JavaScript.valueToCode(block, 'ClientManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientManager}.status`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.DiscordAPIError_code = (block) => {
	const DiscordAPIError = Blockly.JavaScript.valueToCode(block, 'DiscordAPIError', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${DiscordAPIError}.code`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RequestHandler_constructor = () => {
	const code = 'new Discord.RequestHandler()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RequestHandler_restManager = (block) => {
	const RequestHandler = Blockly.JavaScript.valueToCode(block, 'RequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RequestHandler}.restManager`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RequestHandler_queue = (block) => {
	const RequestHandler = Blockly.JavaScript.valueToCode(block, 'RequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RequestHandler}.queue`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.RequestHandler_globalLimit = (block) => {
	const RequestHandler = Blockly.JavaScript.valueToCode(block, 'RequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${RequestHandler}.globalLimit`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.SequentialRequestHandler_constructor = () => {
	const code = 'new Discord.SequentialRequestHandler()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.SequentialRequestHandler_endpoint = (block) => {
	const SequentialRequestHandler = Blockly.JavaScript.valueToCode(block, 'SequentialRequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${SequentialRequestHandler}.endpoint`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.SequentialRequestHandler_timeDifference = (block) => {
	const SequentialRequestHandler = Blockly.JavaScript.valueToCode(block, 'SequentialRequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${SequentialRequestHandler}.timeDifference`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.SequentialRequestHandler_busy = (block) => {
	const SequentialRequestHandler = Blockly.JavaScript.valueToCode(block, 'SequentialRequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${SequentialRequestHandler}.busy`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.SequentialRequestHandler_restManager = (block) => {
	const SequentialRequestHandler = Blockly.JavaScript.valueToCode(block, 'SequentialRequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${SequentialRequestHandler}.restManager`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.SequentialRequestHandler_queue = (block) => {
	const SequentialRequestHandler = Blockly.JavaScript.valueToCode(block, 'SequentialRequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${SequentialRequestHandler}.queue`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.SequentialRequestHandler_globalLimit = (block) => {
	const SequentialRequestHandler = Blockly.JavaScript.valueToCode(block, 'SequentialRequestHandler', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${SequentialRequestHandler}.globalLimit`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientVoiceManager_client = (block) => {
	const ClientVoiceManager = Blockly.JavaScript.valueToCode(block, 'ClientVoiceManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientVoiceManager}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ClientVoiceManager_connections = (block) => {
	const ClientVoiceManager = Blockly.JavaScript.valueToCode(block, 'ClientVoiceManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ClientVoiceManager}.connections`;
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

Blockly.JavaScript.BaseOpus_constructor = () => {
	const code = 'new Discord.BaseOpus()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.BaseOpus_bitrate = (block) => {
	const BaseOpus = Blockly.JavaScript.valueToCode(block, 'BaseOpus', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${BaseOpus}.bitrate`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.BaseOpus_options = (block) => {
	const BaseOpus = Blockly.JavaScript.valueToCode(block, 'BaseOpus', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${BaseOpus}.options`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.AudioPlayer_voiceConnection = (block) => {
	const AudioPlayer = Blockly.JavaScript.valueToCode(block, 'AudioPlayer', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${AudioPlayer}.voiceConnection`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.AudioPlayer_prism = (block) => {
	const AudioPlayer = Blockly.JavaScript.valueToCode(block, 'AudioPlayer', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${AudioPlayer}.prism`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.AudioPlayer_transcoder = (block) => {
	const AudioPlayer = Blockly.JavaScript.valueToCode(block, 'AudioPlayer', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${AudioPlayer}.transcoder`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.AudioPlayer_dispatcher = (block) => {
	const AudioPlayer = Blockly.JavaScript.valueToCode(block, 'AudioPlayer', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${AudioPlayer}.dispatcher`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript.SecretKey_key = (block) => {
	const SecretKey = Blockly.JavaScript.valueToCode(block, 'SecretKey', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${SecretKey}.key`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript.VoiceConnection_authentication = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.authentication`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_player = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.player`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_ssrcMap = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.ssrcMap`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_sockets = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.sockets`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnection_dispatcher = (block) => {
	const VoiceConnection = Blockly.JavaScript.valueToCode(block, 'VoiceConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnection}.dispatcher`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnectionUDPClient_voiceConnection = (block) => {
	const VoiceConnectionUDPClient = Blockly.JavaScript.valueToCode(block, 'VoiceConnectionUDPClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnectionUDPClient}.voiceConnection`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnectionUDPClient_socket = (block) => {
	const VoiceConnectionUDPClient = Blockly.JavaScript.valueToCode(block, 'VoiceConnectionUDPClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnectionUDPClient}.socket`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnectionUDPClient_discordAddress = (block) => {
	const VoiceConnectionUDPClient = Blockly.JavaScript.valueToCode(block, 'VoiceConnectionUDPClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnectionUDPClient}.discordAddress`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnectionUDPClient_localAddress = (block) => {
	const VoiceConnectionUDPClient = Blockly.JavaScript.valueToCode(block, 'VoiceConnectionUDPClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnectionUDPClient}.localAddress`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnectionUDPClient_localPort = (block) => {
	const VoiceConnectionUDPClient = Blockly.JavaScript.valueToCode(block, 'VoiceConnectionUDPClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnectionUDPClient}.localPort`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceConnectionUDPClient_discordPort = (block) => {
	const VoiceConnectionUDPClient = Blockly.JavaScript.valueToCode(block, 'VoiceConnectionUDPClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceConnectionUDPClient}.discordPort`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceWebSocket_client = (block) => {
	const VoiceWebSocket = Blockly.JavaScript.valueToCode(block, 'VoiceWebSocket', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceWebSocket}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceWebSocket_voiceConnection = (block) => {
	const VoiceWebSocket = Blockly.JavaScript.valueToCode(block, 'VoiceWebSocket', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceWebSocket}.voiceConnection`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceWebSocket_attempts = (block) => {
	const VoiceWebSocket = Blockly.JavaScript.valueToCode(block, 'VoiceWebSocket', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceWebSocket}.attempts`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.VoiceWebSocket_ws = (block) => {
	const VoiceWebSocket = Blockly.JavaScript.valueToCode(block, 'VoiceWebSocket', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${VoiceWebSocket}.ws`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript.WebhookClient_rest = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.rest`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient_resolver = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}.resolver`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient__timeouts = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}._timeouts`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebhookClient__intervals = (block) => {
	const WebhookClient = Blockly.JavaScript.valueToCode(block, 'WebhookClient', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebhookClient}._intervals`;
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

Blockly.JavaScript.WebSocketConnection_constructor = () => {
	const code = 'new Discord.WebSocketConnection()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_manager = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.manager`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_client = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_ws = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.ws`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_sequence = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.sequence`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_status = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.status`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_packetManager = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.packetManager`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_lastPingTimestamp = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.lastPingTimestamp`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_ratelimit = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.ratelimit`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_disabledEvents = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.disabledEvents`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_closeSequence = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.closeSequence`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_expectingClose = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.expectingClose`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketConnection_ENCODING = (block) => {
	const WebSocketConnection = Blockly.JavaScript.valueToCode(block, 'WebSocketConnection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketConnection}.ENCODING`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketManager_client = (block) => {
	const WebSocketManager = Blockly.JavaScript.valueToCode(block, 'WebSocketManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketManager}.client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.WebSocketManager_connection = (block) => {
	const WebSocketManager = Blockly.JavaScript.valueToCode(block, 'WebSocketManager', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${WebSocketManager}.connection`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript.Guild__sortedRoles = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}._sortedRoles`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Guild_defaultChannel = (block) => {
	const Guild = Blockly.JavaScript.valueToCode(block, 'Guild', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Guild}.defaultChannel`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.GuildAuditLogs_entries = (block) => {
	const GuildAuditLogs = Blockly.JavaScript.valueToCode(block, 'GuildAuditLogs', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${GuildAuditLogs}.entries`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript.Collector__timeout = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}._timeout`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collector_listener = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.listener`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collector_next = (block) => {
	const Collector = Blockly.JavaScript.valueToCode(block, 'Collector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collector}.next`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript.Message__edits = (block) => {
	const Message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Message}._edits`;
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

Blockly.JavaScript.MessageCollector__timeout = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}._timeout`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_listener = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.listener`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageCollector_next = (block) => {
	const MessageCollector = Blockly.JavaScript.valueToCode(block, 'MessageCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageCollector}.next`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript.MessageMentions__content = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}._content`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions__client = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}._client`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions__guild = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}._guild`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions__members = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}._members`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.MessageMentions__channels = (block) => {
	const MessageMentions = Blockly.JavaScript.valueToCode(block, 'MessageMentions', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${MessageMentions}._channels`;
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

Blockly.JavaScript.ReactionCollector__timeout = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}._timeout`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_listener = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.listener`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.ReactionCollector_next = (block) => {
	const ReactionCollector = Blockly.JavaScript.valueToCode(block, 'ReactionCollector', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${ReactionCollector}.next`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript.Collection__array = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}._array`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.Collection__keyArray = (block) => {
	const Collection = Blockly.JavaScript.valueToCode(block, 'Collection', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${Collection}._keyArray`;
	return [code, Blockly.JavaScript.ORDER_NONE];
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
