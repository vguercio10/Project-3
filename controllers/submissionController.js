//function that handles saving ,deleting and update question.
const Account = require("../models/account");
const passport = require('passport');

module.exports = {
    saveQuestion: function(req, res, next) {
        