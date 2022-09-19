import { db } from "../db/db.js"
import { ObjectId } from "mongodb"

async function sendOrder(req, res){

    console.log(req.body)
    const { session } = res.locals;

    try{
        const user = await db.collection("users").findOne({ _id: session.userId })
        if (!user) {
            res.sendStatus(404);
            return;
        }

        user.history.push({products: user.cart})
        user.cart = []
        await db.collection("users").updateOne({_id: user._id}, { $set: user })
        res.send(user)
    }catch(error){
        console.log(error)
        return res.sendStatus(500)
    }
} 

export { sendOrder }