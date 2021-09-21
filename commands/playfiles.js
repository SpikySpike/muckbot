const { createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');

module.exports = {
    name: 'playfiles',
    description: 'Joins and plays a something from authors library',
    async execute(message, args, Discord) {
        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });
        const resource = createAudioResource('C:/Users/Egor/Dropbox/EgorFiles/Documents/DiscordBot/muckbot/files/halal_ocean.mp4')
        player.play(resource);
    }
}