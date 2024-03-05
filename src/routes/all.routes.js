import { Router } from "express";
import { getProducts,createNewProduct, getProductById, deleteProductById,updateProductsById } from "../controllers/products.controller";
import { getUsers,register,getUserById, deleteUserById,updateUserById, login } from "../controllers/registerUser.controller";


const router =Router()

router.get('/products',getProducts)

router.post('/products',createNewProduct)

router.get('/products/:Id',getProductById)

router.delete('/products/:Id',deleteProductById)

router.put("/products/:Id",updateProductsById)

router.get('/products',getProducts)

////
router.get('/users',getUsers)

router.post('/users',register)

router.get('/users/:Id',getUserById)

router.delete('/users/:Id',deleteUserById)

router.put("/users/:Id",updateUserById)

///Login
router.post('/login',login)






export default router