const { MessageActionRow, MessageButton } = require('discord.js');
const clipboard = require('clipboardy');
const interaction = require('@discordjs/builders')

module.exports = {
    name: 'test',
    description: 'Joins and plays a video from YouTube',
    async execute(message, args, Discord, client) {
        const testBtn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Click!')
                    .setCustomId('copyBtn')
                    .setStyle('PRIMARY')
            );

        if (!args[0]) {
            message.reply('try args `btn`')
        }

        else if (args[0] === 'btn') {
            message.reply({ content: 'Test!', components: [testBtn]})
        }
        
        const testEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('Copied')
            .setDescription('Copied the link to clipboard!')

        // const embedMessage = message.reply({ content: 'Test!', components: [testBtn]})
        
        // const collector = interaction.channel.createMessageCollector({ 
        //     filter, 
        //     time: 15000
        // });

        // collector.on('collect', async (interaction) => {
        //     interaction.customId === 'copyBtn'
        //     await interaction.update(navigator.clipboard.writeText('test'), 
        //     {
        //         embeds: [testEmbed]
        //     })
        // })

        // collector.on('collect', m => {
        //     console.log(`Collected ${m.content}`);
        // });
        
        // collector.on('end', collected => {
        //     console.log(`Collected ${collected.size} items`);
        // });
    }
}