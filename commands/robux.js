module.exports = {
    name: 'robux',
    description: "FREE ROBUX",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Free Robux!')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription(`Do YOU like Robux? Well at least we do! CLICK HERE to get FREE ROBUX!`)
        .setTimestamp()
        
        
        message.channel.send(newEmbed)
    }
}