const { clipboard } = require('clipboardy')
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help',
    async execute(message, args, Discord, clipboardy, client) {
        const helpLinkCopyId = 'hlc'
        const helpBtn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Copy Link')
                    .setCustomId(helpLinkCopyId)
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setLabel('Command List!')
                    .setStyle('LINK')
                    .setURL('https://github.com/spikyspike/muckbot/')
            );

        const helpEmbed = new MessageEmbed()
            .setColor('BLURPLE')
            .setTitle('Help Center')
            .setDescription("What type of cmds?\n・ `fun`\n・ `util`\n・ `misc`")
            .setTimestamp();

        const helpEmbedCopy = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('Copied Link!')
            .setTimestamp();
        
        const embedMessage = await message.reply({
            embeds: [helpEmbed],
            components: [helpBtn]
        })
        
        if (!args[0]) {
            message.reply({
                embeds: [helpEmbed],
                components: [helpBtn]
            })
        }
        else {
            message.reply('no args pls')
        }

        const collector = embedMessage.createMessageComponentCollector({
            filter: ({ user }) => user.id === author.id
        })

        collector.on('collect', async (interaction) => {
            interaction.customId === helpLinkCopyId
            await interaction.update({
                embeds: [await helpEmbedCopy]
            })
        })

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