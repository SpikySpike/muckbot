module.exports = {
    name: 'kick',
    description: 'You can kick members with this command.',
    execute(message, args){
        const member = message.mentions.users.first();
        console.info("roles", message.member.roles.cache)
        if(member && message.member.roles.cache.has('863731085196263455')){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("User has been kicked!");
        }else{
            message.channel.send("I coudln't kick that member, or you don't have permissions to kick members.");
        }
    }
}