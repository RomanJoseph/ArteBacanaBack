import { db } from "../db/db.js"
import { ObjectId } from "mongodb"

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
        await db.collection("products").insertOne({name, seller, stock, type, image, price, description})
    }catch(error){
        return console.log(error)
    }

    return res.sendStatus(201)
}

async function getProduct(req, res){
    const { id } = req.body
    const productId = ObjectId(id)

    if(!(await db.collection("products").findOne({_id : productId}))){
        return res.sendStatus(404)
    }

    try{
        const product = await db.collection("products").findOne({_id : productId})
        return res.send(product)
    }catch(error){
        return console.log(error)
    }
}

export { listProducts, sendProduct, getProduct }