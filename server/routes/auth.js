import express from 'express'
import { register ,login} from './../Controllers/auth.js'
//Register 
const authRouter = express.Router()


authRouter.post("/register", register);
authRouter.post('/login',login)
export default authRouter