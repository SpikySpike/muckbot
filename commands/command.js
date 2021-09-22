module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord){
        const testEmbed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Test Embed!')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('Test Description!')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png')
        .setTimestamp()
        .setFooter('Test Footer!', 'https://discordjs.guide/meta-image.png')
        
        message.channel.send({ embeds: [testEmbed]})
    }
}