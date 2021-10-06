const { RateLimitError } = require("discord.js");

module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args) {
        try {
            if (!args[0]) return message.reply("Please enter the amount of messages that you want to delete!"), message.react("❌");
            if (isNaN(args[0])) return message.reply("Please enter a real number!"), message.react("❌");
            if (args[0] > 100) return message.reply("You can't delete more than **100 messages!**"), message.react("❌");
            if (args[0] < 1) return message.reply("You must delete at least **one message!**"), message.react("❌");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages, true);

                message.reply(`Cleared ${args} messages! :wastebasket:`).then(msg => {
                    setTimeout(() => msg.react('🗑'), 1000)
                })
            });
        } catch (err) {
            message.reply('You can only bulk delete messages that are under 14 days old!'), message.react('❌');
        }
    }
}