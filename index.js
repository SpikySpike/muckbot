const Discord = require('discord.js');
const google = require('google');
const { Canvas } = require('canvas-constructor/skia')
const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
require('@discordjs/voice');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
var Twitter = require('Twitter');
require('discord-reply');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const db = require('quick.db');
const prefix = `m!`;
const prefixSecondary = "m1";
const fs = require('fs');
const minigames = require('discord-minigames');
const { ISpy } = require('discord-minigames')
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
const Weky = require('weky')

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

client.on("guildCreate", guild => {
    guild.channels.cache.find(channel => channel.name === 'general').send(`Thanks for adding me to your server! You can use ${prefix}help to find commands! 💖`);
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(channel => channel.name === "welcome").send(`Welcome ${guildMember.user} to our server! :anatomical_heart:`);
});

client.on('messageCreate', message => {

    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

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
            message.channel.send(`${args.join(" ")}\n\n        - ***${message.author.username}***`);
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

    } else if (command === 'playfiles') {
        client.commands.get('playfiles').execute(message, args, Discord);

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
        client.commands.get('command').execute(message, args, Discord);

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
		const helpBtn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Command List!')
                    .setStyle('LINK')
					.setURL('https://github.com/spikyspike/muckbot/')
            );
		
        message.reply({ content: 'Full command list: https://github.com/spikyspike/muckbot/', components: [helpBtn] })
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
        message.react(`<${args}>`);
        message.reply(`<${args}>`)
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

    else if (command === 'ispy') {
        let member = message.mentions.members.first()
        let ISpy = new minigames.ISpy(message)

        if (!args[0]) {
            message.reply("Who do you want to I-Spy?"), message.react('❓');
        }

        else {
            ISpy.startISpy(member).catch(err => {
                console.log(err)
                message.channel.send(err.message)
            })
        }
    }

    else if (command === 'ttt') {
        game.handleMessage(message);
    }

    else if (command == 'github') {
        message.reply('https://github.com/' + args);
        message.react("<:GitHub:864099758779924480>")
    }

    else if (command == '') {
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

    else if (command === "casino") {
        client.commands.get('casino').execute(message, args)
    }

    else if (command == 'priv') {
        //Interaction.reply({ephemeral: true})
        message.reply({ content: 'private message', ephemeral: true })
    }

    else if (command == 'guess-game') {
        var vars = ['car', 'house', 'cat', 'fish']
        var item = vars[Math.floor(Math.random() * vars.length)];

        if (!args[0]) {
            message.reply("Please guess either car, house, cat or fish");
            return;
        }

        var guess = args[0];

        if (!(guess in vars)) {
            message.reply("Invalid guess. Please include either car, house,cat oor rish");
            return;
        }

        if (guess === item) {
            message.reply("You guessed correctly!");
            message.react('🎉');
        }

        else {
            message.reply("Wrong one, man."), message.react('👎');
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
        message.reply('```' + args.join(" ").toLowerCase() + '```')
    }

    else if (command == 'tuc') {
        message.reply('```' + args.join(" ").toUpperCase() + '```')
    }

    else if (command == 'dox' || command == 'ip') { 
        client.commands.get('ip').execute(message, args, Discord)
    }

    else if (command === 'file') {
        client.commands.get('file').execute(message, args, fs)
    }

    else if (command === 'announce') {


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
        client.commands.get('music').execute(message, args, Discord)
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
    /*
    else if (command === 'button' || command === 'btn') {
        client.command.get('button').execute(message, args)
    }*/

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
                user.send(`**${message.author.username}** sent you a DM: ${args.join(' ')}`)
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
                user.send(`**Anonymous** sent you a DM: ${args.join(' ')}`)
            }
        }
        else {
            message.react('👍')
            message.author.send(`Message: ${args.join(' ')}`)
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

    else if (command === 'weather') {
        client.commands.get('weather').execute(message, args)
    }
});

client.login(process.env.DISCORD_TOKEN);

var twitterUser = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

