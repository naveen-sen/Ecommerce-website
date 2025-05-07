import Router from 'express'

import {getAllProduct,findProductsById} from '../Controller/product.controller.js'

import {authenticate} from '../Middleware/authenticate.js'

const router = Router()

router.get("/",getAllProduct)

router.get("/id/:productId",authenticate,findProductsById)

export default router
