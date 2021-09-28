const { resolveImage } = require('canvas-constructor/skia');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'gifme',
    description: 'gifme',
    async execute(message, args, Canvas) {
        try {
            async function createCanvas() {
                const gif = await resolveImage('./commands/img/epic.gif')
    
                return new Canvas(400, 255)
                    .printImage(gif, 0, 0, 400, 225)
                    .setColor('#ffffff')
                    .setTextFont('28px Impact')
                    .setTextAlign('center')
                    .printText(args.join(' '))
                    .toBuffer();
            }
    
            const attachment = new MessageAttachment(await createCanvas(), 'epicest.gif')
    
            message.reply({ files: [attachment] })
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
            console.log(err.stack)
        }
    }
}