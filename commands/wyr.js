const { WouldYouRather } = require('weky')

module.exports = {
    name: "wyr",
    description: "would you rather?",
    execute(message, args) {
        WouldYouRather({
            message: message,
            embed: {
                title: 'Would you rather...',
                color: '#5865F2',
                footer: 'WYR Discord',
                timestamp: true
            },
            thinkMessage: 'I am thinking',
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttons: { optionA: 'Option A', optionB: 'Option B' }
        });
    },
};