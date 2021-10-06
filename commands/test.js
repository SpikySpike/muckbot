const { MessageActionRow, MessageButton } = require('discord.js');
const clipboardy = require('clipboardy')

module.exports = {
    name: 'test',
    description: 'Joins and plays a video from YouTube',
    async execute(message, args, Discord, client) {
        if (!args[0]) {
            message.reply('try args `btn`')
        }

        else if (args[0] === 'btn') {
            const testBtn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Click!')
                    .setCustomId('copyBtn')
                    .setStyle('PRIMARY')
            );

            message.reply({ content: 'Test!', components: [testBtn]})
        }

        client.on('clickButton', async (button) => {
            if (button.id === 'helpLinkCopy') {
                console.log(button.id)
                navigator.clipboard.writeText('test');
                message.author.reply({ content: 'Copied!', ephemeral: true })
            }
        })
    }
}