const Discord = require('discord.js');
const google = require('google');
const { Canvas } = require('canvas-constructor/skia')
const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
require('@discordjs/voice');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const Twitter = require('Twitter');
const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ],
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const cooldowns = new Discord.Collection();
const db = require('quick.db');
const defaultPrefix = `m!`;
const fs = require('fs');
const { GuildMember, Message } = require('discord.js');
const TicTacToe = require('discord-tictactoe');
const { string } = require('mathjs');
const math = require('mathjs')
const tweet = require('./commands/tweet');
const dotenv = require('dotenv').config();
const game = new TicTacToe({ language: 'en' });
const { balances } = require("./balances.json");
const { Emoji } = require('discord.js');
const { channel } = require('diagnostics_channel');
const translate = require("translate");
const { shutdownPass } = require('./config.json');
const Minesweeper = require('discord.js-minesweeper');
const { weirdToNormalChars } = require('weird-to-normal-chars');
const zalgo = require('to-zalgo');
const banish = require('to-zalgo/banish');
const { setTimeout } = require('timers');
const clipboardy = require('clipboardy');
const { error, timeStamp } = require('console');
const botWords = 'test';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const activities = [
    "with the m!help command",
    "with the developers console",
    "with some code",
    "with JavaScript",
    "with Discord.JS",
    "with Canvas",
    "Discord Games",
    "Discord Poker",
    "Chess",
    "with Discord Embeds",
    "with config.json",
    "with creator's PC",
    "on creator's PC",
    "with files on creator's PC"
];

client.on('ready', () => {
    const readyEmbed = new Discord.MessageEmbed()
        .setColor('BLURPLE')
        .setTitle('Online!')
        .setDescription(`The bot is online! Enjoy!\n-----------\nServing **${client.guilds.cache.size}** guilds.`)
        .setTimestamp()

    console.log(`${client.user.tag} is online!`);
    client.user.setStatus('idle');
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const clientActivity = activities[randomIndex];

        client.user.setActivity(clientActivity + ` | Serving ${client.guilds.cache.size} guilds!`, {
            type: 'PLAYING'
        });
    }, 10000)

    let muckServer = client.guilds.cache.get('887353786094481428');
    let muckChannel = muckServer.channels.cache.get('887371661492494406');
    muckChannel.send({ embeds: [readyEmbed] });
});

client.on("guildCreate", guild => {
    guild.channels.cache.find(channel => channel.name === 'general').send(`Thanks for adding me to your server! You can use ${defaultPrefix}help to find commands! 💖`);
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on('guildMemberAdd', (member) => {
    const welcomeRole = member.guild.roles.cache.find(role => role.name === 'Member');
    const userAmount = guild.members.cache.filter(member => !member.user.bot).size;

    member.roles.add(welcomeRole);
    const welcomeChat = member.guild.channels.cache.get(channel => channel.name === "welcome")
    welcomeChat.send(`Welcome ${member.user} to our server! :anatomical_heart: You are **${userAmount}th** user!`);
});

client.on('guildMemberRemove', (member) => {
    const userAmount = guild.members.cache.filter(member => !member.user.bot).size;
    const welcomeLeaveChat = member.guild.channels.cache.get(channel => (
        channel.name === "welcome" ||
        channel.name === "leaves" ||
        channel.name === "welcome-and-leaves"
    ))

    welcomeLeaveChat.send(`${member.user.tag} left our server. Farewell!\nUser Count: ${userAmount}`);
    console.log(`${member.user.tag} left the ${guild.name} server.`)
});

client.on('messageCreate', message => {
    let muckServer = client.guilds.cache.get('887353786094481428');
    let muckChannel = muckServer.channels.cache.get('887371661492494406');

    if (!message.content.toLowerCase().startsWith(defaultPrefix) || message.author.bot) return;

    const args = message.content.slice(defaultPrefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const ownerId = (message.author.id === '733342027366006874');

    if (command < 1) {
        message.reply('You have to type in something!'), message.react('❌');
    }

    if (command === 'verify') {
        client.commands.get('verify').execute(message, args);

    } else if (command == 'hello') {
        message.reply('Hello ' + `<@${message.author.id}>` + '!');

    } else if (command == 'admin') {
        message.reply('https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825 ' + args);

    } else if (command == 'say') {
        const replies = ['Stop trying.', "If you can't tag everyone, why are you doing this?", 'If you do that a lot, you can result a ban!']
        const repliesRandom = replies[Math.floor(Math.random() * replies.length)]

        if (args.includes('@everyone')) return message.reply(`${repliesRandom}`), message.react('❌');
        else {
            message.channel.send(`${args.join(" ")}\n\n        - **${message.author.tag}**`);
        }

    } else if (command == 'spoiler') {
        message.reply('||' + args.join(" ") + '||');

    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);

    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);

    } else if (command == 'twitter' || command === 'twt') {
        message.reply('https://twitter.com/' + args);
        message.react("<:twitterlogo:883038337731010680>");

    } else if (command == 'reddit') {
        message.reply('https://www.reddit.com/' + args);
        message.react("<:reddit:887361210692026418>");

    } else if (command == 'youtube' || command === 'yt') {
        message.reply('https://www.youtube.com/' + args);
        message.react("<:youtube:887361211031748719>");

    } else if (command === 'img' || command === 'image') {
        client.commands.get('image').execute(message, args, Discord);

    } else if (command === 'play') {
        client.commands.get('play').execute(message, args, Discord);

    } else if (command === 'playfile') {
        client.commands.get('playfile').execute(message, args, Discord);

    } else if (command === 'stop') {
        client.commands.get('leave').execute(message, args);

    } else if (command === 'off' || command === 'shutdown') {
        if (args == shutdownPass) {
            message.reply('Goodbye! 💔');
            message.react('😢');
            setTimeout(function () {
                process.exit();
            }, 3000);
        }

        else if (!args[0]) {
            message.reply('Enter the password!'), message.react('❌');
        }

        else {
            message.reply('Wrong password!'), message.react('❌');
        }

    } else if (command === 'clear' || command === 'clean') {
        client.commands.get('clear').execute(message, args);

    } else if (command === 'command' || command === 'cmd') {
        client.commands.get('command').execute(message, args, Discord, command);

    } else if (command == 'whoppa') {
        message.reply('DID U GET A WHOPPA? :hamburger:');

    } else if (command === '.') {
        client.commands.get('.').execute(message.args);

    } else if (command === '..') {
        client.commands.get('..').execute(message.args);

    } else if (command === 'dumbrate' || command === 'dr') {
        client.commands.get('dumbrate').execute(message, args, Discord)

    } else if (command === 'rps') {
        client.commands.get('rps').execute(message, args)
    }

    else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord, clipboardy)
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
        client.commands.get('google').execute(message, args, Discord)
    }

    else if (command === 'warn') {
        client.commands.get('warn').execute(message, args, Discord)
    }

    else if (command === 'tweet') {
        client.commands.get('tweet').execute(message, args, Twitter)
    }

    else if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord)
    }

    else if (command === 'version') {
        message.reply(`MuckBot 2021 © \nVersion: 0.1.0 unreleased`)
    }

    else if (command === 'info') {
        message.reply('**Info** \nThis bot was created by SpikySpike#5298. The work on the bot started in July 2021.\nNot yet released.')
    }

    else if (command === 'ttt') {
        game.handleMessage(message);
    }

    else if (command == 'github') {
        message.reply('https://github.com/' + args);
        message.react("<:GitHub:864099758779924480>")
    }

    else if (command == 'edit') {
        if (!args) {
            message.reply('What do you want me to edit?')
        }

        else {
            message.reply(`This message will be edited to what ${message.author.username} says!`)
                .then((sentMessage) => {
                    setTimeout(function () {
                        sentMessage.edit(args.join(' '));
                    }, 5000)
                });
        }
    }

    else if (command == 'rate') {
        message.reply("Like this bot? 😉")
            .then(function (message) {
                message.react("👍")
                message.react("👎")
            })
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
        message.reply('```' + args.join(" ").toLowerCase() + '```')
    }

    else if (command == 'tuc') {
        message.reply('```' + args.join(" ").toUpperCase() + '```')
    }

    else if (command == 'ip' || command == 'dox') {
        client.commands.get('ip').execute(message, args, Discord)
    }

    else if (command === 'file') {
        client.commands.get('file').execute(message, args, fs)
    }

    else if (command === 'announce') {
        try {
            message.guild.cache.forEach(guild => {
                try {
                    const channel = guild.channels.cache.find(channel => channel.name === 'announcements') || guild.channels.cache.first();
                    if (channel) {
                        channel.send(args.join(" "));
                    } else {
                        console.log('The server ' + guild.name + ' has no channels with the name: ' + channel.name);
                    }
                } catch (err) {
                    console.log('Could not send message to ' + guild.name + '.');
                }
            });
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
        }

        /*
        message.guild.channels.cache.forEach(guild => {
            try {
                const channel = guild.channels.cache.find(channel => channel.name === 'announcements') || guild.channels.cache.first();
                if (channel) {
                    channel.send(args.join(" "));
                } else {
                    console.log('The server ' + guild.name + ' has no channels with the name: ' + channel.name);
                }
            } catch (err) {
                console.log('Could not send message to ' + guild.name + '.');
            }
        });
        */
    }

    else if (command === 'math') {
        client.commands.get('math').execute(message, args, Discord, math)
    }

    else if (command === 'ccreate') {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            message.guild.channels.create(args, {
                type: 'GUILD_TEXT',
                reason: 'new channel',
                nsfw: true,
            })
        }

        else if (!message.member.permissions.has('ADMINISTRATOR')) {
            message.reply("You don't have right permissions to create channels!")
        }
    }

    else if (command === '') {
        const fetchedChannel = channel({ type: 'TEXT_CHANNEL' })

        if (args[0] === 'nsfw') {
            if (args[1]) {
                fetchedChannel.set({ nsfw: !channel.nsfw });
                message.reply(`Successfully set ${args} to NSFW!`), message.react('<:tick:889135012253954058>');
            }
            else {
                message.reply("Please include the channel you want to set NSFW!"), message.react('❌');
            }
        }

        else if (args[0] === 'delete') {
            if (args[1]) {
                fetchedChannel.delete();
                message.reply(`Successfully deleted channel ${args}`), message.react('<:tick:889135012253954058>');
            }
            else {
                message.reply("Please include the channel you want to delete!"), message.react('❌');
            }
        }
    }

    else if (command === 'translate') {
        client.commands.get('translate').execute(message, args, Discord, translate)
    }

    else if (command === '') {
        client.commands.get('rdsg').execute(message, args, Discord)
    }

    else if (command === 'music') {
        try {
            message.reply('not working')
            //client.commands.get('music').execute(message, args, Discord)
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
            client.users.get(ownerId).send(err.stack)
        }
    }

    else if (command === 'site') {
        if (!args[0]) return message.reply('You have to insert website link!'), message.react('❌');

        else {
            message.reply(`https://${args[0]}/`)
        }
    }

    else if (command === 'code') {
        if (!args[0]) {
            message.reply('You need to insert programming language!'), message.react('❌');
        }
        else if (!args[1]) {
            message.reply('You need to insert the code!'), message.react('❌');
        }
        else {
            message.reply('```' + args[0] + '\n' + args.join(' ') + '\n```')
        }
    }

    else if (command === 'trigger' || command === 'triggered') {
        client.commands.get('trigger').execute(message, args, Discord)
    }

    else if (command === 'canvas') {
        client.commands.get('canvas').execute(message, args, Discord, Canvas)
    }

    else if (command === 'avatar' || command === 'pfp' || command === 'pfpic') {
        client.commands.get('avatar').execute(message, args, Discord)
    }

    else if (command === 'dm') {
        const user = message.mentions.users.first()

        if (!args) {
            message.reply('What do you want me to DM?')
        }
        else if (user) {
            if (!args[1]) {
                message.reply('You have to type in what you want me to DM!')
            }
            else {
                message.react('👍')
                message.reply(`DMing ${user.username}...`)
                user.send(`**${message.author.username}** from **${message.guild.name}** sent you a DM: ${args.join(' ')}`)
            }
        }
        else {
            message.react('👍')
            message.author.send(`Message: ${args.join(' ')}`)
        }
    }

    else if (command === 'anondm') {
        const user = message.mentions.users.first()

        if (!args) {
            message.reply('What do you want me to DM?')
        }
        else if (user) {
            if (!args[1]) {
                message.reply('You have to type in what you want me to DM!')
            }
            else {
                message.react('👍')
                message.reply(`Anonymously DMing ${user.username}...`).then(msg => {
                    setTimeout(() => msg.delete(), 3000)
                    setTimeout(function () {
                        message.delete()
                    }, 3000);
                })
                user.send(`**Anonymous** from **${message.guild.name}** sent you a DM: ${args.join(' ')}`)
            }
        }
    }

    else if (command === 'minesweeper' || command === 'ms') {
        const minesweeper = new Minesweeper();
        minesweeper.start();
        message.reply('This command is in progress!'), message.react(':gear:')
    }

    else if (command === 'calculator' || command === 'calc') {
        client.commands.get('calc').execute(message, args, Discord)
    }

    else if (command === 'fight' || command === 'battle') {
        client.commands.get('fight').execute(message, args, Discord)
    }

    else if (command === 'wupb') {
        client.commands.get('wupb').execute(message, args, Discord)
    }

    else if (command === 'trivia') {
        client.commands.get('trivia').execute(message, args, Discord)
    }

    else if (command === 'snake') {
        client.commands.get('snake').execute(message, args, Discord)
    }

    else if (command === 'btn') {
        client.commands.get('btn').execute(message, args, Discord, MessageActionRow, MessageButton)
    }

    else if (command === 'gifme') {
        client.commands.get('gifme').execute(message, args, Canvas)
    }

    else if (command === 'games') {
        client.commands.get('games').execute(message, args, Discord, client)
    }

    else if (command === 'private') {
        try {
            message.guild.members.forEach(member => {
                if (member.id != client.user.id && !member.user.bot) return member.createDM.send(args.join(' '))
            });
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
            console.log(err.stack)
        }
    }

    else if (command === 'uptime') {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`;

        message.reply("I'm online for " + uptime)
    }

    else if (command === 'time') {
        const dateUTC = Date.UTC(1, 1, 1)

        message.reply(`Time is: ${dateUTC}`)
    }

    else if (command === 'gif') {
        client.commands.get('gif').execute(message, args, Discord)
    }

    else if (command === 'wtn' || command === 'weirdtonormal') {
        const result = weirdToNormalChars(args.join(' '))

        if (!args[0]) {
            message.reply('You have to type in the text you want to change!'), message.react('❌')
        }
        else {
            message.reply(result)
        }
    }

    else if (command === 'inttest') {
        const number = args[0];
        const stopCmds = ['stop', 'off', 'turnoff', 'off'];

        if (isNaN(number)) {
            message.reply('The argument is not a real number!')
        }
        else if (!number) {
            message.reply('Provide a number!')
        }
        else if (number) {
            if (message.author.id = '733342027366006874') {
                setInterval(() => {
                    message.reply('Looped Message: `Every `' + number + '`seconds. (JavaScript: 1s = 1000)`');
                    if (message.content.includes(stopCmds)) {
                        clearInterval();
                        message.reply('Stopped!');
                    }
                }, args[0]);
            }
            else {

            }
        }
    }

    else if (command === 'sayan') {
        if (!args[0]) {
            message.reply('What do you want me to say?')
        }
        else {
            message.delete();
            message.channel.send(args.join(' '))
        }
    }

    else if (command === 'pc') {
        if (ownerId) {
            if (!fs.existsSync(`${process.env.ROOT_DIR}/${args.join(' ')}`)) {
                message.reply("No such file or directory!"), message.react('❌');
            }
            else {
                message.reply({ content: '📂 ' + '`./' + args.join(' ') + '`' + ' file', files: [`${process.env.ROOT_DIR}/` + args.join(' ')] }),
                    message.react('📁');
            }
        }
        else {
            if (!fs.existsSync(`./${args.join(' ')}`)) {
                return message.reply("No such file or directory!"), message.react('❌');
            }
            else if (!fs.existsSync(`./${args.join(' ')}`)) {
                return message.reply("No such file or directory!"), message.react('❌');
            }
        }
    }

    else if (command === 'zalgo') {
        const zalgoArgs = zalgo(args.join(' '))
        message.reply('`' + zalgoArgs + '`')
    }

    else if (command === 's2') {
        function argsReplace() {
            var argsRepl = args.join(' ');
            var argsNew = argsRepl.replace(/ /g, "-");

            message.reply(argsNew)
        }
    }

    else if (command === 'letters') {
        var reply = "";

        for (var char of args.join(' ').toLowerCase()) {
            if ("abcdefghijklmnopqrstuvwxyz".includes(char)) {
                reply += `:regional_indicator_${char}: `;
            }

            else {
                if (char === ' ') {
                    reply += '    '
                }

                else {
                    reply += char
                }
            }
        }

        message.channel.send(reply.trimEnd());
    }

    else if (command === 'tts') {
        message.channel.send({ content: args.join(' '), tts: true })
    }

    else if (command === 'suggest') (
        client.commands.get('suggest').execute(message, args, Discord, client)
    )

    else if (command === 'bpm') (
        client.commands.get('bpm').execute(message, args, Discord)
    )

    else if (command === 'test') {
        client.commands.get('test').execute(message, args, Discord, client)
    }

    else if (command === 'epicmeme') {
        message.channel.send('Roses are red')
        setTimeout(() => {
            message.channel.send('Violets are blue')
            setTimeout(() => {
                message.channel.send('Unexpected `{` in ./index.js:32:14')
            }, 1000);
        }, 1000);
    }

    else if (command === 'debug') {
        if (ownerId) {
            message.reply('Debugging...')
            console.debug()
        }
    }
})

client.login(process.env.DISCORD_TOKEN);
