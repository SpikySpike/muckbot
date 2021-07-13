const Discord = require('discord.js');
const client = new Discord.Client();
const { default_prefix } = require('./config.json')
const db = require('quick.db')
const fs = require('fs');
const dotenv = require('dotenv').config();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Muck is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole =  guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('864056495569764383').send(`Welcome <@${guildMember.user}> to our server! :anatomical_heart:`);
});


client.on('message', message => {


    if(!message.content.startsWith(default_prefix) || message.author.bot) return;
    if(!message.quild) return;
    let prefix = db.get(`prefix${message.quild.id}`)
    if(prefix === null) prefix = default_prefix;
    const args = message.content.slice(default_prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        
    } else if (command == 'yt'){
        message.channel.send("Check out author's channel! " + 'https://www.youtube.com/channel/UCmWj2jCeTgjTSFvqNjUDywg');

    } else if (command == 'hello'){
        message.channel.send('Hello ' + '@' + message.author.username + message.author.tag + '!');

    } else if (command == 'admin'){
        message.channel.send('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825 ' + args);

    } else if (command == 'say'){
        message.reply   (' said ' + args.join(' '));

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

    } else if (command === 'turnoff'){
        message.channel.send('Goodbye! :heart:'); //Turns off the bot.
        process.exit(1);

    } else if (command == 'say2'){
        message.channel.send(args.join(' '));

    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
        
    } else if (command === 'command'){
        client.commands.get('command').execute(message, args, Discord);

    } else if (command == 'whoppa'){
        message.channel.send('DID U GET A WHOPPA? :hamburger:');

    } else if (command === 'setprefix'){
        client.commands.get('setprefix').execute(message.args);
    }
});

client.login(process.env.DISCORD_TOKEN);