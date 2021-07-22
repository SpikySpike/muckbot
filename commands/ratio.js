module.exports = {
    name: 'ratio',
    description: "ratio someone",
    execute(message, args, Discord, client){
        message.channel.send('Ratioed ' + args.join(" "));
        /*const ratioEmoji = '❤️'
        message.channel.send('Ratio' + args)

        client.on('messageReactionAdd', async (reaction, user) => {

        }); */
    }
}