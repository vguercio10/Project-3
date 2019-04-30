/* === Dependencies === */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser'); //middleware
const cookieParser = require('cookie-parser'); //middleware
const mongoose = require('mongoose');
const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const router = require('./routes/index');
/* === Set the PORT to work with deployment environment === */
const PORT = process.env.PORT || 3001;
const app = express();


// middleware for requests such as api or passport requests.
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
// Configuring Passport sessions
app.use(require('express-session')({
  saveUninitialized: true,
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 1 }, // Expires in 1 Day

}));
app.use(passport.initialize());
app.use(flash());


/* Serve up static assets (usually on heroku) */
if (process.env.NODE_ENV === "production") {
  app.use(passport.session()); app.use(express.static(path.join(__dirname, '../build')));
};


//routing
app.use(router);

/* Express 404 error handler */
app.use(function(req, res, next) {
  var err = new Error('404 in Server.js, route Not Found');
  err.status = 404;
  next(err);
});

//Server-Side authentication w/ passport.js on our Model
const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//Mongoose connection
mongoose.connect('mongodb://localhost/mern_authenticate_me',{ useNewUrlParser: true });

//Development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

/* Production error handler no stacktraces leaked to user */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: {}
  });
});


// // uses file that handles backend requests. 
// app.use('/client/api', require("./client/routes/routes.js.js"));


// // // this route handles login. 
// app.post('/client/api/login', function() {
//   console.log("testing api")
// });



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
