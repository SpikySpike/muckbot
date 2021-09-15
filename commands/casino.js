module.exports = {
    name: 'casino',
    description: "casino i guess",
    execute(message, args) {
        if (!args[0]) {
            message.lineReply("Enter the bet, please!");
            message.react('❌');
            return;
        }

        var bet = args[0]

        if (bet < 50) {
            message.lineReply("Minimum bet is 50");
            message.react('❌');
            return;
        }

        /* else if (bet > balances[message.author.toString()]) {
            message.lineReply("You can't bet more than you have");
            message.react('❌');
            return;
        } */

        var multiplier;

        var colors = ["red", "blue", "green"];
        var guess = colors[Math.floor(Math.random() * colors.length)];

        var chances = ["red", "red", "red", "red", "red", "red",
            "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue",
            "green"];

        var index = Math.floor(Math.random * colors.length);

        if (chances[index] === guess) {
            if (guess === "green") {
                multiplier = 30;
            }

            else {
                multiplier = 2;
            }
        }

        else {
            multiplier = -1;
        }

        if (multiplier < 0) {
            message.lineReply(`You lost ${bet}$!`);
            message.author.balance -= bet;
            message.react('💸');
        }
        else {
            message.lineReply(`You won ${bet * (multiplier - 1)}`);
            message.react('💲')
        }

    }
}