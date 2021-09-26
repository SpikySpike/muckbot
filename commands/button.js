/*
const disbut = require('discord-buttons');
disbut(client);
*/
module.exports = {
    name: 'button',
    description: 'discord buttons?',
    async execute(message, args, Discord) {
        const argsButton = new  disbut.MessageButton()
            .setStyle('blurple')
            .setLabel(args.join(' '))
            .setURL('https://discord.com')

            message.reply(args.join(' '), argsButton)
    }
}
