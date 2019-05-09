//function that handles saving ,deleting and update question.
const db = require("../models");

module.exports = {
    findAll: function(req, res, next) {
        db.Questions //calling the questions model
        .find(req.query)
        .sort({ date: -1 })
        //dbModel is a placeholder
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Questions 
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log(req.body);
        db.Questions
        .create(req.body)
        .then(dbModel=>{
            console.log(dbModel._id);
            
            return db.Account.findOneAndUpdate({},{$push:{questions:dbModel._id}},{new:true})
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Questions
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Questions
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};