import { JWT_SECRET_KEY, PRODUCTION } from "../../config"
import jwt from "jsonwebtoken"

export async function SaveJwt(payload, res){
    try {
        const expiresIn = 60 * 60 * 24 // hour
        const token = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn})
        res.cookie('jwt', token, {
            expiresIn,
            sameSite: PRODUCTION == "true" ? "none" : 'Lax',
            httpOnly: true,
            secure:  PRODUCTION == "true" ? true : false
        })
    } catch (error) {
        // console.log(error)
        return Promise.reject(error)
    }
}