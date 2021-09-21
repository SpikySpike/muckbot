const { player, createQueue } = require('discord-music-player');
const { Client } = require('discord.js')

module.exports = {
    name: 'music',
    description: 'Joins and plays a video from YouTube',
    async execute(message, args, Discord) {
        let queue = Client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
    }
}