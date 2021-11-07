module.exports = {
    name: 'ban',
    description: 'You can ban members with this command.',
    execute(message, args, Discord) {
        const user = message.mentions.users.first();
        const memberAvatar = user.displayAvatarURL({ dynamic: true });
        const banImage = '../img/banIcon.png'

        const banEmbed = new Discord.MessageEmbed()
            .setColor('#D70404')
            .setTitle(`**${user}** got banned by **${message.author.username}**!`)
            .setDescription(`**Reason**: ${args.join(' ')}`)
            .setThumbnail(memberAvatar)
            .setTimestamp()

        if (message.member.permissions.has('ADMINISTRATOR')) {
            const memberTarget = message.mentions.users.first();
            memberTarget.
            message.reply({ embeds: [banEmbed] });
        }
        else if (!args[0]) {
            message.reply("You have to type in who do you want to ban!");
        }


        else {
            message.reply("I couldn't ban that user, or you don't have permissions to ban members.");
        }
    }
}