module.exports = {
    name: 'sing',
    description: 'Sing Songs!',
    execute(message, args) {
        let choices = ['nggyu', 'cmbyn', 'sus']
        if (choices.includes((args[0]).toLowerCase())) {
            if (args = 'nggyu') {
                    message.channel.send('Never gonna give you up')
                    message.channel.send('Never gonna let you down')
                    message.channel.send('Never gonna run around and desert you')
                    message.channel.send('Never gonna make you cry')
                    message.channel.send('Never gonna say goodbye')
                    message.channel.send('Never gonna tell a lie and hurt you')
            }
            else if (args = 'cmbyn') {
                message.channel.send('Call me when you want, call me when you need')
                message.channel.send("Call me in the morning, I'll be on the way")
                message.channel.send('Call me when you want, call me when you need')
                message.channel.send("Call me out by your name, I'll be on the way like")
                message.channel.send('***     ***')
                message.channel.send('Oh, call me by your name (mmm, mmm, mmm)')
                message.channel.send('Tell me you love me in private')
                message.channel.send('Call me by your name (mmm, mmm, mmm)')
                message.channel.send("I do not care if you lyin'")
        }
        }

    }
}

