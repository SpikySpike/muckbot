module.exports = {
    name: 'thread',
    description: "create a new thread",
    execute(message, args) {
        if (!args[1]) return message.lineReply('Please type in something!'), message.react("❌");
        if (args[2]) return message.lineReply('Need more arguments!'), message.react("❌");
        if (args[4]) return message.lineReply('Too many arguments!'), message.react("❌");
        if (args[3]) return message.lineReply(args.join(" "))
    }
}


/*
module.exports = {
    name: 'thread',
    description: "create a new thread",
    execute(message, args) {
        async function thread() {
            if (!args[1]) return message.lineReply('Please type in something!'), message.react("❌");
            if (args[2]) return message.lineReply('Need more arguments!'), message.react("❌");
            if (args[4]) return message.lineReply('Too many arguments!'), message.react("❌");
            if (args[3]) {
                const thread = await channel.threads.create({
                    name: args[2],
                    autoArchiveDuration: 60,
                    reason: args[3],
                });

                message.lineReply(`Created thread: ${thread.name}`);
            }
        }
    }
}
*/