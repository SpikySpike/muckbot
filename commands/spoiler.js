module.exports = {
    name: 'spoiler',
    description: "spoiler a message!",
    execute(message, args){
            message.channel.send('||' + message.author.args + '||')
    }
}