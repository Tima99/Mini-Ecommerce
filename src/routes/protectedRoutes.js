import { Router } from "express";
import { userAuthentic, logout } from "../controllers";

const route = Router()

// Get Protected Routes
route.get('/auth', userAuthentic)
route.get('/logout', logout)

export default route;

