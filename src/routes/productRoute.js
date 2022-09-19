import express from "express";

import { getProduct, listProducts, sendProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/products", listProducts);
router.post("/products", sendProduct);
router.get("/products/:id", getProduct);

export default router;