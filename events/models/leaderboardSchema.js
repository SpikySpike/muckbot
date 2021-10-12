const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const lbSchema = new mongoose.Schema({
    _id: reqString,
    channelId: reqString
});

module.exports = mongoose.model('lb', lbSchema)