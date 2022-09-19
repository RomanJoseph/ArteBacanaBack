import express from "express";

import { getProduct, listProducts, sendProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/products", listProducts);
router.post("/products", sendProduct);
router.get("/product", getProduct)

export default router;