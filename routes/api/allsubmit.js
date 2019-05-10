const router = require("express").Router();
const submissionController = require("../../controllers/submissionController");



// Matches with "/api/submit/questionsave"
router.route("/questionsave")
  .post(submissionController.create);

  // Matches with "/api/submit/responsesave"
router.route("/responsesave")
.post(submissionController.update);

/* Authentication Routes */

router.route("/getAllQuestions")
  .get(submissionController.findAll);

  router.route("/getAnsweredQuestions")
  .post(submissionController.findAllAnswered);



//api routes page talks to the controller. controller is the instructions sheet the database listens to.
//get and post,& put for update methods.

/* Testing Endpoint */
router
.route("/ping")

.get(submissionController.findAll);




module.exports = router;