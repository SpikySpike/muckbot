const prefixSchema = require('../events/models/prefixSchema')

module.exports = {
    name: 'setprefix',
    description: "Set a new prefix!",
    usage: "`m!setprefix <new prefix>`",
    async execute(message, args) {
        try {
            if (!message.member.permissions.has('ADMINISTRATOR')) {
                message.reply(`You don't have right permissions to set prefixes!`)
            }

            else {
                const res = await args[0]
                if (!res) return message.reply('Please specify a prefix to change to.');
                else if (args > 1) return message.reply("The prefix can't have spaces!");
                else if (args.length > 5) return message.reply("The prefix can't have more than 5 symbols!");

                prefixSchema.findOne({ Guild: message.guild.id }, async (err, data) => {
                    if (err) throw err;
                    if (data) {
                        // prefixSchema.findOneAndUpdate(
                        //     {
                        //         Guild: message.guild.id
                        //     },
                        //     {
                        //         $inc: {
                        //             Prefix: res
                        //         }
                        //     }
                        // )
                        prefixSchema.findByIdAndRemove({
                            Guild: message.guild.id
                        })

                        data = new prefixSchema({
                            Guild: message.guild.id,
                            Prefix: res
                        })
                        data.save()
                        
                        message.reply(`Your prefix has been updated to **${res}**`)
                    } else {
                        data = new prefixSchema({
                            Guild: message.guild.id,
                            Prefix: res
                        })
                        data.save()
                        message.reply(`Custom prefix in this server is now set to **${res}**`)
                    }
                })
            }
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
            console.log(err.stack)
        }
    }
}