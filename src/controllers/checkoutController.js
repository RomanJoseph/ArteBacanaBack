import { db } from "../db/db.js"
import { ObjectId } from "mongodb"

async function sendOrder(req, res){
    try{
        await db.collection("orders").insertOne(req.body)
    }catch(error){
        console.log(error)
        return res.sendStatus(500)
    }
} 
