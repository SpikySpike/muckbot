const db = require('quick.db');
const { millify } = require('millify');

module.exports = {
    name: "balance",
    description: 'does stuff',
    execute(message, args, profileData, profileDataUser, client) {
        const user = message.mentions.users.first();

        if (!profileData) {
            message.reply(`Created a new account for you!`)
        }

        else if (!user) {
            message.reply(`Your balance is **${millify(profileData.coins, { 
                precision: 3,
                decimalSeparator: "."
            })}** <:db:896755724657520651>`);
        }

        else if (profileData.coins > Number.MAX_SAFE_INTEGER) {
            message.reply(`Your balance is **Infinity** <:db:896755724657520651>`);
        }

        else if (user) {
            if (!profileDataUser) {
                message.reply(`${user.tag} hasn't created his account yet!`)
            }

            else {
                message.reply(`**${user.tag}**'s balance is **${
                    millify(profileDataUser.coins, { 
                        precision: 3,
                        decimalSeparator: "."
                    })}** <:db:896755724657520651>`);
            }
        }
    }
}