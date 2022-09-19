import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addItem } from "../controllers/cartController.js";

const router = express.Router();
router.post('/cart', authMiddleware, addItem);


export default router;