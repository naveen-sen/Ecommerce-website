import Router from 'express'

import {createReviews,getAllReviews} from '../Controller/review.controller.js'
import {authenticate} from '../Middleware/authenticate.js'

const router = Router()

router.post("/create",authenticate,createReviews)

router.get("/product/:productId",authenticate,getAllReviews)

export default router
