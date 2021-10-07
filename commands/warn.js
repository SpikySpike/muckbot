const { channelMention } = require("@discordjs/builders");

module.exports = {
    name: 'warn',
    description: "warn someone",
    execute(message, args, Discord){
            const user = message.mentions.users.first();

            const warnEmbed = new Discord.MessageEmbed()
                    .setColor('#ffcd38')
                    .setTitle(`Warn from **${message.author.tag}**:`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Reason** ${args.join(' ')}`)
                    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()

        if (!user) {
            message.reply('Type in who do you want to warn!')
        }

        else if (args < 1) {
            message.reply('Type in who do you want to warn and a reason!')
        }

        else {
            message.channel.send({ embeds: [warnEmbed] })
        }
    }
}