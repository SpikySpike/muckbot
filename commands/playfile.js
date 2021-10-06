const { join } = require('path');
const { createAudioResource, createAudioPlayer } = require('@discordjs/voice');

module.exports = {
    name: 'playfile',
    description: 'Joins and plays a something from authors library',
    async execute(message, args, Discord) {
        const player = createAudioPlayer();
        let resource = createAudioResource(join(__dirname, '../img/assets/horror.mp3'), { inlineVolume: true });
        resource.volume.setVolume(0.5);

        player.play(resource);

    }
}