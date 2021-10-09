module.exports = {
    name: 'kick',
    description: 'You can kick members with this command.',
    execute(message, args) {
        const member = message.mentions.users.first();
        if (member && message.member.permissions.has('KICK_MEMBERS')){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`${memberTarget.tag} was kicked!\nJoined: ${moment.utc(memberTarget.joinedAt).format('DD/MM/YY')}`);
        }
        else {
            message.channel.send("I couldn't kick that member, or you don't have permissions to kick members.");
        }
    }
}