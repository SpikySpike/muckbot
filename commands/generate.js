module.exports = {
    name: 'generate',
    description: "generate different stuff!",
    execute(message, args) {
        if (args[0] === 'password' || args[0] === 'pass') {
            const alpha = 'abcdefghijklmnopqrstuvwxyz';
            const calpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const num = '1234567890';
            const specials = ',.!@#$%^&*';
            const options = [alpha, alpha, alpha, calpha, calpha, calpha, num, num, num, specials, specials, specials];
            let opt, choose;
            let pass = "";
            for (let i = 0; i < 12; i++) {
                opt = Math.floor(Math.random() * options.length);
                choose = Math.floor(
                    Math.random() * (options[opt].length)
                );
                pass = pass + options[opt][choose];
                options.splice(opt, 1);
            }

            message.reply('Password is ready!\n||`' + pass + '`||')
        }

        else {
            message.reply({ 
                content: "What do you want me to generate?\n・ `password`\n・ `??`\n・ `??`"
            })
        }
    }
}