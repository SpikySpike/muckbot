const { Trivia } = require('weky')

module.exports = {
    name: 'trivia',
    description: "Play trivia!",
    async execute(message, args) {
        await Trivia({
            message: message,
            embed: {
                title: 'Trivia | MuckBot',
                description: 'You only have **{{time}}** to guess the answer!',
                color: 'RANDOM',
                footer: '©️ MuckBot',
                timestamp: true
            },
            difficulty: 'hard',
            thinkMessage: "I'm thinking",
            winMessage:
                'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
            loseMessage: 'Better luck next time! The correct answer was **{{answer}}**.',
            emojis: {
                one: '1️⃣',
                two: '2️⃣',
                three: '3️⃣',
                four: '4️⃣',
            },
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            returnWinner: false
        });
    }
}