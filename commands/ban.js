module.exports = {
    name: 'ban',
    description: 'You can ban members with this command.',
    execute(message, args){
        const member = message.mentions.users.first();
        console.info("roles", message.member.roles.cache)
        if(member && message.member.roles.cache.has('863731085196263455')){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.reply(`${member} has been banned!`);
        }
        else if (!args[0]) {
            message.reply("You have to type in who do you want to ban!");
        }
        
        
        else {
            message.reply("I couldn't ban that member, or you don't have permissions to ban members.");
        }
    }
}