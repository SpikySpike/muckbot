const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 's!';
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('SpikyBot is online!')
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        
    } else if (command == 'yt'){
        message.channel.send("Check out author's channel! " + 'https://www.youtube.com/channel/UCmWj2jCeTgjTSFvqNjUDywg');

    } else if (command == 'hello'){
        message.channel.send('Hello ' + '@' + message.author.username + message.author.tag + '!');

    } else if (command == 'pls'){
        message.channel.send('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825 ' + args);

    } else if (command == 'say'){
        message.channel.send(message.author.username + ' said ' + args.join(' '));

    } else if (command == 'spoiler'){
        message.channel.send('||' + args + '||');
        
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);

    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);

    } else if (command == 'twitter'){
        message.channel.send('https://twitter.com/' + args + " follow them! :rocket:");

    } else if (command == 'reddit'){
        message.channel.send('https://www.reddit.com/' + args + " go check this out! :flying_saucer:");
        
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/' + args + " go check this out!");

    } else if (command === 'image'){
        client.commands.get('image').execute(message, args);

    } else if (command === 'play'){
        client.commands.get('play').execute(message, args);
        
    } else if (command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }
});

client.login('ODYzMDg4NzA0Mjk2ODQ1MzEy.YOhz_g.iz56A5ACHNRCa99w53aa5xkDvYM');