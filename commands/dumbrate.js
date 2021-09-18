module.exports = {
    name: 'dumbrate',
    description: "dumbrate",
    execute(message, args, Math, Discord){
        /*
        const dumbEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('dumbr8 machine')
        .setDescription('You are ' + number + '% dumb.')

        const dumbEmbed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('dumbr8 machine')
        .setDescription(user.username + ' is ' + number + '% dumb.')
        */
        let user = message.mentions.users.first();
        let number = Math.floor(Math.random() * 101);

        if (!args[0]) {
            return message.reply('You are ' + number + '% dumb.'/*{ embeds: dumbEmbed }*/);
        } else if (args[0]) {
            if (user) {
                return message.reply(user.username + ' is ' + number + '% dumb.'/*{ embeds: dumbEmbed2 }*/);
            }
        }
    }
}