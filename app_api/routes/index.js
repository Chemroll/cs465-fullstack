const express = require("express");
const router = express.Router();

const tripsController = require("../controller/trips");

router.route("/trips").get(tripsController.tripsList);

router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.export = router;