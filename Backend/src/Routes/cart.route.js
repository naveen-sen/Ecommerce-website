import Router from 'express'

import {authenticate} from '../Middleware/authenticate.js'
import {findUserCarts,addToCart} from '../Controller/cart.controller.js'

const router = Router()

router.get("/", authenticate, findUserCarts)
router.put("/add",authenticate,addToCart)

export default router