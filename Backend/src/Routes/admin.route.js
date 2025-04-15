const express = require("express");
const router = express.Router();
const authenticate = require("../Middleware/authenticate.js");

const orderController = require("../Controller/adminOrder.controller.js");
const Order = require("../Model/order.model.js");

router.get("/",authenticate,orderController.getAllOrders)

router.put("/:orderId/confirmed",authenticate,orderController.confirmOrder)

router.put("/:orderId/shipped",authenticate,orderController.shippedOrder)

router.put("/:orderId/delivered",authenticate,orderController.deliverOrder)

router.put("/:orderId/cancel",authenticate,orderController.cancelOrder)

router.delete("/:orderId",authenticate,orderController.deleteOrder)

module.exports = router