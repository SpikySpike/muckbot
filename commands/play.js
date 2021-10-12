const { joinVoiceChannel } = require('@discordjs/voice');
const player = require('discord-player');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from YouTube',
    async execute(message, args, Discord, ownerId) {
        const voiceChannel = await message.member.voice.channel;

        if (!voiceChannel) return message.reply('You need to be in a voice channel to use this command!'), message.react("❌");
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.reply("You can't connect to this channel!"), message.react("❌");
        if (!permissions.has('SPEAK')) return message.reply("You can't speak in this channel!"), message.react("❌");
        if (!args.length) return message.reply('You need to send the second argument!'), message.react("❌");

        const connection = await joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        });

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        try {
            if (video) {
                const stream = ytdl(video.url, { filter: 'audioonly' });
                connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                });
    
                const videoEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('🎶 Now playing...')
                    .setURL(video.url)
                    .setDescription(video.title)
                    .setImage(video.thumbnail)
                    .setTimestamp()
                    .setFooter(video.duration);
    
                await message.reply({ embeds: [videoEmbed] });
            } else {
                message.reply('No video results found :(')
            }
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
            console.log(err.stack)
        }
    }
}