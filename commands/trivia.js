const { Trivia } = require('weky')

module.exports = {
    name: 'trivia',
    description: "Play trivia!",
    async execute(message, args) {
        if (args[0] === 'hard') {
            Trivia({
                message: message,
                embed: {
                    title: 'Trivia',
                    description: 'You only have **{{time}}** to guess the answer!',
                    color: 'RANDOM',
                    footer: 'Trivia Discord | Difficulty: Hard',
                    timestamp: true
                },
                difficulty: true,
                thinkMessage: "I'm thinking",
                winMessage: 'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
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

        else if (args[0] === 'medium') {
            Trivia({
                message: message,
                embed: {
                    title: 'Trivia',
                    description: 'You only have **{{time}}** to guess the answer!',
                    color: 'RANDOM',
                    footer: 'Trivia Discord | Difficulty: Medium',
                    timestamp: true
                },
                difficulty: 'medium',
                thinkMessage: "I'm thinking",
                winMessage: 'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
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

        else if (args[0] === 'easy') {
            Trivia({
                message: message,
                embed: {
                    title: 'Trivia',
                    description: 'You only have **{{time}}** to guess the answer!',
                    color: 'RANDOM',
                    footer: 'Trivia Discord | Difficulty: Easy',
                    timestamp: true
                },
                difficulty: 'easy',
                thinkMessage: "I'm thinking",
                winMessage: 'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
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

        else {
            Trivia({
                message: message,
                embed: {
                    title: 'Trivia',
                    description: 'You only have **{{time}}** to guess the answer!',
                    color: 'DARK_BUT_NOT_BLACK',
                    footer: 'Trivia Discord | Difficulty: Random',
                    timestamp: true
                },
                difficulty: 'easy',
                thinkMessage: "I'm thinking",
                winMessage: 'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
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
}