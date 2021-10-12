const { Message, Client, Collection, MessageEmbed } = require('discord.js');
const lbSchema = require('../events/models/leaderboardSchema')

module.exports = {
    name: "leaderboard",
    description: "check server points leaderboard",
    guildOnly: true,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args
     */
    async execute(client, message, profileData) {
        const collection = new Collection();

        await Promise.all(
            message.guild.members.cache.map(async (member) => {
                const id = member.id;
                const bal = await profileData.coins;
                console.log(`${member.user.tag} -> ${bal}`);
                return bal !== 0 ? collection.set(id, {
                    id,
                    bal,
                })
                :null
            })
        );

        const data = collection.sort((a, b) => b.bal - a.bal).first(10)

        message.channel.send(
            new MessageEmbed()
                .setTitle(`${message.guild.name} Coin Leaderboard`)
                .setDescription(
                    data.map((v, i) => {
                        return `**${i+1}.** ${client.users.cache.get(v.id).tag} => **${v.bal} coins**`
                    })
                )
        )
    },
};