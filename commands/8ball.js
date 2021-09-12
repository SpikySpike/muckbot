module.exports = {
    name: '8ball',
    description: "8 balls omg",
    execute(message, args){
        if (!args[2]){
            return message.channel.send("Please ask something!")
        }
        let number = Math.floor(Math.random() * 7);
        if (number == 0){
            return message.channel.send("Yes, definitely so.")
        }
        if (number == 1){
            return message.channel.send("No, definitely not.")
        }
        if (number == 2){
            return message.channel.send("Ask again later.")
        }
        if (number == 3){
            return message.channel.send("It is uncertain.")
        }
        if (number == 4){
            return message.channel.send("Odds are not in your favor.")
        }
        if (number == 5){
            return message.channel.send("Odds are in your favor.")
        } 
        if (number == 6){
            return message.channel.send("ask ur mom peasant :rofl: :point_right:")
        }
    }
}