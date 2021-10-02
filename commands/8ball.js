module.exports = {
    name: '8ball',
    description: "8ball no way",
    execute(message, args){
        if (!args[2]){
            return message.reply("Please ask something!")
        }
        let number = Math.floor(Math.random() * 7);
        if (number == 0){
            return message.reply("Yes, definitely so.")
        }
        if (number == 1){
            return message.reply("No, definitely not.")
        }
        if (number == 2){
            return message.reply("Ask again later.")
        }
        if (number == 3){
            return message.reply("It is uncertain.")
        }
        if (number == 4){
            return message.reply("Odds are not in your favor.")
        }
        if (number == 5){
            return message.reply("Odds are in your favor.")
        }
    }
}