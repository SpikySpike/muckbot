const { Snake } = require('weky')

module.exports = {
    name: 'snake',
    description: "snek",
    async execute(message, args) {
        await Snake({
            message: message,
            embed: {
                title: 'Snake | Weky Development',
                description: 'GG, you scored **{{score}}** points!',
                color: '#5865F2',
                footer: '©️ Weky Development',
                timestamp: true
            },
            emojis: {
                empty: '⬛',
                snakeBody: '🟩',
                food: '🍎',
                up: '⬆️',
                right: '⬅️',
                down: '⬇️',
                left: '➡️',
            },
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttonText: 'Cancel'
        });
    }
}