module.exports = {
    name: 'robux',
    description: "FREE ROBUX",
    execute(message, args, Discord){
        const robuxEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Free Robux!')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription(`Do YOU like Robux? Well at least we do! CLICK HERE to get FREE ROBUX! 🤑`)
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Robux_2019_Logo_gold.svg/1200px-Robux_2019_Logo_gold.svg.png')
        .setTimestamp()
        
        message.reply({ embeds: robuxEmbed })
    }
}