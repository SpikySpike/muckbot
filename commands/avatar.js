module.exports = {
    name: 'avatar',
    description: 'profile picture',
    async execute(message, args, Discord) {
        //const user = getUserFromMention(args[0]);

        const avatarEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**${message.author.username}**'s Profile Picture!`)
        .setImage(message.author.displayAvatarURL({ dynamic: true, size: 1024 }));

        /*
        const avatarEmbedUser = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**${user.username}**'s Profile Picture!`)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }));*/

        message.reply({ embeds: [avatarEmbed] })
    }
}
