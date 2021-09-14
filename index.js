const Discord = require('discord.js');
var Twitter = require('Twitter');
require('discord-reply');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = ('m!');
const fs = require('fs');
const minigames = require('discord-minigames');
const { GuildMember, Message } = require('discord.js');
const TicTacToe = require('discord-tictactoe');
const { string } = require('mathjs');
const tweet = require('./commands/tweet');
const dotenv = require('dotenv').config();
const game = new TicTacToe({ language: 'en' });

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
    client.user.setStatus('idle');
    client.user.setActivity("league of LEGENDS! (lol)", {
        type: "COMPETING",
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
        message.lineReply('You have to type something!');
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
        message.lineReplyNoMention(`<@${message.author.id}> said ${args.join(' ')}`);

    } else if (command == 'spoiler') {
        message.lineReply('||' + args + '||');

    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);

    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);

    } else if (command == 'twitter') {
        message.lineReply('https://twitter.com/' + args);
        message.react("<:twitterlogo:883038337731010680>");

    } else if (command == 'reddit') {
        message.lineReply('https://www.reddit.com/' + args);
        message.react("<:reddit:887361210692026418>");

    } else if (command == 'youtube') {
        message.lineReply('https://www.youtube.com/' + args + " go check this out!");
        message.react("<:youtube:887361211031748719>");

    } else if (command === 'image') {
        client.commands.get('image').execute(message, args);

    } else if (command === 'play') {
        client.commands.get('play').execute(message, args, Discord);

    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);

    } else if (command === 'turnoff') {
        message.lineReply('Goodbye! :heart:');
        message.react("😢"); //Turns off the bot.
        process.exit(1);

    }  else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);

    } else if (command === 'command') {
        client.commands.get('command').execute(message, args, Discord);

    } else if (command == 'whoppa') {
        message.lineReply('DID U GET A WHOPPA? :hamburger:'); //what the fuck

    } else if (command === '.') {
        client.commands.get('.').execute(message.args);

    } else if (command === '..') {
        client.commands.get('..').execute(message.args);

    } else if (command === 'dumbrate' || 'dumbr8') {
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

    else if (command === 'help') {
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

    else if (command === 'thread') {
        client.commands.get('thread').execute(message, args, Discord)
    }

    else if (command === 'version') {
        message.lineReply(`MuckBot 2021 © \nVersion: 1.0.0 unreleased`)
    }

    else if (command === 'info') {
        message.lineReplyNoMention('**Info** \nThis bot was created by SpikySpike#5298. The work started at July 2021. \nThe bot is not yet released.')
    }

    else if (command === 'battle') {
        minigames.startBattle(GuildMember, Message)
    }

    else if (message.content.startsWith() === `${prefix}ispy` && member) {
        let ISpy = new minigames.ISpy(message)
        ISpy.startISpy(member).catch(err => {
            console.log(err)
            message.channel.send(err.message)
        })
    }

    else if (command === 'ttt') {
        game.handleMessage(message);
    }

    else if (command == 'github' || 'gh') {
        message.lineReply('https://github/' + args);
        message.react("<:GitHub:864099758779924480>")
    }

    else if (command == 'what') {
        message.react('👍').then(() => message.react('👎'));

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === interaction.user.id;
        };

        message.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '👍') {
                    message.reply('You reacted with a thumbs up.');
                } else {
                    message.reply('You reacted with a thumbs down.');
                }
            })
    }

    else if (command == 'edit') {
        message.lineReply('hello')
            .then((msg) => {
                setTimeout(function () {
                    msg.edit('IT FINALLY PINGED WOO @everyone');
                    message.channel.send('@everyone')
                }, 100000)
            });
    }

    else if (command == '') {
        message.lineReplyNoMention("Like this bot? 😉");
        sentMessage.react('👍');
        sentMessage.react('👎');
    }

    else if (command == 'websocket' || 'ws') {
        message.lineReply(`Websocket heartbeat: ${client.ws.ping}ms.`);
    }
});

client.login(process.env.DISCORD_TOKEN);

var user = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

