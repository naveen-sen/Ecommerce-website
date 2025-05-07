import Router from 'express'
import {authenticate} from '../Middleware/authenticate.js'

import {getAllOrder,confirmOrders,shippedOrders,deleteOrders,cancelOrders,deliverOrders} from '../Controller/adminOrder.controller.js'
// const Order = require("../Model/order.model.js");

const router = Router()

router.get("/",authenticate,getAllOrder)

router.put("/:orderId/confirmed",authenticate,confirmOrders)

router.put("/:orderId/shipped",authenticate,shippedOrders)

router.put("/:orderId/delivered",authenticate,deliverOrders)

router.put("/:orderId/cancel",authenticate,cancelOrders)

router.delete("/:orderId",authenticate,deleteOrders)

export default router