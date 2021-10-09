module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args) {
            if (!args[0]) return message.reply("Please enter the amount of messages that you want to delete!"), message.react("❌");
            if (isNaN(args[0])) return message.reply("Please enter a real number!"), message.react("❌");
            if (args[0] > 100) return message.reply("You can't delete more than **100 messages!**"), message.react("❌");
            if (args[0] < 1) return message.reply("You must delete at least **one message!**"), message.react("❌");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {

                try {
                    message.channel.bulkDelete(messages).catch(err)
                    message.channel.send(`Cleared ${args} messages! :wastebasket:`).then(msg => {
                        setTimeout(() => {
                            msg.delete();
                        }, 5000);
                    })
                } catch (err) {
                    message.channel.send('You can only bulk delete messages that are under 14 days old!'), message.react('❌');
                    
                }
            });
    }
}