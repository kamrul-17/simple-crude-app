const express = require('express');
const product = require('../models/productModel.js');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controller/productController.js');
//const { createProduct, deleteProduct } = require('../controllers/product.controllers.js');
const productsRoute = require('../routes/productsRoute.js');
// Get all products
router.get('/', getProducts);

// Get a single product
router.get('/:id)', getProduct);

//create a product
router.post("/", createProduct);

//update a product
router.put('/:id', updateProduct);

//delete a product
router.delete('/:id', deleteProduct);

module.exports = router;

