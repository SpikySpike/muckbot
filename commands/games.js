const { DiscordTogether } = require('discord-together');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'games',
    description: 'play games with others!',
    execute(message, args, Discord, client) {
        client.discordTogether = new DiscordTogether(client);

        const chessColors = ['#FFFFFF', '#000000'];
        const chessColorRandom = Math.floor(Math.random() * chessColors.length)

        if (args[0] === 'poker') {
            if (message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                    const pokerEmbed = new Discord.MessageEmbed()
                        .setColor('#35654D')
                        .setTitle('♣ Poker')
                        .setURL(`${invite.code}`)
                        .setDescription(`Play Poker with others!`)
                        .setTimestamp()

                    const pokerBtn = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('Play Poker')
                                .setStyle('LINK')
                                .setURL(`${invite.code}`)
                        );

                    return message.reply({ content: `Click the link to play!`, embeds: [pokerEmbed], components: [pokerBtn] });
                });
            }
            else return message.reply('You have to be in a voice channel to play `poker`!')
        }

        else if (args[0] === 'chess') {
            if (message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
                    const chessEmbed = new Discord.MessageEmbed()
                        .setColor(`${chessColorRandom}`)
                        .setTitle('♟ Chess')
                        .setURL(`${invite.code}`)
                        .setDescription(`Play Chess with others!`)
                        .setTimestamp()

                    const chessBtn = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('Play Chess')
                                .setStyle('LINK')
                                .setURL(`${invite.code}`)
                        );

                    return message.reply({ content: `Click the link to play!`, embeds: [chessEmbed], components: [chessBtn] });
                });
            }
            else return message.reply('You have to be in a voice channel to play `chess`!')
        }

        else if (args[0] === 'fishing' || args[0] === 'fishington') {
            if (message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
                    const fishingEmbed = new Discord.MessageEmbed()
                        .setColor(`#4782FF`)
                        .setTitle('🐟 Fishington')
                        .setURL(`${invite.code}`)
                        .setDescription(`Play Fishington with others!`)
                        .setTimestamp()

                    const fishingBtn = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('Play Fishington')
                                .setStyle('LINK')
                                .setURL(`${invite.code}`)
                        );

                    return message.reply({ content: `Click the link to play!`, embeds: [fishingEmbed], components: [fishingBtn] });
                });
            }
            else return message.reply('You have to be in a voice channel to play `fishington`!')
        }

        else if (args[0] === 'youtube' || args[0] === 'yt') {
            if (message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                    const ytEmbed = new Discord.MessageEmbed()
                        .setColor(`#ff1f1f`)
                        .setTitle('📺 YouTube')
                        .setURL(`${invite.code}`)
                        .setDescription(`Watch YouTube with others!`)
                        .setTimestamp()

                    const ytBtn = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel('Watch YouTube')
                                .setStyle('LINK')
                                .setURL(`${invite.code}`)
                        );

                    return message.reply({ content: `Click the link to watch together!`, embeds: [ytEmbed], components: [ytBtn] });
                });
            }
            else return message.reply('You have to be in a voice channel to watch `youtube`!')
        }

        else if (!args[0]) return message.reply('What games do you want to play? The list:\n・ `poker`\n・ `chess`\n・ `fishing`\n・ `youtube`')
    }
}