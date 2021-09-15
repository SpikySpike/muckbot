module.exports = {
    name: 'dumbrate',
    description: "dumbrate",
    execute(message, args, Math, Discord){
        const dumbEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('dumbr8 machine')
        .setDescription('You are' + number + '% dumb.')

        const dumbEmbed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('dumbr8 machine')
        .setDescription(user.username + ' is ' + number + '% dumb.')

        let number = Math.floor(Math.random() * 101);
        if (!args[1]) {
            return message.lineReply(dumbEmbed);
        } else if (args[1]) {
            let user = message.mentions.user.first();
            if (user) {
                message.lineReply(dumbEmbed2)
            }
        }
    }
}