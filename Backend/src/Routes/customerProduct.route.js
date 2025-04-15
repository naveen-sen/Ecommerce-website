const express = require("express");
const router = express.Router();

const productController = require("../Controller/product.controller.js");

const authenticate = require("../Middleware/authenticate.js");

router.get("/",authenticate,productController.getAllProducts)

router.get("/id/:productId",authenticate,productController.findProductById)

module.exports = router
