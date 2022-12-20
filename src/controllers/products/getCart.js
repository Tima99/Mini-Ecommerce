import { Cart } from "../../models";

export async function getCart(req, res){
    try {
        const cart = await Cart.findOne({email : req.email})

        res.send(cart)
    } catch (error) {
        
    }
}