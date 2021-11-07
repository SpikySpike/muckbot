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
                    one: '<:1_:901566022908248104>',
                    two: '<:2_:901566022899879946>',
                    three: '<:3_:901566144664731718>',
                    four: '<:4_:901566144622784532>',
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
                    one: '<:1_:901566022908248104>',
                    two: '<:2_:901566022899879946>',
                    three: '<:3_:901566144664731718>',
                    four: '<:4_:901566144622784532>',
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
                    one: '<:1_:901566022908248104>',
                    two: '<:2_:901566022899879946>',
                    three: '<:3_:901566144664731718>',
                    four: '<:4_:901566144622784532>',
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
                difficulty: '',
                thinkMessage: "I'm thinking",
                winMessage: 'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
                loseMessage: 'Better luck next time! The correct answer was **{{answer}}**.',
                emojis: {
                    one: '<:1_:901566022908248104>',
                    two: '<:2_:901566022899879946>',
                    three: '<:3_:901566144664731718>',
                    four: '<:4_:901566144622784532>',
                },
                othersMessage: 'Only <@{{author}}> can use the buttons!',
                returnWinner: false
            });
        }
    }
}