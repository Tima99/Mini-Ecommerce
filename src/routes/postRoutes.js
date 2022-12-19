import { Router } from "express";
import { register, login, verifyOtp } from "../controllers";

const route = Router()

route.post('/register', register)
route.post('/login', login)
route.post('/verify/otp', verifyOtp)

export default route;