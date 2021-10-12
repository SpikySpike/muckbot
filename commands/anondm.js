module.exports = {
    name: "anondm",
    description: "description",
    guildOnly: true,
    execute(message, args) {
        const user = message.mentions.users.first()

        if (!message.guild) {
            message.reply("You can't use this command in DMs!")
        }

        else {
            if (!args) {
                message.reply('What do you want me to DM?')
            }
    
            else if (!user) {
                message.reply('Who do you want me to DM?')
            }
                if (user) {
                    if (!args[1]) {
                        message.reply('You have to type in what you want me to DM!')
                    }
                    else {
                        message.react('👍')
                        message.reply(`Anonymously DMing **${user.tag}**...`).then(msg => {
                            setTimeout(() => msg.delete(), 3000)
                            setTimeout(function () {
                                message.delete()
                            }, 3000);
                        })
                        user.send(`**Anonymous** from **${message.guild.name}** sent you a DM: ${args.join(' ')}`)
                    }
                }
        }
    }
}