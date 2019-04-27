const discordblocks = {
  Discord: require('discord.js'),
  message: null,
  client: null,
  checkMessageExists() {
    if (!discordblocks.client) throw new Error('You cannot perform message operations without a Discord.js client')
    if (!discordblocks.message) throw new Error('You cannot perform message operations outside an "on message" block')
    if (discordblocks.client.status !== 0) throw new Error('You cannot perform message operations while Discord.js is not connected to Discord\'s API servers')
  }
};

discordblocks.client = new discordblocks.Discord.Client();
