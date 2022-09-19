import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addItem, getCart } from "../controllers/cartController.js";

const router = express.Router();
router.post('/cart', authMiddleware, addItem);
router.get('/cart', authMiddleware, getCart);


export default router;