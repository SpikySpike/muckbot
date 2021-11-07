const { MessageEmbed } = require("discord.js");
const colorThief = require('colorthief');

module.exports = {
    name: "search",
    description: "search with lunr",
    execute(message, args) {
        const idx = lunr(function () {
            this.field('title')
            this.field('body')

            this.add({
                "title": "Lunr",
                "body": "Search with Lunr!",
                "author": "Lunr",
                "id": "1"
            })
        })

        idx.search(args.join(" "))

        const searchEmbed = new MessageEmbed()
            .setColor()

        message.reply()
    }
}