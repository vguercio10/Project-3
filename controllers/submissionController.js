//function that handles saving ,deleting and update question.
const db = require("../models");

module.exports = {
    findAll: function (req, res, next) {
        db.Questions //calling the questions model
            .find({})
            .sort({
                date: -1
            })
            //dbModel is a placeholder
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Questions
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body);
        db.Questions
            .create(req.body)
            .then(dbModel => {
                console.log(dbModel._id);

                return db.Account.findOneAndUpdate({}, {
                    $push: {
                        questions: dbModel._id
                    }
                }, {
                    new: true
                })
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log(req.body)
        db.Questions
            .findOneAndUpdate({
                _id: req.body.questionId
            }, {
                answer: true,
                response: req.body.response,
                respondantsName: req.body.userEmail
            })
            .then(dbModel => {
                db.Questions //calling the questions model
                    .find({})
                    .sort({
                        date: -1
                    })
                    //dbModel is a placeholder
                    .then(allQuestions => res.status(200).json(allQuestions))
                    .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
    },
    findAllAnswered: function (req, res) {
        console.log(req.body)
        db.Questions
            .find({
                respondantsName: req.body.userEmail,
                answer: true
            })
            .then(dbModel => {
                console.log(dbModel)
                res.status(200).json(dbModel)
               
            })
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Questions
            .findById({
                _id: req.params.id
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};