const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const yts = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from YouTube',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.lineReply('You need to be in a voice channel to use this command!'), message.react("❌");
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send("You don't have right permissions!"), message.react("❌");
        if (!permissions.has('SPEAK')) return message.channel.send("You don't have right permissions!"), message.react("❌");
        if (!args.length) return message.channel.send('You need to send the second argument!'), message.react("❌");

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });

            await message.lineReply(`:thumbsup: Now Playing ***${video.title}***\n ${video.url}`)
        } else {
            message.channel.send('No video results found :(')
        }
    }
}