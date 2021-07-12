module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#B6FCD5')
        .setTitle('Rules')
        .setURL('https://www.youtube.com/channel/UCmWj2jCeTgjTSFvqNjUDywg')
        .setDescription('Embed for rules!')
        .addFields(
            {name: 'Rule 1', value: "sub to yt ples"},
            {name: 'Rule 2', value: "follow twitch UwU"},
            {name: 'Rule 3', value: "no memes in #general"},
            {name: 'Rule 4', value: "deez nuts"},
        )
        .setImage('https://tenor.com/view/twitter-users-twitter-twitter-account-waiting-for-memes-twitter-users-are-monkeys-gif-19091814')
        .setFooter("Make sure to check out the rules!!!!!");
        
        message.channel.send(newEmbed)
    }
}