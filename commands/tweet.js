module.exports = {
    name: 'tweet',
    description: "tweet something",
    execute(message, args, Twitter){
        message.reply("Command not in use!")
        /*
        Twitter.makeATweet(args.join(" "))
        message.channel.send('Tweet The Message Go to https://twitter.com/muck_bot to check it out!');*/
    }
}