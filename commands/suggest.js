const { MessageReaction } = require("discord.js");

module.exports = {
    name: 'suggest',
    description: 'suggs',
    async execute(message, args, Discord, client) {
        const suggChannel = message.guild.channels.cache.find(c => c.name.includes('suggestions'));
        if (!suggChannel) return message.reply("The `#suggestions` channel doesn't exist!"), message.react('❌');
        const reportEmoji = '❌';

        const suggEmbed = new Discord.MessageEmbed()
            .setColor('#57F287')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(args.join(' '))

        const suggEmbedRejected = new Discord.MessageEmbed()
            .setColor('#ed2d1f')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(args.join(' ') + '\n\nREJECTED')

        if (suggChannel) {
            if (!args[0]) {
                message.reply('You have to type in what do you want to suggest!')
            }
            else if (args) {
                suggChannel.send({ embeds: [suggEmbed] })
                    .then((msg => {
                        msg.react('👍');
                        msg.react('👎');
                        msg.react(`${reportEmoji}`);
                        message.delete();
                    })).catch((err) => {
                        message.reply('⚠ Error:' + '```' + err + '```')
                        console.log(err.stack)
                    })
            }
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel == suggChannel) {
                if (reaction.emoji.name === reportEmoji) {
                    message.edit({ embeds: [suggEmbedRejected] })
                    await suggChannel.send(`${message.author.tag} has been successfully reported.`);
                    setTimeout(() => {
                        message.delete();
                    }, 10000);
                }
                else {
                    return;
                }
            }
        })
    }
}