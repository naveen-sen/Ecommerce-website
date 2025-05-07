import Router from 'express'

import {authenticate} from '../Middleware/authenticate.js'

import {createOrders,orderHistory,findOrdersById} from '../Controller/order.controller.js'

const router = Router()

router.post("/",authenticate,createOrders)

router.get("/user",authenticate,orderHistory)

router.get("/:orderId",authenticate,findOrdersById)

export default router