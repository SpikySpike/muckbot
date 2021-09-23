var Scraper = require('images-scraper');
const nsfWords = require('./jsons/nsfw.json');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'search images on google!',
    async execute(message, args, Discord) {
        const image_query = args;
        if (!image_query[0]) return message.reply("Please enter a valid image name!"), message.react('❌');
        const image_results = await google.scrape(image_query, 1);

        const imgEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Image Search Result: **' + args.join(" ") + '**')
            .setURL(image_results[0].url)
            .setImage(image_results[0].url)
            .setTimestamp()
            .setFooter('Search Engine Google', 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png');

        if (args.includes(nsfWords.length)) {
            message.reply('Invalid! NSFW content included!'), message.react('❌');
        }
        else {
            message.reply({ embeds: [imgEmbed] });
        }
    }
}
