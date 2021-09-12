module.exports = {
    name: 'rps',
    description: "rock paper scissors",
    execute(message, args){
        if (args < 1) {
            return message.channel.send('Please include ur choice.')
        }

        let choices = ['rock', 'paper', 'scissors']
        if (choices.includes((args[0]).toLowerCase())) {
            let number = Math.floor(Math.random() * 3);
            if (number == 1) {
                return message.channel.send(`It was a tie, we both had **${(args[0]).toLowerCase()}**`)
            }
            if (number == 2) {
                if ((args[0]).toLowerCase() == "rock") {
                    return message.channel.send('I won! I had **paper** 📄')
                }
                if ((args[0]).toLowerCase() == "paper") {
                    return message.channel.send('I won! I had **scissors** ✂️')
                }
                if ((args[0]).toLowerCase() == "scissors") {
                    return message.channel.send('I won! I had **rock** 🪨')
                }

            }
            if (number == 0) {
                if ((args[0]).toLowerCase() == "rock") {
                    return message.channel.send('You won! I had **scissors** ✂️')
                }
                if ((args[0]).toLowerCase() == "paper") {
                    return message.channel.send('You won! I had **rock** 🪨')
                }
                if ((args[0]).toLowerCase() == "scissors") {
                    return message.channel.send('You won! I had **paper** 📄')
                }
            }
        } else {
            return message.channel.send('Please include either: **Rock**, **Paper** or **Scissors**.')
        }
    }
}

/*
if (args < 1) {
            return message.channel.send('Please include ur choice.')
        }

        let choices = ['rock', 'paper', 'scissors']
        if (choices.includes((args[0]).toLowerCase())) {
            let number = Math.floor(Math.random() * 3);
            if (number == 1) {
                return message.channel.send(`It was a tie, we both had **${(args[0]).toLowerCase()}**`)
            }
            if (number == 2) {
                if ((args[0]).toLowerCase() == "rock") {
                    return message.channel.send('I won! I had **paper**.')
                }
                if ((args[0]).toLowerCase() == "paper") {
                    return message.channel.send('I won! I had **scissors**.')
                }
                if ((args[0]).toLowerCase() == "scissors") {
                    return message.channel.send('I won! I had **rock**.')
                }

            }
            if (number == 0) {
                if ((args[0]).toLowerCase() == "rock") {
                    return message.channel.send('You won! I had **scissors**.')
                }
                if ((args[0]).toLowerCase() == "paper") {
                    return message.channel.send('You won! I had **rock**.')
                }
                if ((args[0]).toLowerCase() == "scissors") {
                    return message.channel.send('You won! I had **paper**.')
                }
            }
        } else {
            return message.channel.send('Please include either: **Rock**, **Paper** or **Scissors**.')
        }
*/