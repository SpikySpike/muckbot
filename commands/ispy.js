const {GuildMember, Message} = require('discord.js')
const minigames = require('discord-minigames')

module.exports = {
    name: 'ispy',
    description: "I spy?",
    execute(message, args, member){
        let ISpy = new minigames.ISpy(message)
        ISpy.startISpy(member).catch(err => {
            console.log(err)
            message.channel.send(err.message)
        })
    }
}