const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 's!';

client.once('ready', () => {
    console.log('SpikyBot is online!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        message.channel.send('pong!' + args);
    } else if (command == 'youtube'){
        message.channel.send("Check out author's channel! " + 'https://www.youtube.com/channel/UCmWj2jCeTgjTSFvqNjUDywg')

    } else if (command == 'hello'){
        message.channel.send('Hello ' + '@' + message.author.username + message.author.tag + '!')

    } else if (command == 'pls'){
        message.channel.send('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825')
    }

});

client.login('ODYzMDg4NzA0Mjk2ODQ1MzEy.YOhz_g.iz56A5ACHNRCa99w53aa5xkDvYM');