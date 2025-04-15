const express = require("express");
const router = express.Router();

const ratingController = require("../Controller/rating.controller.js");

const authenticate = require("../Middleware/authenticate.js");

router.post("/create",authenticate,ratingController.createRating)

router.get("/product/:productId",authenticate,ratingController.getAllRatings)

module.exports = router