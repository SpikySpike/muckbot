const { DiscordTogether } = require('discord-together');

module.exports = {
    name: 'games',
    description: 'play games with others!',
    execute(message, args, Discord, client) {
        client.discordTogether = new DiscordTogether(client);

        const chessColors = ['#FFFFFF', '#000000'];
        const chessColorRandom = Math.floor(Math.random() * chessColors.length)

        if (args[0] === 'poker') {
            /*
            const pokerEmbed = new Discord.MessageEmbed()
                .setColor('#35654D')
                .setTitle('♣ Poker')
                .setURL(`${invite.code}`)
                .setDescription(`Play Poker with others!`)
                .setTimestamp()*/

            if (message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                    const pokerEmbed = new Discord.MessageEmbed()
                        .setColor('#35654D')
                        .setTitle('♣ Poker')
                        .setURL(`${invite.code}`)
                        .setDescription(`Play Poker with others!`)
                        .setTimestamp()

                    return message.reply({ content: `Click the link to play!`, embeds: [pokerEmbed], components: [] });
                });
            }
            else return message.reply('You have to be in a voice channel to play `poker`!')
        }

        else if (args[0] === 'chess') {
            /*
            const chessEmbed = new Discord.MessageEmbed()
                .setColor(`${chessColorRandom}`)
                .setTitle('♟ Chess')
                .setURL(`${invite.code}`)
                .setDescription(`Play Chess with others!`)
                .setTimestamp()*/

            if (message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
                    const chessEmbed = new Discord.MessageEmbed()
                        .setColor(`${chessColorRandom}`)
                        .setTitle('♟ Chess')
                        .setURL(`${invite.code}`)
                        .setDescription(`Play Chess with others!`)
                        .setTimestamp()

                    return message.reply({ content: `Click the link to play!`, embeds: [chessEmbed], components: [] });
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

                    return message.reply({ content: `Click the link to play!`, embeds: [fishingEmbed], components: [] });
                });
            }
            else return message.reply('You have to be in a voice channel to play `fishington`!')
        }

        else if (!args[0]) return message.reply('What games do you want to play? The list:\n・ `poker`\n・ `chess`\n・ `fishing`')
    }
}