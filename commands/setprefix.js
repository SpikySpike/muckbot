const db = require('quick.db')
const { default_prefix } = require('../config.json')

module.exports = {
    name: '.',
    usage: "setprefix <new prefix>",
    description: "Set a new prefix!",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You don't have permissions to change prefix!")
        }

        if(!args[0]) {
            return message.channel.send("Please type in the prefix that you want to set!")
        }

        if(args[1]) {
            return message.channel.send("You can't set double prefix!")
        }

        if(args.length > 5) {
            return message.channel.send("You can't set the prefix more than 5 characters!")
        }

        if(args.join("") === default_prefix) {
            db.delete(`prefix_${message.guild.id}`)
            await message.channel.send("Prefix has been updated!")
        }
        
        db.set(`prefix_${message.guild.id}`, args[0])
        await message.channel.send(`Bot prefix was set to ${args[0]}`)

    }
}