const { Fight } = require('weky')

module.exports = {
    name: 'fight',
    description: "fight someone (epic battle)",
    async execute(message, args) {
        const user = message.mentions.users.first();

        if (!args[0]) {
            message.reply('You have to type in who do you want to fight!'), message.react('❌');
        }

        else if (!user) {
            message.reply('Invalid user name!'), message.react('❌');
        }

        else if (user){
            Fight({
                message: message,
                opponent: user,
                embed: {
                    title: 'Fight',
                    color: 'RANDOM',
                    footer: '©️ MuckBot',
                    timestamp: true
                },
                buttons: {
                  hit: 'Hit',
                  heal: 'Heal',
                  cancel: 'Stop',
                  accept: 'Accept',
                  deny: 'Deny'
                },
                acceptMessage: '<@{{challenger}}> has challenged <@{{opponent}}> for a fight!',
                winMessage: 'GG, <@{{winner}}> won the fight!',
                endMessage: '<@{{opponent}}> didn\'t answer in time. So, I dropped the game!',
                cancelMessage: '<@{{opponent}}> refused to have a fight with you!',
                fightMessage: '{{player}} you go first!',
                opponentsTurnMessage: 'Please wait for your opponents move!',
                highHealthMessage: 'You cannot heal if your HP is above 80!',
                lowHealthMessage: 'You cannot cancel the fight if your HP is below 50!',
                returnWinner: false,
                othersMessage: 'Only {{author}} can use the buttons!'
            });
        }
    }
}