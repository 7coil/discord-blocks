const client = null;

const commands = {};

commands['!ping'] = (message) => {
	message.reply('Ping!');
};

client.on('message', (message) => {
	if (commands[message.content]) {
		commands[message.content](message);
	}
});
