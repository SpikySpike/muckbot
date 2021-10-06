module.exports = {
    name: 'math',
    description: 'math goes brrr',
    async execute(message, args, Discord, math) {
        try {
            const mathEmbed = new Discord.MessageEmbed()
                .setColor('#222426')
                .setTitle(`Result`)
                .addField('Question', `${args.join(" ")}`)
                .addField('Solution', `${math.evaluate(args.join(" "))}`)

                message.reply({ embeds: [mathEmbed] })
        } catch (err) {
            message.reply('Your question is invalid!'), message.react('❌');
        }
    }
}