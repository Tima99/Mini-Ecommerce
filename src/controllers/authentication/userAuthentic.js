export async function userAuthentic(req, res){
    res.send({email: req.email})
}