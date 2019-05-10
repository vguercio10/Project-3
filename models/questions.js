const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({

    user: { type: Schema.Types.ObjectId, ref: "Account"},
    question: String,
    answer: Boolean,
    response: String,
    respondantsName: String,
    date: {
        type: Date, 
        default: Date.now
    }
    
});

module.exports = mongoose.model('questions', Question);