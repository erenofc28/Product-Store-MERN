import express from "express";
// import mongoose from "mongoose";
// import product from "./models/product.js";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/controller.js";
const router = express.Router(); 

//for getting all products
router.get("/",getProducts)
// for updating a product
router.put("/:id",updateProduct) 

//for deleting a product
router.delete("/:id",deleteProduct)

//for adding products
router.post("/",createProduct)

export default router;