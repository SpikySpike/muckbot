module.exports = {
    name: 'rps',
    description: "rock paper scissors",
    execute(message, args){
        if (args < 1) {
            return message.reply('Please include your choice!'), message.react('❌');
        }

        let choices = ['rock', 'paper', 'scissors']
        if (choices.includes((args[0]).toLowerCase())) {
            let number = Math.floor(Math.random() * 3);
            if (number == 1) {
                return message.reply(`It was a tie, we both had **${(args[0]).toLowerCase()}**`)
            }
            if (number == 2) {
                if ((args[0]).toLowerCase() == "rock") {
                    return message.reply('I won! I had **paper** 📄')
                }
                if ((args[0]).toLowerCase() == "paper") {
                    return message.reply('I won! I had **scissors** ✂️')
                }
                if ((args[0]).toLowerCase() == "scissors") {
                    return message.reply('I won! I had **rock** 🪨')
                }

            }
            if (number == 0) {
                if ((args[0]).toLowerCase() == "rock") {
                    return message.reply('You won! I had **scissors** ✂️')
                }
                if ((args[0]).toLowerCase() == "paper") {
                    return message.reply('You won! I had **rock** 🪨')
                }
                if ((args[0]).toLowerCase() == "scissors") {
                    return message.reply('You won! I had **paper** 📄')
                }
            }
        } else {
            return message.reply('Please include either: **Rock**, **Paper** or **Scissors**.')
        }
    }
}