
export function getProducts(req,res){
    const products = [
        {
            id: 1,
            name: "Laptop",
            description: "Super fast and quick | Special for developers",
            price: "78",
            priceSym: "$"
        },
        {
            id: 2,
            name: "Camera",
            description: "High quality Camera",
            price: "199",
            priceSym: "$"
        },
        {
            id: 3,
            name: "keyboard & Mouse",
            description: "Pair of keyboard & Mouse",
            price: "48",
            priceSym: "$"
        },
        {
            id: 4,
            name: "iPhone",
            description: "Christmas offer",
            price: "18",
            priceSym: "$"
        },
        {
            id: 5,
            name: "Gym Accesories",
            description: "Dumbell, track suit and more...",
            price: "58",
            priceSym: "$"
        }
    ]
    res.send(products)
}