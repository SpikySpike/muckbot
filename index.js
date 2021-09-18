const Discord = require('discord.js');
const google = require('google')
const { Client, Intents } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
require('@discordjs/voice');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
var Twitter = require('Twitter');
require('discord-reply');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const db = require('quick.db');
const prefix = "m!";
const fs = require('fs');
const minigames = require('discord-minigames');
const { GuildMember, Message } = require('discord.js');
const TicTacToe = require('discord-tictactoe');
const { string } = require('mathjs');
const tweet = require('./commands/tweet');
const dotenv = require('dotenv').config();
const game = new TicTacToe({ language: 'en' });
const { balances } = require("./balances.json");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`);
    client.user.setStatus('idle');
    client.user.setActivity("league of LEGENDS! (lol)", {
        type: "COMPETING",
        url: "https://youtu.be/dQw4w9WgXcQ"
    });
});

const data = new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back')
            .setRequired(true));

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(channel => channel.name === "welcome").send(`Welcome ${guildMember.user} to our server! :anatomical_heart:`);
});

client.on('message', message => {


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command < 1) {
        message.reply('You have to type something!');
    }

    if (command === 'verify') {
        client.commands.get('verify').execute(message, args);

    } else if (command == 'yt') {
        message.reply("Check out author's channel! " + 'https://www.youtube.com/channel/UCmWj2jCeTgjTSFvqNjUDywg');

    } else if (command == 'hello') {
        message.reply('Hello ' + `<@${message.author.id}>` + '!');

    } else if (command == 'admin') {
        message.reply('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825 ' + args);

    } else if (command == 'say') {
        message.channel.send(`${args}\n\n          - **${message.author.username}**`);

    } else if (command == 'spoiler') {
        message.reply('||' + args.join(" ") + '||');

    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);

    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);

    } else if (command == 'twitter') {
        message.reply('https://twitter.com/' + args);
        message.react("<:twitterlogo:883038337731010680>");

    } else if (command == 'reddit') {
        message.reply('https://www.reddit.com/' + args);
        message.react("<:reddit:887361210692026418>");

    } else if (command == 'youtube') {
        message.reply('https://www.youtube.com/' + args + " go check this out!");
        message.react("<:youtube:887361211031748719>");

    } else if (command === 'image') {
        client.commands.get('image').execute(message, args);

    } else if (command === 'play') {
        client.commands.get('play').execute(message, args, Discord);

    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);

    } else if (command === 'turnoff') {
        if (args.join(" ") == password) {
            message.reply('Goodbye! 💔');
            message.react('😢');
            setTimeout(function () {
                process.exit();
            }, 3000);
        }

        else {
            message.reply('Enter the password!');
            message.react('❌');
        }

    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);

    } else if (command === 'command') {
        client.commands.get('command').execute(message, args, Discord);

    } else if (command == 'whoppa') {
        message.reply('DID U GET A WHOPPA? :hamburger:');

    } else if (command === '.') {
        client.commands.get('.').execute(message.args);

    } else if (command === '..') {
        client.commands.get('..').execute(message.args);

    } else if (command === 'dumbrate') {
        client.commands.get('dumbrate').execute(message, args, Math, Discord)

    } else if (command === 'rps') {
        client.commands.get('rps').execute(message, args)
    }

    else if (command === 'help') {
        message.reply('This bot is made with <:JsLogo:864098557954490418>! Please read our documentation here:')
    }

    else if (command === '8ball') {
        client.commands.get('8ball').execute(message, args)
    }

    else if (command === 'ratio') {
        client.commands.get('ratio').execute(message, args, Discord, client)
    }

    else if (command === 'assist') {
        client.commands.get('assist').execute(message, args)
    }

    else if (command === 'rob') {
        message.reply('pls rob ' + args)
    }

    else if (command === 'google') {
        google('node.js best practices', function (err, res) {
            if (err) return console.error(err)

            for (var i = 0; i < res.links.length; ++i) {
                var link = res.links[i];
                console.log(link.title + ' - ' + link.href)
                console.log(link.description + "\n")
            }
        })
        //client.commands.get('google').execute(message, args, Discord)
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
        message.reply('Success! ❤')
    }

    else if (command === 'thread') {
        client.commands.get('thread').execute(message, args, Discord)
    }

    else if (command === 'version') {
        message.reply(`MuckBot 2021 © \nVersion: 0.9.0 unreleased`)
    }

    else if (command === 'info') {
        message.reply('**Info** \nThis bot was created by SpikySpike#5298. The work started at July 2021. \nThe bot is not yet released.')
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

    else if (command == 'github') {
        message.reply('https://github/' + args);
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
        message.reply('hello')
            .then((msg) => {
                setTimeout(function () {
                    msg.edit('IT FINALLY PINGED WOO @everyone');
                    message.channel.send('@everyone')
                }, 100000)
            });
    }

    else if (command == 'rate') {
        message.reply("Like this bot? 😉");
        sentMessage.react('👍');
        sentMessage.react('👎');
    }

    else if (command === "casino") {
        client.commands.get('casino').execute(message, args)
    }

    else if (command == 'priv') {
        //Interaction.reply({ephemeral: true})
    }

    else if (command == 'guess-game') {
        var vars = ['car', 'house', 'cat', 'fish']

        var guess = vars[Math.floor(Math.random() * vars)]

        if (!args[0]) {
            message.reply('Argument needed!');
        }

        else if ((args[0]).toLowerCase() = 'cat') {
            //cant code wow

        }
    }

    else if (command === 'robux') {
        client.commands.get('robux').execute(message, args, Discord)
    }

    else if (command == 'emojify') {
        let args = message.content.split(' ');

        for (args.length < 10; args++;) {
            message.reply(`:regional_indicator_${args}:`)
        }
    }

    else if (command === 'split') {
        let args = message.content.split().join(' ');

        message.reply(`${args}\n\n          - **${message.author.username}**`)
    }

    else if (command == 'tlc') {
        message.reply(args.join(" ").toLowerCase())
    }

    else if (command == 'dox') {
        let user = message.mentions.users.first();
        var ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));

        if (!args[0]) {
            message.reply('Who do you want to dox?'),
                message.react('🖲')
        }

        if (user) {
            message.reply(`<@${user.id}>'s IP adress is: ` + '`' + ip + '`'),
                message.react('✔');
            /*
            setTimeout(function () {
                Client.message.edit('`Complete!`')
                setTimeout(function () {
                    Client.message.edit(`<@${user.id}>'s IP adress is: ` + '`' + ip + '`'),
                    message.react('✔');
                }, 700)
            }, 1000)
            */
        }
    }

    else if (command === 'file') {
        client.commands.get('file').execute(message, args)
    }
});

client.login(process.env.DISCORD_TOKEN);

var user = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

