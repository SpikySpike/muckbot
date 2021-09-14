const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const yts = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from YouTube',
    async execute(message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.lineReply('You need to be in a voice channel to use this command!'), message.react("❌");
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.lineReply("You can't connect to this channel!"), message.react("❌");
        if (!permissions.has('SPEAK')) return message.lineReply("You can't speak in this channel!"), message.react("❌");
        if (!args.length) return message.lineReply('You need to send the second argument!'), message.react("❌");

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

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
                .setFooter('**YouTube**');

            await message.lineReply(videoEmbed)
        } else {
            message.lineReply('No video results found :(')
        }
    }
}