import { db } from "../db/db.js"

async function listProducts(req, res) {
    try {
        const productsArray = await db.collection("products").find().toArray();

        res.send(
            {
                productsArray
            }
        );
    } catch (error) {
        res.sendStatus(500);
    }
}

async function sendProduct(req, res) {
    const { name, seller, stock, type, image, price, description } = req.body

    try{
        db.collection("products").insertOne({name, seller, stock, type, image, price, description})
    }catch(error){
        return console.log(error)
    }

    return res.sendStatus(201)
}

export { listProducts, sendProduct }