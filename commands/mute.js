const { Permissions } = require('discord.js')

module.exports = {
    name: "mute",
    description: "mute cmd",
    expectedArgs: "<@username> <time>",
    execute(message, args, Discord, ms) {
        const timeArgs = ms(args[1]);
        const timeArgsLetter = ms(timeArgs);
        const memberTarget = message.mentions.users.first();
        const mutedRole = message.guild.roles.cache.find(
            (role) => role.name === 'Muted'
        );

        const mutedEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`${memberTarget} has been muted!`)
            .setDescription(`**${memberTarget}** has been muted for ${timeArgsLetter}`)

        if (!message.member.permissions.has('MANAGE_ROLES')) {
            message.reply("You don't have right permissions to mute members!")
        }

        if (!timeArgs) {
            message.reply(`You have to type in how long for do you want to mute **${memberTarget}**!`)
        }

        else {
            if (!memberTarget) {
                message.reply("You have to type in who do you want to mute!")
            }

            else if (!mutedRole) {
                message.guild.roles.create({ 
                    name: 'Muted',
                    color: 'GREY',
                    permissions: [
                        !Permissions.FLAGS.SEND_MESSAGES, 
                    ] 
                });
                
                memberTarget.guild.roles.add(mutedRole)
                message.channel.send({ embeds: [mutedEmbed] })
            }
        }
    }
}