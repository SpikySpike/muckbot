var weather = require('weather-js');

module.exports = {
    name: 'weather',
    description: 'weather somewhere',
    execute(message, args) {
        weather.find({search: args.join(' '), degreeType: 'C'}, function(result) {

            message.reply(JSON.stringify(result, null, 2));
        });
    }
}