module.exports = {
    name: 'ip',
    description: "dox someone!! (cool)",
    execute(message, args, Discord) {
        let user = message.mentions.users.first();
        let ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));

        const ipEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`IP Found!`)
                .setDescription('Link to ' + `**${user.username}**'s ` + '`' + ip + '`!')
                .setURL(`https://whatismyipaddress.com/ip/${ip}`)
                .setImage('https://whatismyipaddress.com/wp-content/themes/wipa-bb-child/src/images/main-logo.png')
                .setFooter('Powered by WhatIsMyIPAdress', 'https://image.freepik.com/free-icon/ip-address_318-1438.jpg')
                .setTimestamp();

        if (!args[0]) {
            message.reply('You have to type in who do you want to dox!'),
                message.react('😨')
        }

        if (user) {
            message.reply('`Getting IP address...`')
			.then((sentMessage) => {
				setTimeout(function () {
                    sentMessage.edit('`Cracking SSH...`')
					.then((sentMessage) => {
						setTimeout(function () {
							sentMessage.edit({ content: `<@${user.id}>'s IP address is: ` + '`' + ip + '`', embeds: [ipEmbed]})
						}, 1000)
					})
				}, 3000)
			});
        }

        else if (args.includes('@everyone')) {
            message.reply("You can't dox everyone!"), message.react('❌');
        }
    }
}

/*
let user = message.mentions.users.first();
        var ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));

        if (!args[0]) {
            message.reply('You have to type in who do you want to dox!'),
                message.react('😨')
        }

        if (user) {
            message.reply('`Getting IP address...`')
			.then((sentMessage) => {
				setTimeout(function () {
                    sentMessage.edit('`Cracking SSH...`')
					.then((sentMessage) => {
						setTimeout(function () {
							sentMessage.edit(`<@${user.id}>'s IP address is: ` + '`' + ip + '`')
						}, 1000)
					})
				}, 3000)
			});
        }

        else if (args.includes('@everyone')) {
            message.reply("You can't dox everyone!"), message.react('❌');
        }
*/