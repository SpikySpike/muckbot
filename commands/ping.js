var { messageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.messageEmbed()
        .setColor('#eb3434')
        .setTitle('Latency Test 🏓')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription('Test Latency!')
        .setFooter(args);
        
        message.channel.send(newEmbed)
    }
}