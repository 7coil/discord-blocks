# DiscordBlocks v2.0
A Google Blockly (like MIT Scratch) to Discord.js compiler

## Example

### Blockly Input

![](/examples/reply/project.png?raw=true)

### Javascript Output

```js
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
```

## Why?
Being part of the Discord Bots (and Discord Bot List) servers made me see the amount of people who do not understand how to code, want to code, and get into learning how to make a bot.  
DiscordBlocks is moustacheminer.com's mission to make Discord bots more accessable to more people than ever, using the power of Google's Blockly code transpiler to allow easy creation and deployment for beginners, with code exports for intermediate users.

## How?

### Installation

DiscordBlocks is a web app, which means it can be ran in a webpage. Without installation, the latest version of DiscordBlocks can be found here: https://moustacheminer.com/discord-blocks

You could download a ZIP, but it is recommended that you host DiscordBlocks on a webserver (so no `file://`)

DiscordBlocks **DOES NOT** support audio of any kind, due to limitations of the Discord.js webpack, which cannot be solved without running in a `node.js` environment, which will not be implemented by DiscordBlocks to maintain compatibility with the webapp

## Licence

```
Discord.js Blockly Code Generator
Built on top of Google's "Blockly" block based programming language

The generator, Blockly and Discord.JS
are licenced under the Apache Licence 2.0

Copyright 2017 Moustacheminer Server Services
Copyright 2012 Google Inc.
Copyright 2017 hydrabolt

Read the Apache Licence (which should be the same) for each
respective piece of software used in the following links:

https://github.com/lepon01/discordblocks/blob/master/licence.txt
https://github.com/google/blockly/blob/master/LICENSE
https://github.com/hydrabolt/discord.js/blob/master/LICENSE

http://www.apache.org/licenses/LICENSE-2.0
```