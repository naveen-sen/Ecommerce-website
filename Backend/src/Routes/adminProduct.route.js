const express = require("express");
const router = express.Router();

const productController = require("../Controller/product.controller.js");

const authenticate = require("../Middleware/authenticate.js");


router.post("/",authenticate,productController.createProduct)

router.post("/multiple",authenticate,productController.createMultipleProduct)
router.delete("/:productId",authenticate,productController.deleteProduct)
router.put("/:productId",authenticate,productController.updateProduct)

module.exports = router