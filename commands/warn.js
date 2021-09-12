module.exports = {
    name: 'warn',
    description: "warn someone",
    execute(message, args){
            message.channel.send(`Warn from <@${message.author.id}>: **${args.join(" ")}**`)
    }
}