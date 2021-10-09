module.exports = {
    name: "command",
    description: "description",
    execute(message, args, Discord) {
        const cmdEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('title')
            .setURL('https://discord.js.org/')
            .setAuthor('name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('description')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
                { name: 'title', value: 'value', inline: false },
            )
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp('timestamp')
            .setFooter('footer', 'https://i.imgur.com/wSTFkRM.png');
        
            message.reply({ embeds: [cmdEmbed] });
    }
}