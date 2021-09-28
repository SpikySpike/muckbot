const { WillYouPressTheButton } = require('weky')

module.exports = {
    name: 'wupb',
    description: "wupb?!?!?",
    async execute(message, args) {
        await WillYouPressTheButton({
            message: message,
            embed: {
                title: 'Will you press the button? | MuckBot',
                description: '```{{statement1}}```\n**but**\n\n```{{statement2}}```',
                color: 'RANDOM',
                footer: '©️ MuckBot',
                timestamp: true
            },
            button: { yes: 'Yes', no: 'No' },
            thinkMessage: "I'm thinking",
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });
    }
}