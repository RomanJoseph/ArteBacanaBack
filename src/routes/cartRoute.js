import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addItem, getCart } from "../controllers/cartController.js";
import { sendOrder } from "../controllers/checkoutController.js";

const router = express.Router();
router.post('/cart', authMiddleware, addItem);
router.get('/cart', authMiddleware, getCart);
router.post("/checkout", authMiddleware, sendOrder)


export default router;