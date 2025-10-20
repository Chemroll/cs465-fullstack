const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

const tripsController = require("../controller/trips");
const { authenticate } = require("passport");

router.route("/login").post(authController.login);
router.route("/register").post(authController.register);

router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(authenticateJWT, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.export = router;