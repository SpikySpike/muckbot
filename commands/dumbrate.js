module.exports = {
    name: 'dumbrate',
    description: "dumbrate",
    execute(message, args){
        let number = Math.floor(Math.random() * 101);
        if (!args[1]){
        return message.channel.send('You are ' + number + '% dumb :face_with_monocle:');
        } else {
            let user = message.mentions.user.first();
            if (!user){
                return message.channel.send('Please include who you are dumb-rating.')
            }
            return message.channel.send(user.username + 'is' + number + '% dumb :face_with_monocle:')
        }
    }
}