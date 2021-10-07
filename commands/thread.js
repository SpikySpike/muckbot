module.exports = {
    name: 'thread',
    description: "create a new thread",
    async execute(message, args) {
        if (!args[0]) return message.reply('Please type in something!'), message.react("❌");
        if (!args[1]) return message.reply('Need more arguments!'), message.react("❌");
        if (!args[3]) return message.reply('Too many arguments!'), message.react("❌");
        if (args[4]) {
            const thread = await channel.threads.create({
                name: args[2],
                autoArchiveDuration: 60,
                reason: args[3],
            });

            message.reply(`Created thread: ${thread.name}`);
        }
    }
}


/*
module.exports = {
    name: 'thread',
    description: "create a new thread",
    execute(message, args) {
        async function thread() {
            if (!args[1]) return message.reply('Please type in something!'), message.react("❌");
            if (args[2]) return message.reply('Need more arguments!'), message.react("❌");
            if (args[4]) return message.reply('Too many arguments!'), message.react("❌");
            if (args[3]) {
                const thread = await channel.threads.create({
                    name: args[2],
                    autoArchiveDuration: 60,
                    reason: args[3],
                });

                message.reply(`Created thread: ${thread.name}`);
            }
        }
    }
}
*/