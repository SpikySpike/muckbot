module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord){
        const testEmbed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Test Embed!')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('Test Description!')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter('Test Footer!', 'https://discordjs.guide/meta-image.png')
        
        message.channel.send({ embeds: [testEmbed] })
    }
}