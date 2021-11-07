const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "vscode",
    description: "epic vscode command",
    execute(message, args) {
        const vsCodeEmbed = new MessageEmbed()
            .setColor('#0078d7')
            .setTitle('Visual Studio Code')
            .setAuthor(
                'Visual Studio Code', 
                'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png'
                )
            .setDescription('Different VSCode icons meaning.')
            .addFields(
                { 
                    name: '<:variable:897887369091493931> Variable', 
                    value: '`variable`', 
                    inline: false 
                },
                { 
                    name: '<:func:897887369745797161> Methods and Functions', 
                    value: '`functions`, `methods`', 
                    inline: false 
                },
                { 
                    name: 'title', 
                    value: 'value', 
                    inline: false 
                },
            )
            .setTimestamp()
            .setFooter('Visual Studio Code', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png'
            );
        
            message.channel.send({ embeds: [vsCodeEmbed] })
    },
};