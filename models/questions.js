const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Question = new Schema({
    username: String,
    question: String,
    answer: Boolean,
    response: String,
    respondantsName: String
});

// Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('questions', Question);