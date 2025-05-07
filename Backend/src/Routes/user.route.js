import Router from 'express'
import {getAllUsers,getUserProfile} from '../Controller/user.controller.js'

const router = Router()

router.get("/",getAllUsers)
router.get("/profile",getUserProfile)

export default router
