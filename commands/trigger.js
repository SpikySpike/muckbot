const canvacord = require('canvacord');

module.exports = {
    name: 'trigger',
    description: "Embeds!",
    async execute(message, args, Discord) {
        let avatar = message.author.displayAvatarURL({
            dynamic: false,
            format: 'png'
        });

        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.reply({ files: [attachment] });
    }
}