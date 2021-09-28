const wait = require('util').promisify(setTimeout);

module.exports = {
    name: 'btn',
    description: "test buttons and stuff",
    execute(message, args, Discord, MessageActionRow, MessageButton) {
        const btn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel(args.join(' '))
                    .setStyle('PRIMARY'),
            ) 
            .addComponents(
                new MessageButton()
                    .setCustomId('secondary')
                    .setLabel(args.join(' '))
                    .setStyle('SECONDARY'),
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('success')
                    .setLabel(args.join(' '))
                    .setStyle('SUCCESS'),
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('danger')
                    .setLabel(args.join(' '))
                    .setStyle('DANGER'),
            )

            message.reply({ content: args.join(' '), components: [btn] })
    }
}