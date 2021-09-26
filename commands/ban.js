const { Canvas } = require('canvas');

module.exports = {
    name: 'ban',
    description: 'You can ban members with this command.',
    execute(message, args, Discord) {
        const user = message.mentions.users.first();
        const memberAvatar = user.displayAvatarURL({ dynamic: true });
        const banImage = '../img/banIcon.png'

        const banImageCanvas = new Canvas(600, 600)
            .printImage(avatarAvatar, 0, 0, 600, 600)
            .printImage(banImage, 0, 0, 512, 512)
            .toBuffer();

        const banEmbed = new Discord.MessageEmbed()
            .setColor('#D70404')
            .setTitle(`**${user}** got banned by **${message.author.username}**!`)
            .setDescription(`**Reason**: ${args.join(' ')}`)
            .setImage(banImageCanvas)
            .setTimestamp()

        console.info("roles", message.user.roles.cache);
        if (user && message.member.hasPermission('ADMINISTRATOR')) {
            const memberTarget = message.mentions.users.first();
            memberTarget.ban();
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