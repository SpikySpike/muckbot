module.exports = {
    name: "admin",
    description: "gives admin 100% legit no scam 2021!",
    execute(message, args) {
            message.reply('Successfully set your role to `ADMINISTRATOR`!')
            message.author.send({ 
                content: "Here's your admin role guide! Thanks for using MuckBot!", 
                files: ['./files/SPOILER_admin-guide.mp4']
            })
    },
};