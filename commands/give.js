const { millify } = require("millify");
const profileModel = require("../events/models/profileSchema");

module.exports = {
    name: "give",
    description: "give coins to other people",
    permissions: 'ADMINISTRATOR',
    usage: "<@userTarget> <amount>",
    async execute(message, args, profileData) {
        const amount = args[1];
        const userTarget = message.mentions.users.first();

        if (!this.permissions) {
            message.reply("You don't have right permissions to give money!")
        }

        else if (!args.length) {
            message.reply("Usage: `m!givemoney " + this.usage + "`")
        }

        else if (args[0] === 'help') {
            message.reply("Usage: `m!givemoney " + this.usage + "`")
        }

        else if (amount % 1 != 0 || amount <= 0) {
            message.reply('You have to type in the amount you want to give!');
        }

        else if (amount > Number.MAX_SAFE_INTEGER) {
            message.reply("You can't give THAT much coins!")
        }

        else if (args[0] === 'me') {
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amount,
                    },
                }
            );

            return message.reply(`You added **${millify(amount, { 
                precision: 3,
                decimalSeparator: "."
            })}** <:db:896755724657520651>`)
        }

        else if (!userTarget) {
            message.reply('You have to mention the user who you want to give coins!')
        }
        
        else {
            const targetData = await profileModel.findOneAndUpdate(
                {
                    userTargetID: userTarget.id,
                }
            )
            
            if (!targetData) {
                message.reply("This user doesn't exist in the DataBase!")
            }

            await profileModel.findOneAndUpdate(
                {
                    userID: userTarget.id,
                },
                {
                    $inc: {
                        coins: amount,
                    },
                }
            );

            return message.reply(`You gave **${userTarget.tag}** **${millify(amount, { 
                precision: 3,
                decimalSeparator: "."
            })}** <:db:896755724657520651>`)
        }
    }
}