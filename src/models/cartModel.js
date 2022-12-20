import mongoose from "mongoose";

const Schema = mongoose.Schema

const cartSchema = new Schema({
    email : {type: String, required: true, unique: true},
    cart : [{
        id: String,
        name: String,
        description: String,
        price: Number,
        priceSym: String
    }]
}, {timestamps : true})

const Cart = mongoose.model('Cart', cartSchema, "carts")

export default Cart
