import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addItem, getCart, removeItem } from "../controllers/cartController.js";

const router = express.Router();
router.post('/cart', authMiddleware, addItem);
router.get('/cart', authMiddleware, getCart);
router.put('/cart/:key', authMiddleware, removeItem);


export default router;