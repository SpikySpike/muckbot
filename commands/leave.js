require('@discordjs/voice');
const { Client } = require('discord.js');

module.exports = {
    name: 'leave',
    description: "leave the voice channel",
    async execute(message, args, Discord) {
        const voiceChannel = message.member.voice.channel;
        const voiceChannelBot = Client.voiceChannel;

        if (!voiceChannel) return message.reply('You need to be in a voice channel to use this command!'), message.react("❌");
        if (!voiceChannelBot) return message.reply("I'm not in a voice channel right now!"), message.react("❌");

        if (Client.voiceChannel) {
            message.reply('Leaving the Voice Channel...');
            message.react('✔');
            setTimeout(function () {
                voiceChannel.leave();
            }, 1000);
        }
    }
}
