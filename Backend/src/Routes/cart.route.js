const express = require("express");
const router = express.Router();

const authenticate = require("../Middleware/authenticate.js");
const cartController = require("../Controller/cart.controller.js");

router.get("/",authenticate,cartController.findUserCart)
router.put("/add",authenticate,cartController.addToCart)

module.exports = router