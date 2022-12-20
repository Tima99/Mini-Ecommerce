import { Router } from "express";
import { userAuthentic, logout, getProducts, addToCart, getCart, removeToCart } from "../controllers";

const route = Router()

// Get Protected Routes
route.get('/auth', userAuthentic)
route.get('/logout', logout)
route.get('/products', getProducts)
route.get("/cart", getCart)
route.get('/removetoCart/:id', removeToCart)

route.post('/addtoCart', addToCart)

export default route;

