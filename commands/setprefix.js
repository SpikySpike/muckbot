const db = require('quick.db')

module.exports = {
    name: 'setprefix',
    usage: "setprefix <new prefix>",
    description: "Set a new prefix!",
    async execute(client, message, args, prefix) {
        try {
            if (!permissions.has('ADMINISTRATOR')) {
                return message.reply("You don't have permissions to change prefix!")
            }
    
            if (!args[0]) {
                return message.reply("Please type in the prefix that you want to set!")
            }
    
            if (args[1]) {
                return message.reply("You can't set double prefix!")
            }
    
            if (args.length > 5) {
                return message.reply("You can't set the prefix more than 5 characters!")
            }
    
            if(args.join("") === default_prefix) {
                db.delete(`prefix_${message.guild.id}`)
                await message.reply("Prefix has been updated!")
            }
            
            db.set(`prefix_${message.guild.id}`, args[0])
            await message.reply(`Bot prefix was set to ${args[0]}`)
        } catch (err) {
            message.reply('⚠ Error:' + '```' + err + '```')
            console.log(err.stack)
        }
    }
}