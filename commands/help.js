const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help',
    async execute(message, args, Discord, clipboardy, client) {
        const helpBtn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Copy Link')
                    .setCustomId('helpLinkCopy')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setLabel('Command List!')
                    .setStyle('LINK')
                    .setURL('https://github.com/spikyspike/muckbot/')
            );

        if (!args[0]) {
            message.reply({
                content: "What type of cmds?\n・ `fun`\n・ `util`\n・ `misc`",
                components: [helpBtn]
            })
        }
        else {
            message.reply('no args pls')
        }
        
        /*
        client.on('clickButton', async (button) => {
            if (button.id === 'helpLinkCopy') {
                console.log(button.id)
                clipboardy.writeSync('test');
                message.reply('Copied!')
            }
        })
        */
    }
}