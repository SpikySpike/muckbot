const {
    joinVoiceChannel
} = require('@discordjs/voice');
// const player = require('discord-player');
const {
    Player
} = require("discord-player");
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const colorThief = require('colorthief');
const {
    millify
} = require('millify');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from YouTube',
    async execute(message, args, Discord, ownerId, client) {
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
        try {
            const video = await videoFinder(args.join(' '));
            colorThief.getColor(video.thumbnail).then(imageColor => {
                const imageColorHex = "#" + imageColor.map(c => Number(c).toString(16)).join("");
                console.log(`${video.title} Color Hex:`, imageColorHex);
                const videoViews = millify(video.views, {
                    precision: 2,
                    decimalSeparator: ","
                });

                if (!video) {
                    message.reply('No video results found :(')
                } else {
                    // const stream = ytdl(video.url, { filter: 'audioonly' });
                    // connection.play(stream, { seek: 0, volume: 1 })
                    //     .on('finish', () => {
                    //         voiceChannel.leave();
                    //     });

                    const videoEmbed = new Discord.MessageEmbed()
                        .setColor(`${imageColorHex}`)
                        .setAuthor(`${video.author.name}`)
                        .setTitle('🎶 Now playing...')
                        .setURL(`${video.url}`)
                        .setDescription(`${video.title}`)
                        .setImage(`${video.thumbnail}`)
                        .setFooter(`Duration: ${video.duration} • Views: ${videoViews}`)
                        .setTimestamp();

                    message.reply({
                        embeds: [videoEmbed]
                    });
                }

            })
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
            console.log(err.stack)
        }
    }
}