const { gifSearch, gifUrl } = require('gif-search');

module.exports = {
    name: 'gif',
    description: "search for gifs",
    execute(message, args, Discord) {
        const gifEmbed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`GIF Search Result: **${args.join(" ")}**`)
            .setImage(gifUrl)
            .setTimestamp()

            try {
                gifSearch.query(args.join(' ')).then(
                    gifUrl => message.reply({ embeds: [gifEmbed] })
                )
                gifSearch.setAPIKey('none');
            } catch (err) {
                message.reply('⚠ Error:' + '```' + err + '```')
                console.log(err.stack)
            }
    }
}