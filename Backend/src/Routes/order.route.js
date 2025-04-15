const express = require("express");
const router = express.Router();

const authenticate = require("../Middleware/authenticate.js");

const orderController = require("../Controller/order.controller.js");

router.post("/",authenticate,orderController.createOrder)

router.get("/user",authenticate,orderController.orderHistory)

router.get("/:orderId",authenticate,orderController.findOrderById)

module.exports = router