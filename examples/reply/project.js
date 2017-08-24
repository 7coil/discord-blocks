/* eslint-disable */

var Discord = require('discord.js');var client, info, message, _7BtextVariable_7D, messageReaction, user;


client = (new Discord.Client());
client.login('');
client.on('ready', () => {  console.log('Welcome to DiscordBlocks!');
  client.generateInvite(0);
});client.on('debug', (info) => {  console.log(info);
});client.on('message', (message) => {  if ((message.content).indexOf('[discordblocks]') + 1 == 1 && !((message.author).bot)) {
    message.reply('This is DiscordBlocks!',);
  }
});
