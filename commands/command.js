const { commands } = require("npm");

module.exports = {
    name: "command",
    description: "description",
    execute(message, args, command, Discord) {
        for (let i = 0; i < command.length; i++) {
            const cmdList = command.name[i];

            message.reply('```' + JSON.stringify({ cmdList }) + '```')
        }

        message.reply(command.name)
    }
}