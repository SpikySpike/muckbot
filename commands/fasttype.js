const { FastType } = require('weky');
const randomSentence = require('random-sentence');
const sentences = randomSentence({min: 4, max: 6});
const sentencesNew = sentences.replace(/./g, '');

module.exports = {
    name: "fasttype",
    description: "Fast-Type game for Discord!",
    async execute(message, args) {
        await FastType({
            message: message,
            embed: {
                title: 'FastType',
                description: 'You have **{{time}}** to type the below sentence.',
                color: '#5865F2',
                footer: 'FastType Discord',
                timestamp: true
            },
            sentence: sentencesNew,
            winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
            loseMessage: 'Better luck next time!',
            cancelMessage: 'You ended the game!',
            time: 60000,
            buttonText: 'Cancel',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        })
    }
}