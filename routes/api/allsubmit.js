const router = require("express").Router();
const submissionController = require("../../controllers/submissionController");


// Matches with "/api/submit/"
router.route("/questionsave")
  .post(submissionController.create);

/* Authentication Routes */
router.route("/")
  .get(submissionController.findAll);

//api routes page talks to the controller. controller is the instructions sheet the database listens to.
//get and post,& put for update methods.

/* Testing Endpoint */
router
.route("/ping")
.get(submissionController.findAll);

module.exports = router;