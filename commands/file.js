module.exports = {
    name: 'file',
    description: "find a file on author's pc!",
    execute(message, args){
        if (args[0] === 'cmd') {
            if (args[1]) {
                if (message.author.id === '733342027366006874') {
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
                message.reply({ content: '📂 ' + '`./' + args + '`' + ' file', files: ['./' + args]}), message.react('📁');
            }
            else {
                message.reply("You don't have access to " + '`./' + args + '`' + " file!"), message.react('🔒');
            }
        }
        else if (!args[0]) {
            message.reply('You have to type in what do you want to search!'), message.react('❌');
        }
    }
}