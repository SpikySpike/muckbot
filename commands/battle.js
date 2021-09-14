const {GuildMember, Message} = require('discord.js')
const minigames = require('discord-minigames');

module.exports = {
    name: 'battle',
    description: "Battle someone!",
    execute(message, minigames, member){
        minigames.startBattle(GuildMember, Message)
    }
}