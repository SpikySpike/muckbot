module.exports = {
    name: 'avatar',
    description: 'profile picture',
    async execute(message, args, Discord) {
        const user = message.mentions.users.first();

        const avatarEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**'s Profile Picture!`)
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 1024 }));

        if (user) {
            const avatarEmbedUser = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`**${user.username}**'s Profile Picture!`)
                .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }));

            message.reply({ embeds: [avatarEmbedUser] })
        }

        else {
            message.reply({ embeds: [avatarEmbed] })
        }
    }
}
