const express = require("express");
const router = express.Router();

const authenticate = require("../Middleware/authenticate.js");

const cartItemController = require("../Controller/cartItem.controller.js");

router.put("/:id",authenticate,cartItemController.updateCartItem)

router.delete("/:id",authenticate,cartItemController.removeCartItem)

module.exports = router