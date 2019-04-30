const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser"); //middleware
const cookieParser = require("cookie-parser"); //middleware
const passport = require("passport");

// middleware for routes
app.use(cookieParser());

app.use(bodyParser.urlencoded({
  extended: true 
}));
app.use(bodyParser.json());



// uses file that handles backend requests. 
app.use('/client/api', require("./client/api/routes.js"));


// // this route handles login
app.post('/client/api/login', function() {
  console.log("testing api")
});




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
