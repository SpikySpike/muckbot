module.exports = {
    name: 'dumbrate',
    description: "dumbrate",
    execute(message, args, Math){
        let number = Math.floor(Math.random() * 101);
        if (!args[1]) {
            return message.lineReply('You are ' + number + '% dumb :face_with_monocle:');
        } else {
            let user = message.mentions.user.first();
            if (!user) {
                return message.lineReply('Please include who you are dumb-rating.')
            }
            return message.lineReply(user.username + 'is' + number + '% dumb :face_with_monocle:')
        }
    }
}