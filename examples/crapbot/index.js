var Discord = require('discord.js');
/*
 * The following code is licenced under the MIT Licence
 *
 * MIT License
 *
 * Copyright (c) 2017 7coil (admin@moustacheminer.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var client, message, permissions;



client = new Discord.Client();
client.login('');
	permissions = 0;
permissions = (typeof permissions == 'number' ? permissions : 0) + (0x00000800	);
permissions = (typeof permissions == 'number' ? permissions : 0) + (0x00001000);
permissions = (typeof permissions == 'number' ? permissions : 0) + (0x00000400);
permissions = (typeof permissions == 'number' ? permissions : 0) + (0x04000000);
permissions = (typeof permissions == 'number' ? permissions : 0) + (0x00100000);
permissions = (typeof permissions == 'number' ? permissions : 0) + (0x00200000);
permissions = (typeof permissions == 'number' ? permissions : 0) + (0x00000040);
permissions = (typeof permissions == 'number' ? permissions : 0) + (0x00004000);

client.on('ready', function() {
	  console.log(('https://discordapp.com/oauth2/authorize?&client_id=' + client.user.id + '&scope=bot&permissions=' + permissions));
});

client.on('message', function(message) {
	  if (((message.content).toLowerCase()).startsWith('!invite')) {
    message.reply(('https://discordapp.com/oauth2/authorize?&client_id=' + client.user.id + '&scope=bot&permissions=' + permissions));message.reply('Made in DiscordBlocks, at http://mss.ovh/db');} else if (((message.content).toLowerCase()).startsWith('!discordblocks')) {
    message.reply('Hello world!');}

});
