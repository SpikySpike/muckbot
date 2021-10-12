const profileModel = require("../events/models/profileSchema");

module.exports = {
    name: "beg",
    description: "beg for money",
    async execute(message, args, profileData) {
        const randomNumber = Math.floor(Math.random() * 500) + 1;

        const response = await profileModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $inc: {
                    coins: randomNumber,
                },
            }
        );
            return message.reply(`You begged and received ${randomNumber} **coins** <:db:896755724657520651>`);
    }
}