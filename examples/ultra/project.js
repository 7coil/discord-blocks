var Discord = require('discord.js');var object, message, command, client, Matt_Parker, input, prefix;

function subsequenceFromStartLast(sequence, at1) {
  var start = at1;
  var end = sequence.length - 1 + 1;
  return sequence.slice(start, end);
}

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}


Matt_Parker = 'https://i.ytimg.com/vi/aOT_bG-vWyg/maxresdefault.jpg,https://i.ytimg.com/vi/OWCAlJ1vsqc/maxresdefault.jpg,https://i.ytimg.com/vi/z6jMU-AwX34/maxresdefault.jpg,https://i.ytimg.com/vi/pF8goco4ix0/maxresdefault.jpg,https://i.ytimg.com/vi/DelH1S32dOg/maxresdefault.jpg,https://i.ytimg.com/vi/3GJUM6pCpew/maxresdefault.jpg,https://i.ytimg.com/vi/CCuaWqhVvIc/maxresdefault.jpg,https://i.ytimg.com/vi/5Yy_unGaD-w/maxresdefault.jpg,https://i.ytimg.com/vi/-9FWBaWah28/maxresdefault.jpg,https://i.ytimg.com/vi/xVBOlbjiHGI/maxresdefault.jpg,https://i.ytimg.com/vi/ggH8cKcPOHI/maxresdefault.jpg,https://i.ytimg.com/vi/_o0cIpLQApk/maxresdefault.jpg,https://i.ytimg.com/vi/aHU-L3BLd_w/maxresdefault.jpg,https://i.ytimg.com/vi/8pSLffliCk0/maxresdefault.jpg,https://i.ytimg.com/vi/HrRMnzANHHs/maxresdefault.jpg,https://i.ytimg.com/vi/hoh4TmPzu1w/maxresdefault.jpg,https://i.ytimg.com/vi/qMP7_IQpSN0/maxresdefault.jpg,https://i.ytimg.com/vi/qkt_wmRKYNQ/maxresdefault.jpg,https://i.ytimg.com/vi/owVwjr6pTqc/maxresdefault.jpg,https://i.ytimg.com/vi/V3uNDe_i_1Y/maxresdefault.jpg,https://i.ytimg.com/vi/-u-O_2Hz82I/maxresdefault.jpg,https://i.ytimg.com/vi/9KABcmczPdg/maxresdefault.jpg,https://i.ytimg.com/vi/q5ozBnrd5Zc/maxresdefault.jpg,https://i.ytimg.com/vi/SOgn6J12NWE/maxresdefault.jpg,https://i.ytimg.com/vi/07PBcmGozDA/maxresdefault.jpg,https://i.ytimg.com/vi/Quwvw0vYkRA/maxresdefault.jpg,https://i.ytimg.com/vi/W1OkVkq2vFM/maxresdefault.jpg,https://i.ytimg.com/vi/pOx_daJT_8c/maxresdefault.jpg,https://i.ytimg.com/vi/g7TGA-EzBHM/maxresdefault.jpg,https://i.ytimg.com/vi/ieUvzy6rnnw/maxresdefault.jpg,https://i.ytimg.com/vi/qYAdXm69l8g/maxresdefault.jpg,https://i.ytimg.com/vi/G_OuIVOGDr8/hqdefault.jpg,https://i.ytimg.com/vi/ryFvH4Ejaxo/maxresdefault.jpg,https://i.ytimg.com/vi/0JTYfMP-yCI/maxresdefault.jpg,https://i.ytimg.com/vi/nv0Onj3wXCE/maxresdefault.jpg,https://i.ytimg.com/vi/T6A0v3xYl7k/maxresdefault.jpg,https://i.ytimg.com/vi/wyl-V0mrEio/maxresdefault.jpg,https://i.ytimg.com/vi/ZbKYmfjMPVM/maxresdefault.jpg,https://i.ytimg.com/vi/tlpYjrbujG0/maxresdefault.jpg,https://i.ytimg.com/vi/XPIgR89jv3Q/maxresdefault.jpg,https://i.ytimg.com/vi/q8n15q1v4Xo/maxresdefault.jpg,https://i.ytimg.com/vi/OEMA6jhi5Qo/maxresdefault.jpg,https://i.ytimg.com/vi/T0xKHwQH-4I/maxresdefault.jpg,https://i.ytimg.com/vi/ZPv1UV0rD8U/maxresdefault.jpg,https://i.ytimg.com/vi/_s5RFgd59ao/maxresdefault.jpg,https://i.ytimg.com/vi/lNuPy-r1GuQ/maxresdefault.jpg,https://i.ytimg.com/vi/ZNiRzZ66YN0/hqdefault.jpg,https://i.ytimg.com/vi/99stb2mzspI/maxresdefault.jpg,https://i.ytimg.com/vi/HuKl3XuEmj4/maxresdefault.jpg,https://i.ytimg.com/vi/Fmb3TCvlETk/hqdefault.jpg,https://i.ytimg.com/vi/JJQWtGm3eIs/maxresdefault.jpg,https://i.ytimg.com/vi/l7lP9y7Bb5g/hqdefault.jpg,https://i.ytimg.com/vi/BRRolKTlF6Q/hqdefault.jpg,https://i.ytimg.com/vi/XPIgR89jv3Q/maxresdefault.jpg,https://mss.ovh/1497818917.png,https://cdn.discordapp.com/attachments/110373943822540800/353611070717558784/mattparker_2207234b.png,https://cdn.discordapp.com/attachments/110373943822540800/353611567134277642/MattParkernumberninjacropped.png,http://i.imgur.com/df1an2D.jpg'.split(',');
client = (new Discord.Client());
prefix = 'discordblocks';
client.login('');
console.log('Welcome to Moustacheminer Server Services!');
client.on('ready', () => {  console.log('Client is ready');
});client.on('message', (message) => {  if ((message.content).indexOf(prefix) + 1 == 1) {
    input = subsequenceFromStartLast((message.content), ((prefix.length + 1) - 1)).trim();
    console.log(input);
    if (input) {
      command = input.split(' ')[0];
      console.log(command);
      if (command == 'parker') {
        message.reply((String('Have some Matt Parker! ') + String(listsGetRandomItem(Matt_Parker, false))),);
      } else if (command == 'ping') {
        message.reply((client.ping),);
      } else if (command == 'help') {
        message.reply((String('Welcome to DiscordBlocks! Available commands:') + String('`parker`, `ping`, `help`, `birb`')),);
      } else if (command == 'birb') {
        object = ({});
        object['file'] = (new Discord.Attachment('https://random.birb.pw/tweet/random','birb.jpg'));
        message.reply('Have a random birb from `random.birb.pw`',object);
      }
    }
  }
});
