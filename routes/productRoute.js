const express = require('express');
const routerProduct = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controller/productController.js');

// Get all products
routerProduct.get('/', getProducts);

// Get a single product
routerProduct.get('/:id', getProduct);

//create a product
routerProduct.post('/', createProduct);

//update a product
routerProduct.put('/:id', updateProduct);

//delete a product
routerProduct.delete('/:id', deleteProduct);

module.exports = routerProduct;

