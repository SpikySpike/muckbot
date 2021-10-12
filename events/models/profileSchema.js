const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, require: true },
    userID: { type: String, require: true, unique: true },
    serverName: { type: String, require: true },
    serverID: { type: String, require: true},
    coins: { type: Number, default: 0 }
});

const model = mongoose.model('ProfileModels', profileSchema);

module.exports = model;