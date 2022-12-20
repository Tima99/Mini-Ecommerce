import { PRODUCTION } from "../../config";

export async function logout(req, res){
    try {
        if(!req.email) throw new Error("Unauthorised user")

        res.clearCookie('jwt', {
            sameSite: PRODUCTION == "true" ? "none" : 'Lax',
            httpOnly: true,
            secure:  PRODUCTION == "true" ? true : false
        })

        res.send(`${req.email} Logout Sucess.`)
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
}