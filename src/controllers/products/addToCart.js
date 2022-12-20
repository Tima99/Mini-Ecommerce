import Cart from "../../models/cartModel"
import {ErrorHandler} from "../../utils"

export async function addToCart(req, res){
    try {
        const [product] = req.body
        const email = req.email
        const cartAlreadyExist = await Cart.exists({email})

        let cart = []

        if(cartAlreadyExist){
            cart = await Cart.findOneAndUpdate(
                {email},
                {
                    $push: {
                        cart : product
                    }
                },
                {returnDocument: 'after'}
            )
        }else{
            // create new cart if not exists
            const cartDoc = await Cart({
                email: email,
                carts: [product]
            })
            cart = cartDoc.save()
        }
        
        res.send(cart)

    } catch (error) {
        console.log(error)
        if(error instanceof ErrorHandler)
            return res.status(error.code).send(error.message)
        res.status(500).send("Try after sometime.")
    }
}