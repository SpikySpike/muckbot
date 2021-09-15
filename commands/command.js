module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord){
        args.join(" ");
        const testEmbed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle(args)
        .setURL('https://www.youtube.com/channel/UCmWj2jCeTgjTSFvqNjUDywg')
        .setDescription(args)
        .addFields(
            {name: args, value: args},
            {name: args, value: args},
            {name: args, value: args},
            {name: args, value: args},
        )
        .setFooter(args)
        
        message.channel.send(testEmbed)
    }
}