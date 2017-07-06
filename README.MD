# DiscordBlocks v1.0
A Google Blockly (like MIT Scratch) to Discord.js compiler

## Example

### Blockly Input

![](./img/blockly.png?raw=true)

### Javascript Output

```js
var Discord = require('discord.js');
var message, client;

client = new Discord.Client();
client.login('');
	console.log('Connecting to Discord...');
client.on('ready', function() {
	  console.log('Connected to Discord!');
});

client.on('message', function(message) {
	  if (0 != (message.content).indexOf('¯\\_(ツ)_/¯') + 1) {
    message.delete();}

});
```

### XML Export
```xml
<xml xmlns="http://www.w3.org/1999/xhtml"><block type="client_login" id="F-oOiMUQeW);B2CACAbz" x="-2" y="-2"><field name="client">client</field><value name="token"><shadow type="text" id=":6`$npV#50L=}-PUn3$P"><field name="TEXT"></field></shadow></value><next><block type="console_log" id="O3#5z5x^B_H`b[EdR%x;"><value name="string"><shadow type="text" id="Oisw8r,jmz-UVEfi`:]R"><field name="TEXT">Connecting to Discord...</field></shadow></value><next><block type="on_client" id="Wk,T#GPq^ucP{57KW^ah"><field name="client">client</field><statement name="function"><block type="console_log" id="69j6Cce5o7vJxcsqU!Qt"><value name="string"><shadow type="text" id="~`._X?B.#7:D(FjB^Yz5"><field name="TEXT">Connected to Discord!</field></shadow></value></block></statement><next><block type="on_message" id="0H;F_iV}+og!6{E}?aPU"><field name="client">client</field><field name="event">message</field><field name="message">message</field><statement name="function"><block type="controls_if" id="xfh$X;9ODI6|g8fe*i)T"><value name="IF0"><block type="logic_compare" id="@ioP{Nwb]FxV{;V;LVvN"><field name="OP">NEQ</field><value name="A"><block type="math_number" id="3V7#b#5]uTAeE0uh8E}I"><field name="NUM">0</field></block></value><value name="B"><block type="text_indexOf" id="z*U+VZKQBvz5.KxW/s7a"><field name="END">FIRST</field><value name="VALUE"><block type="message" id="h9rRXpQ);0_*wWCFC2}w"><field name="variable">content</field><field name="message">message</field></block></value><value name="FIND"><shadow type="text" id="u|DCh)}AW}8m.^KXO_r4"><field name="TEXT">¯\_(ツ)_/¯</field></shadow></value></block></value></block></value><statement name="DO0"><block type="message_methods" id="qO)qt_,;57Tx5+1j3V-8"><field name="methods">delete</field><field name="message">message</field></block></statement></block></statement></block></next></block></next></block></next></block></xml>
```

## Why?
Being part of the Discord Bots (and Discord Bot List) servers made me see the amount of people who do not understand how to code, want to code, and get into learning how to make a bot.  
DiscordBlocks is moustacheminer.com's mission to make Discord bots more accessable to more people than ever, using the power of Google's Blockly code transpiler to allow easy creation and deployment for beginners, with code exports for intermediate users.

## How?

### Installation

DiscordBlocks is a web app, which means it can be ran in a webpage. Without installation, the latest version of DiscordBlocks can be found in the following official links:

* Long Link - https://moustacheminer.com/discordblocks
* Short Link - http://mss.ovh/db
* RawGit - https://cdn.rawgit.com/lepon01/discordblocks/b1d42c50/index.html

You could download a ZIP, but it is recommended that you host DiscordBlocks on a webserver (so no `file://`)

### Getting Started

DiscordBlocks is stripped down into basic blocks. Do not expect to be able to make the next *Ayana 2.0* or *MSS 2.0*.  
Furthermore, DiscordBlocks **DOES NOT** support audio of any kind, due to limitations of the Discord.js webpack, which cannot be solved without running in a `node.js` environment, which will not be implemented by DiscordBlocks to maintain compatibility with the webapp

## Licence

```
Discord.js Blockly Code Generator
Built on top of Google's "Blockly" block based programming language

The generator, Blockly and Discord.JS
are licenced under the Apache Licence 2.0

Copyright 2017 moustacheminer.com
Copyright 2012 Google Inc.
Copyright 2017 hydrabolt

Read the Apache Licence (which should be the same) for each
respective piece of software used in the following links:

https://github.com/lepon01/discordblocks/blob/master/LICENCE.TXT
https://github.com/google/blockly/blob/master/LICENSE
https://github.com/hydrabolt/discord.js/blob/master/LICENSE

http://www.apache.org/licenses/LICENSE-2.0
```