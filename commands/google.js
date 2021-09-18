const SerpApi = require('google-search-results-nodejs')
const search = new SerpApi.GoogleSearch()
const api_key = require('./config2.json')
const { description } = require('./command');

module.exports = {
    name: 'google',
    description: "google something",
    execute(message, args) {
        if (!args[0]) {
            message.reply('You need to type something to google it!'), message.react('❌');
        }
        else search.json({
            api_key: api_key,
            q: args, 
            location: "United States"
           }, (result) => {
             message.reply(result)
           })
    }
}