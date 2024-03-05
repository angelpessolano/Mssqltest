import { Router } from "express";
import { getProducts,createNewProduct, getProductById, deleteProductById,updateProductsById } from "../controllers/products.controller";
import { getUsers,registerNewUser,getUserById, deleteUserById,updateUserById } from "../controllers/registerUser.controller";


const router =Router()

router.get('/products',getProducts)

router.post('/products',createNewProduct)

router.get('/products/:Id',getProductById)

router.delete('/products/:Id',deleteProductById)

router.put("/products/:Id",updateProductsById)

router.get('/products',getProducts)

////
router.get('/users',getUsers)

router.post('/users',registerNewUser)

router.get('/users/:Id',getUserById)

router.delete('/users/:Id',deleteUserById)

router.put("/users/:Id",updateUserById)






export default router