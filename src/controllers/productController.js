import { db } from "../db/db.js"

async function listProducts(req, res) {
    try {
        const productsArray = await db.collection("products")
        .find().toArray();

        res.send(
            {
                productsArray
            }
        );
    } catch (error) {
        res.sendStatus(500);
    }
}

export { listProducts }