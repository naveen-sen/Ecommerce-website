import Router from 'express'

import {authenticate} from '../Middleware/authenticate.js'

import {createPaymentLinks,updatePaymentInformation} from '../Controller/payment.controller.js'

const router = Router()

router.post("/:id",authenticate,createPaymentLinks)

router.get("/",authenticate,updatePaymentInformation)

export default router