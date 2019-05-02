const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    age: Number,
    gender: String,
    type: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);