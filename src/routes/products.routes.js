import { Router } from "express";
import { getProducts,createNewProduct, getProductById, deleteProductById,updateProductsById } from "../controllers/products.controller";

const router =Router()

router.get('/products',getProducts)

router.post('/products',createNewProduct)

router.get('/products/:Id',getProductById)

router.delete('/products/:Id',deleteProductById)

router.put("/products/:Id",updateProductsById)

router.get('/products',getProducts)






export default router