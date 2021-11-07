const canvacord = require('canvacord');

module.exports = {
    name: 'imgman',
    description: "Embeds!",
    async execute(message, args, Discord) {
        const user = message.mentions.users.first();

        let avatar = message.author.displayAvatarURL({
            dynamic: false,
            format: 'png',
            size: 1024
        });

        if (!user) {
            let image = await canvacord.Canvas.trigger(avatar);
            let attachment = new Discord.MessageAttachment(image, `${message.author.username}-imageManipulation.png`);
            return message.reply({ files: [attachment] });
        }
    }
}