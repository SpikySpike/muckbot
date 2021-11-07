module.exports = {
    name: 'nick',
    description: "set a custom nickname!",
    execute(message, args, client){
        // if (!message.member.permissions.has('MANAGE_NICKNAMES')) {
        //     message.reply('u cant')
        // }

        // else {
        //     message.author.setNick(args[0])
        //     message.reply('nick set!')
        // }

        message.guild.author.nickname(args[0], []).then(message.reply('nick set!'))
    }
}