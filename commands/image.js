var Scraper = require('images-scraper');
const colorThief = require('colorthief');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'search images on google!',
    async execute(message, args, Discord, badWordsFind) {
        if (badWordsFind) {
            message.reply('Invalid! NSFW content included!'), message.react('❌');
        }

        try {
            const imageQuery = args.join(' ');
            if (!imageQuery[0]) return message.reply("Please enter a valid image name!"), message.react('❌');
            const imageResults = await google.scrape(imageQuery, 1);
            const randomNumber = Math.floor(Math.random() * 15) + 1;

            colorThief.getColor(imageResults[0].url).then(imageColor => {
                const imageColorHex = "#" + imageColor.map(c => Number(c).toString(16)).join("");

                const imgEmbed = new Discord.MessageEmbed()
                    .setColor(`${imageColorHex}`)
                    .setTitle('Image Search Result: **' + args.join(" ") + '**')
                    .setURL(`${imageResults[0].url}`)
                    .setImage(`${imageResults[0].url}`)
                    .setFooter(
                        'Search Engine Google', 
                        'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
                        )
                    .setTimestamp()

                if (!badWordsFind) {
                    message.reply({
                        embeds: [imgEmbed]
                    });
                }
            });
        } catch (err) {
            message.reply('error: ' + err)
            console.log(err)
        }
    }
}