import Router from 'express'

import {getAllProduct,findProductsById, getProductBySection} from '../Controller/product.controller.js'

const router = Router()

router.get("/", getAllProduct)

router.get("/:productId", findProductsById)

router.get("/section",getProductBySection)

export default router
