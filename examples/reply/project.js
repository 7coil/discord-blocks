/* eslint-disable */
/*
	Copyright 2017 Moustacheminer Server Services

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

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
