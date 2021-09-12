const Discord = require('discord.js');
var Twitter = require('Twitter');
require('discord-reply');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = ('m!');
const fs = require('fs');
const { string } = require('mathjs');
const tweet = require('./commands/tweet');
const dotenv = require('dotenv').config();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('MuckBot is online!');
    client.user.setStatus('dnd');
    client.user.setActivity("A DSMP VIDEO 😍😍😍😍", {
        type: "WATCHING",
        url: "https://youtu.be/dQw4w9WgXcQ"
      });
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(welcomeRole).send(`Welcome ${guildMember.user} to our server! :anatomical_heart:`);
});

client.on('message', message => {


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command < 1) {
        message.lineReply('You have to type something!')
    }

    if (command === 'verify') {
        client.commands.get('verify').execute(message, args);

    } else if (command == 'yt') {
        message.lineReply("Check out author's channel! " + 'https://www.youtube.com/channel/UCmWj2jCeTgjTSFvqNjUDywg');

    } else if (command == 'hello') {
        message.lineReply('Hello ' + '@' + message.author.username + message.author.tag + '!');

    } else if (command == 'admin') {
        message.lineReply('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825 ' + args);

    } else if (command == 'say') {
        message.channel.send(`<@${message.author.id}> said ${args.join(' ')}`);

    } else if (command == 'spoiler') {
        message.lineReply('||' + args + '||');

    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);

    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);

    } else if (command == 'twitter') {
        message.lineReply('https://twitter.com/' + args + " follow them! :rocket:");

    } else if (command == 'reddit') {
        message.lineReply('https://www.reddit.com/' + args + " go check this out! :flying_saucer:");

    } else if (command == 'youtube') {
        message.lineReply('https://www.youtube.com/' + args + " go check this out!");

    } else if (command === 'image') {
        client.commands.get('image').execute(message, args);

    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);

    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);

    } else if (command === 'turnoff') {
        message.lineReply('Goodbye! :heart:');
        message.react("😢"); //Turns off the bot.
        process.exit(1);

    } else if (command == 'say2') {
        message.lineReply(args.join(' '));

    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);

    } else if (command === 'command') {
        client.commands.get('command').execute(message, args, Discord);

    } else if (command == 'whoppa') {
        message.lineReply('DID U GET A WHOPPA? :hamburger:'); //what the fuck

    } else if (command === '.') {
        client.commands.get('.').execute(message.args);

    } else if (command === '..') {
        client.commands.get('..').execute(message.args);

    } else if (command === 'dumbrate') {
        let number = Math.floor(Math.random() * 101);
        if (!args[1]) {
            return message.lineReply('You are ' + number + '% dumb :face_with_monocle:');
        } else {
            let user = message.mentions.user.first();
            if (!user) {
                return message.lineReply('Please include who you are dumb-rating.')
            }
            return message.lineReply(user.username + 'is' + number + '% dumb :face_with_monocle:')
        }

    } else if (command === 'rps') {
        client.commands.get('rps').execute(message, args)
    } 
    
    else if (command === 'help'){
        message.lineReply('This bot is made with <:JsLogo:864098557954490418>! Please read our documentation here:')
    } 
    
    else if (command === '8ball') {
        client.commands.get('8ball').execute(message, args)
    } 
    
    else if (command === 'ratio') {
        client.commands.get('ratio').execute(message, args, Discord, client)
    } 
    
    else if (command === '.assist') {
        client.commands.get('.assist').execute(message, args)
    } 
    
    else if (command === 'rob') {
        message.lineReply('pls rob ' + args)
    }

    else if (command === 'google') {
        client.commands.get('google').execute(message, args)
    }

    else if (command === 'warn') {
        client.commands.get('warn').execute(message, args)
    } 
    
    else if (command === 'tweet') {
        client.commands.get('tweet').execute(message, args, Twitter)
    } 

    else if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord)
    } 

    else if (command === 'react') {
        message.react(`<@${args}>`);
        message.lineReply('Success! ❤')
    }
});

client.login(process.env.DISCORD_TOKEN);

var user = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

