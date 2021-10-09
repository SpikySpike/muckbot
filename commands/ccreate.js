module.exports = {
    name: "ccreate",
    description: "create channels!",
    guildOnly: true,
    memberpermissions: "MANAGE_CHANNELS",
    expectedArgs: "<channel-type> <filter> <name>",
    cooldown: 30000,
    execute(message, args) {
        const typeArgs = args[0];
        const nsfwArgs = args[1];
        const nameArgs = args.splice(2).join('-');
        // const textArgs = nameArgs.replace(/ /g, '-');

        if (!this.cooldown) {
            message.reply(`You have to wait **30**s to use this command again!`)
        }

        else if (!message.member.permissions.has('MANAGE_CHANNELS')) {
            message.reply("You don't have right permissions to manage channels!")
        }

        else {
            if (typeArgs !== 'GUILD_TEXT' || typeArgs !== 'GUILD_VOICE') {
                message.reply('Invalid channel type! Please include: `GUILD_TEXT` or `GUILD_VOICE`')
            }
            
            else if (typeArgs === 'GUILD_TEXT') {
                if (nsfwArgs !== 'nsfw') {
                    message.guild.channels.create(nameArgs, {
                        type: 'GUILD_TEXT',
                        nsfw: false
                      })
                }
                
                else if (nsfwArgs === 'nsfw') {
                    message.guild.channels.create(nameArgs, {
                        type: 'GUILD_TEXT',
                        nsfw: true
                      })
                }
            }

            else if (typeArgs === 'GUILD_VOICE') {
                if (nsfwArgs !== 'nsfw') {
                    message.guild.channels.create(nameArgs, {
                        type: 'GUILD_VOICE',
                        nsfw: false
                      })
                }
                
                else if (nsfwArgs === 'nsfw') {
                    message.guild.channels.create(nameArgs, {
                        type: 'GUILD_VOICE',
                        nsfw: true
                      })
                }
            }
        }
    },
};