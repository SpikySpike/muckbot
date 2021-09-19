module.exports = {
    name: 'dumbrate',
    description: "dumbrate",
    execute(message, args, Discord) {
        let user = message.mentions.users.first();
        let number = Math.floor(Math.random() * 101);

        if (user) {

            const dumbEmbed2 = new Discord.MessageEmbed() // 
                .setColor('RANDOM')
                .setTitle('dumbr8 machine')
                .setDescription(user.username + ' is ' + number + '% dumb.');

            return message.reply({ embeds: [dumbEmbed2] });
        }
        
        else {
            const dumbEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('dumbr8 machine')
                .setDescription('You are ' + number + '% dumb.');

            return message.reply({ embeds: [dumbEmbed] });
        }
    }
}