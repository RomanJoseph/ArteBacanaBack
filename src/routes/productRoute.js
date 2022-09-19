import express from "express";

import { listProducts, sendProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/products", listProducts);
router.post("/products", sendProduct)

export default router;