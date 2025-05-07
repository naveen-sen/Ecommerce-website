import Router from 'express'

import {createRatings,getAllRatings} from '../Controller/rating.controller.js'

import {authenticate} from '../Middleware/authenticate.js'

const router = Router()

router.post("/create",authenticate,createRatings)

router.get("/product/:productId",authenticate,getAllRatings)

export default router