const { Calculator } = require('weky')

module.exports = {
    name: 'calc',
    description: "calculator basically",
    async execute(message, args) {
        await Calculator({
			message: message,
			embed: {
				title: 'Calculator | MuckBot',
				color: 'RANDOM',
				footer: '©️ MuckBot',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		});
    }
}