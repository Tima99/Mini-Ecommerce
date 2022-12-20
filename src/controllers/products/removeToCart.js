import Cart from "../../models/cartModel"
import {ErrorHandler} from "../../utils"

export async function removeToCart(req, res){
    try {
        const {id} = req.params
        
        const email = req.email

        const cartDoc = await Cart.findOne({email})

        if(!cartDoc) throw new ErrorHandler({code: 422, message: "No Cart Found"})

        const idx = cartDoc.cart.findIndex(c => c.id == id)
        if(id === -1) throw new ErrorHandler({code: 422, message: "Product id not found or invalid"})

        cartDoc.cart.splice(idx, 1)

        const cart = await cartDoc.save()

        res.send(cart)

    } catch (error) {
        console.log(error)
        if(error instanceof ErrorHandler)
            return res.status(error.code).send(error.message)
        res.status(500).send("Try after sometime.")
    }
}