import { db } from "../db/db.js";

async function addItem(req, res) {
    const { id } = req.body;

    const { session } = res.locals;

    try {
        const user = await db.collection("users").findOne({ _id: session.userId });
        if (!user) {
            res.sendStatus(404);
            return;
        }

        user.cart.push(id);

        await db.collection("users").updateOne({
            _id: user._id
        }, { $set: user });

        res.sendStatus(200);

    } catch (error) {
        res.sendStatus(500);
        return;
    }
}

async function getCart(req, res) {
    const { session } = res.locals;

    try {
        const user = await db.collection("users").findOne({ _id: session.userId });
        if (!user) {
            res.sendStatus(404);
            return;
        }

        const cartArray = user.cart;

        res.send(
            {
                cartArray
            }
        );
    } catch (error) {
        res.sendStatus(500);
        return;
    }
}

async function removeItem(req, res) {
    const { index } = req.params;
    
    const session = res.locals

    try {
        const user = await db.collection("users").findOne({ _id: session.userId });
        if (!user) {
            res.sendStatus(404);
            return;
        }

        user.cart.splice(index, 1);

        await db.collection("users").updateOne({
            _id: user._id
        }, { $set: user });

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
        return;
    }
}

export { addItem, getCart, removeItem }