const google = require('google')

module.exports = {
    name: 'google',
    description: "google something",
    execute(message, args, Discord) {
        google.resultsPerPage = 3;
        google.lang = 'en';

        const googleEmbed = new Discord.MessageEmbed()
            .setTitle("Google Search Results")
            .setColor('RANDOM')
            .setTimestamp()

        google({
            query: args.join(' ')
        })
            (results => {
                results.forEach(function (item, index) {
                    googleEmbed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
                });

                message.reply({ embeds: googleEmbed });
            }).catch(err => {
                message.reply(err)
            });
    }
}