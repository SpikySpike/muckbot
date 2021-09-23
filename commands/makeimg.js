const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'makeimg',
    description: 'search images on google!',
    async execute(message, args, Discord, Canvas) {
        let avatar = 'https://c.tenor.com/u9XnPveDa9AAAAAM/rick-rickroll.gif'

        async function createCanvas() {
            return new Canvas(800, 600)
                .setColor('#181b26')
                .printRoundedRectangle(0, 0, 800, 600, 20)
                .setColor('#384ea8')
                .setShadowOffsetY(12)
                .setShadowColor('#1c295c')
                .printRoundedRectangle(0, 0, 800, 150, 20)
                .setColor('#ffffff')
                .setTextSize('50px')
                .setTextAlign('center')
                .setTextFont('50px Roboto')
                .setShadowOffsetY(0)
                .printText(`ID: ${message.author.id}`, 400, 310)
                .printText(`Username: ${message.author.username}`, 400, 390)
                .printText(`Server Name: ${message.guild.name}`, 400, 470)
                .printCircle(90, 75, 50, 50)
                .setTextSize('50px')
                .setTextFont('50px Roboto')
                .setTextAlign('start')
                .printText(args.join(" "), 175, 95)
                .toBuffer();
        }

        const attachment = new MessageAttachment(await createCanvas(), 'usercard.png')

        message.reply({ files: [attachment] })
    }
}