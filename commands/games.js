const { DiscordTogether } = require('discord-together');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'games',
    description: 'play games with others!',
    execute(message, args, Discord, client) {
        client.discordTogether = new DiscordTogether(client);
        
        const pokerSymbs = ['♠', '♣', '♥', '♦'];
        const pokerSymbRandom = pokerSymbs[Math.floor(Math.random() * pokerSymbs.length)];
        const pokerColors = ['#ededed', '#35654d', '#ff4638', '#3870ff', '#13ad3f', '#292929'];
        const pokerColorRandom = pokerColors[Math.floor(Math.random() * pokerColors.length)]
        const chessColors = ['#FFFFFF', '#000000'];
        const chessColorRandom = chessColors[Math.floor(Math.random() * chessColors.length)];
        const gamesAll = [
            'poker', 'pokernight',
            'chess', 'parkchess',
            'fishington', 'fishing', 'fish', 
            'youtube', 'yt', 
            'betrayal', 'betr', 
            'lettertile', 'lt',
            'wordsnack', 'ws',
            'doodlecrew', 'dc'
        ];
        const note = "\n\n\n**Note:** These games can only be played on a PC, and require Voice Channels!";

        try {
            if (args[0] === 'poker' || args[0] === 'pokernight') {
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                        const pokerEmbed = new Discord.MessageEmbed()
                            .setColor(`${pokerColorRandom}`)
                            .setTitle(`${pokerSymbRandom} Poker`)
                            .setURL(`${invite.code}`)
                            .setDescription(`Play Poker with others!`)
                            .setTimestamp()
    
                        const pokerBtn = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setLabel('Play Poker')
                                    .setStyle('LINK')
                                    .setURL(`${invite.code}`)
                                    .setEmoji(pokerSymbRandom)
                            );
    
                        return message.reply({ content: `Click the link to play!`, embeds: [pokerEmbed], components: [pokerBtn] });
                    });
                }
                else return message.reply('You have to be in a voice channel to play `poker`!')
            }
    
            else if (args[0] === 'chess' || args[0] === 'parkchess') {
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
                                    .setEmoji('♟')
                            );
    
                        return message.reply({ content: `Click the link to play!`, embeds: [chessEmbed], components: [chessBtn] });
                    });
                }
                else return message.reply('You have to be in a voice channel to play `chess`!')
            }
    
            else if (args[0] === 'fishington' || args[0] === 'fishing' || args[0] === 'fish') {
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
                        const fishingEmbed = new Discord.MessageEmbed()
                            .setColor(`#4782FF`)
                            .setTitle('🎣 Fishington')
                            .setURL(`${invite.code}`)
                            .setDescription(`Play Fishington with others!`)
                            .setTimestamp()
    
                        const fishingBtn = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setLabel('Play Fishington')
                                    .setStyle('LINK')
                                    .setURL(`${invite.code}`)
                                    .setEmoji('🎣')
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
                                    .setEmoji('📺')
                            );
    
                        return message.reply({ content: `Click the link to watch together!`, embeds: [ytEmbed], components: [ytBtn] });
                    });
                }
                else return message.reply('You have to be in a voice channel to watch `youtube`!')
            }
    
            else if (args[0] === 'betrayal' || args[0] === 'betr') {
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
                        const betrEmbed = new Discord.MessageEmbed()
                            .setColor(`#ff3b3b`)
                            .setTitle('🔪 Betrayal')
                            .setURL(`${invite.code}`)
                            .setDescription(`Play Betrayal with others!`)
                            .setTimestamp()
    
                        const betrBtn = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setLabel('Play Betrayal')
                                    .setStyle('LINK')
                                    .setURL(`${invite.code}`)
                                    .setEmoji('🔪')
                            );
    
                        return message.reply({ content: `Click the link to play!`, embeds: [betrEmbed], components: [betrBtn] });
                    });
                }
                else return message.reply('You have to be in a voice channel to play `betrayal`!')
            }
    
            else if (args[0] === 'lettertile' || args[0] === 'lt') {
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
                        const ltEmbed = new Discord.MessageEmbed()
                            .setColor(`#d1b982`)
                            .setTitle('<:lettertile:893485775960805416> Letter Tile')
                            .setURL(`${invite.code}`)
                            .setDescription(`Play Letter Tile with others!`)
                            .setTimestamp()
    
                        const ltBtn = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setLabel('Play Letter Tile')
                                    .setStyle('LINK')
                                    .setURL(`${invite.code}`)
                                    .setEmoji('<:lettertile:893485775960805416>')
                            );
    
                        return message.reply({ content: `Click the link to play!`, embeds: [ltEmbed], components: [ltBtn] });
                    });
                }
                else return message.reply('You have to be in a voice channel to play `lettertile`!')
            }
    
            else if (args[0] === 'wordsnack' || args[0] === 'ws') {
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
                        const wsEmbed = new Discord.MessageEmbed()
                            .setColor(`#d1b982`)
                            .setTitle('<:wordsnack:893489674432172033> Word Snack')
                            .setURL(`${invite.code}`)
                            .setDescription(`Play Word Snack with others!`)
                            .setTimestamp()
    
                        const wsBtn = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setLabel('Play Word Snack')
                                    .setStyle('LINK')
                                    .setURL(`${invite.code}`)
                                    .setEmoji('<:wordsnack:893489674432172033>')
                            );
    
                        return message.reply({ content: `Click the link to play!`, embeds: [wsEmbed], components: [wsBtn] });
                    });
                }
                else return message.reply('You have to be in a voice channel to play `wordsnack`!')
            }
    
            else if (args[0] === 'doodlecrew' || args[0] === 'dc') {
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite => {
                        const dcEmbed = new Discord.MessageEmbed()
                            .setColor(`RANDOM`)
                            .setTitle('🖌 Doodle Crew')
                            .setURL(`${invite.code}`)
                            .setDescription(`Play Doodle Crew with others!`)
                            .setTimestamp()
    
                        const dcBtn = new MessageActionRow()
                            .addComponents(
                                new MessageButton()
                                    .setLabel('Play Doodle Crew')
                                    .setStyle('LINK')
                                    .setURL(`${invite.code}`)
                                    .setEmoji('🖌')
                            );
    
                        return message.reply({ content: `Click the link to play!`, embeds: [dcEmbed], components: [dcBtn] });
                    });
                }
                else return message.reply('You have to be in a voice channel to play `doodlecrew`!')
            }
    
            else if (!args[0] || args[0] != gamesAll) return message.reply(
                'What games do you want to play? The list:\n' + 
                '・ `poker`\n・ `chess`\n・ `fishington`\n・ `youtube`\n・ `betrayal`\n・ `lettertile`\n・ `wordsnack`\n・ `doodlecrew`' +
                note
            )    
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
        }
    }
}