const Account = require("../models/account");
const passport = require('passport');

module.exports = {
    getUser: function(req, res, next) {
        if(req.user) {
            return res.status(200).json({
                user: req.user,
                authenticated: true
            });
        } else {
            return res.status(401).json({
                error: 'User is not authenticated',
                authenticated: false
            });
        }
    },
    register: function(req, res, next) {
		console.log('/register handler', req.body);
		var newUser = new Account({ username : req.body.username,
			age: req.body.age,
			gender: req.body.gender,
			account: req.body.account})
		Account.register(newUser, req.body.password, (err, account) => {
				if (err) {
					return res.status(500).send({ error : err.message });
				}

				passport.authenticate('local')(req, res, () => {
						req.session.save((err) => {
								if (err) {
										return next(err);
								}
								
 
								// if (req.body.account === "user"){}
								//conditional for cub or mom
								
								//Send them to the dashboard

								// res.redirect("/login");
						});
				});
		});
    },
    login: function(req, res, next) {
        console.log('/login handler');
		req.session.save((err) => {
				if (err) {
						return next(err);
				}
				res.status(200).send('OK');
		});
    },
    logout: function(req, res, next) {
        req.logout();
		req.session.save((err) => {
				if (err) {
						return next(err);
				}
				res.status(200).send('OK');
		});
    },
    
    test: function(req , res, next){
        console.log(`Ping Dinger ${req.statusCode}`);
		res.status(200).send("Dong!");
    }

};