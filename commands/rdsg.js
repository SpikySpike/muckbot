module.exports = {
    name: 'rdsg',
    description: "Random Dream Stan Generator!",
    execute(message, args, Discord) {
        message.reply('`Random Dream Stan Generator 2.0` is on! <:tick:889135012253954058>');
        message.channel.send('`Thinking...`');

        var name = ['Katie', 'Olivia', 'Emily'];
        let nameRandom = Math.floor(Math.random() * name);
        var colors = ['#db0000', '#e677d1', '#db2c69', '#e01f36', '#e08c1f', '#23eb52', '#6405a3', '#7aebe7'];
        let colorsRandom = Math.floor(Math.random() * colors);
        var pfp = ({ files: ['./img'] });
        let pfpGener = Math.floor(Math.random() * pfp);
        var age = ['13', '14', '15'];
        let ageRandom = Math.floor(Math.random() * age)
        
        const rdsgEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${nameRandom}`)
            .setDescription(`Hello! My name is ${nameRandom}, and I'm ${ageRandom} yrs old!\nPronouns: dreamthey/dreams.\nUwU Furry\nGeorge, Sapnap, DREAM 😍`)
            .setThumbnail(pfpGener)
            .setFooter('Twitter User', 'https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png');
        
        message.channel.send({ embeds: [rdsgEmbed] })
    }
}