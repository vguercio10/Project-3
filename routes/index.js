const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");

//API Routes
router.use("/api", apiRoutes);

//If no API routes are hit, send the React app
// router.use((req, res) =>
// res.sendFile(path.join(__dirname, "../client/build/index.hmtl"))
// );

// database calls

module.exports = router;

module.exports=router;