module.exports = {
    name: 'translate',
    description: "this is a ping command!",
    execute(message, args, Discord, translate) {
        translate.engine = 'libre';
        translate.key = process.env.LT_API_KEYS;

        message.reply("The command is invalid, or is in progress!")
        /*
        if (args[0] === 'ru') {
            let argsTr = args.join(" ");

            const tr = translate(args[1], "ru")

            message.reply('`' + args[1] + "` in **Russian** is: " + tr)//argsTr({ to: "ru" }))
        } */
    }
}   