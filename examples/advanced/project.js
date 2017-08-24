var Discord = require('discord.js');var client, info, message, owner, prefix, _7BtextVariable_7D;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function subsequenceFromStartLast(sequence, at1) {
  var start = at1;
  var end = sequence.length - 1 + 1;
  return sequence.slice(start, end);
}


prefix = 'blocks';
owner = '190519304972664832';
client = (new Discord.Client());
client.login('');
client.on('ready', () => {  console.log('Welcome to DiscordBlocks!');
});client.on('debug', (info) => {  console.log(info);
});client.on('message', (message) => {  if (!((message.author).bot)) {
    if ((message.content).indexOf(String(prefix) + String('icon')) + 1 == 1) {
      (message.channel).send((['Icon of ',((message.guild).name),': ',((message.guild).iconURL)].join('')),);
    } else if ((message.content).indexOf(String(prefix) + String('ping')) + 1 == 1) {
      (message.channel).send((['Ping! ',(client.ping),'ms'].join('')),);
    } else if ((message.content).indexOf(String(prefix) + String('roll')) + 1 == 1) {
      (message.channel).send((['You rolled a ',mathRandomInt(1, 6),'.'].join('')),);
    } else if ((message.content).indexOf(String(prefix) + String('eval')) + 1 == 1) {
      if (owner == ((message.author).id)) {
        eval((subsequenceFromStartLast((message.content), (((String(prefix) + String('eval')).length + 1) - 1))));
      } else {
        (message.channel).send('You do not have permission to run this command!',);
      }
    }
  }
});
