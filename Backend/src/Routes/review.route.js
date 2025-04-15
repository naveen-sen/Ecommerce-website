const express = require("express");
const router = express.Router();

const reviewController = require("../Controller/review.controller.js");

const authenticate = require("../Middleware/authenticate.js");

router.post("/create",authenticate,reviewController.createReview)

router.get("/product/:productId",reviewController.getAllReviews)

module.exports = router
