module.exports = {
    name: 'ban',
    description: 'You can ban members with this command.',
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.roles.cache.has('863731085196263455')){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send("User has been banned!");
        }else{
            message.channel.send("I couldn't ban that member, or you don't have permissions to ban members.");
        }
    }
}