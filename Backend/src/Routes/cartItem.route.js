import Router from 'express'

import {authenticate} from '../Middleware/authenticate.js'

import {updateCartItems,removeCartItems} from '../Controller/cartItem.controller.js'

const router = Router()

router.put("/:id",authenticate,updateCartItems)

router.delete("/:id",authenticate,removeCartItems)

export default router