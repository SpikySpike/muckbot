module.exports = {
    name: 'file',
    description: "find a file on author's pc!",
    execute(message, args, fs){
        if (args[0] === 'cmd') {
            if (args[1]) {
                if (message.author.id === '733342027366006874') { //
                    if (!fs.existsSync(`./commands/${args[0]}`)) return message.reply("No such file in the `./commands/` folder!"), message.react('❌');
                    
                    message.reply({ content: '📂 ' + '`./commands/' + args[1] + '`' + ' file', files: ['./commands/' + args[1]]}), message.react('📁');
                }
                else if (!args[1]) {
                    message.reply('You have to type in the file name!'), message.react('❌');
                }

                else {
                    message.reply("You don't have access to " + '`./commands/' + args[1] + '`' + " file!"), message.react('🔒');
                }
            }
        }
        else if (args[0]) { 
            if (message.author.id === '733342027366006874') {
                if (!fs.existsSync(`./${args[0]}`)) return message.reply("No such file or directory!"), message.react('❌'); // pitäis toimia
                message.reply({ content: '📂 ' + '`./' + args + '`' + ' file', files: ['./' + args]}), message.react('📁');
            }
            else {
                // kokeile
                if (!fs.existsSync(`./${args[0]}`)) {
                    return message.reply("No such file or directory!"), message.react('❌');
                } // 
                
                message.reply("You don't have access to " + '`./' + args + '`' + " file!"), message.react('🔒');
            } 
        } 
        else if (!args[0]) {
            message.reply('You have to type in what do you want to search!'), message.react('❌');
        }
    }
}