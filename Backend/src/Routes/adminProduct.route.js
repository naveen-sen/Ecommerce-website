import Router from 'express'

import {createProducts,deleteProducts,updateProducts,createMultipleProducts} from '../Controller/product.controller.js'

import {authenticate} from '../Middleware/authenticate.js'

const router = Router()

router.post("/",authenticate,createProducts)

router.post("/multiple",authenticate,createMultipleProducts)
router.delete("/:productId",authenticate,deleteProducts)
router.put("/:productId",authenticate,updateProducts)

export default router