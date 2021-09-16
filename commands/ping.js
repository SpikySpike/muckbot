module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const pingEmbed = new Discord.MessageEmbed()
        .setColor('#eb3434')
        .setTitle('Latency Test 🏓')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setDescription(`🏓 Latency is **${Date.now() - message.createdTimestamp}ms**.`)
        .setFooter(args.join(" "));
        
        message.channel.send({ embeds: [pingEmbed] });
    }
}