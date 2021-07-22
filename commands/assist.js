module.exports = {
    name: 'assist',
    description: "assist someone",
    execute(message, args, Discord, client){
        if (!args.length) return message.channel.send('You need to send the second argument!');
        message.channel.send(message.reply + 'assisted in ratioing ' + args.join(" "));
    }
}