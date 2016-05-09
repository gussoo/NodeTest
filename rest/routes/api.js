
// Dependencies
var express = require('express');
var router = express.Router();

//Modules
var Product = require('../models/products');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');
// router.get('/products', function(req, res){
// 	res.send('API is working..');
// });

// Return router
module.exports = router;