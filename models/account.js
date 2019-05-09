const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    age: Number,
    gender: String,
    account: String,
    questions: [{ type: Schema.Types.ObjectId, ref: "Question"}]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);