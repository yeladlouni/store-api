const express = require('express');
const mongoose = require('express');
const router = express.Router();
const Product = require('../models/Product');


// Return all products
router.get('/', async function(req, res, next) {
    try {
        const products = await Product.find();
        res.send(products);
    } catch(error) {
        return next(error);
    }
});

// Return product with a specific id

router.get('/:id', async function(req, res, next) {
    try {
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch(error) {
        return next(error);
    }
});

// Add a new product
router.post('/', async function(req, res, next) {
    try {
        const product = new Product(req.body);
        res.send(product);
    } catch(error) {
        return next(error);
    }
});

// Delete a product
router.delete('/:id', async function(req, res, next) {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.send(product);
    } catch(error) {
        return next(error);
    }
});

module.exports = Product;