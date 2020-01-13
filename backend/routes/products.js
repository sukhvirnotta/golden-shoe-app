const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const id = Number(req.body.id);
    const title = req.body.title;
    const img = req.body.img;
    const price = Number(req.body.price);
    const brand = req.body.brand;
    const colour = req.body.colour;
    const info = req.body.info;
    const inCart = Boolean(req.body.inCart);
    const inStock = Boolean(req.body.inStock);
    const count = Number(req.body.count);
    const total = Number(req.body.total);

    const newProduct = new Product({
        id,
        title,
        img,
        price,
        brand,
        colour,
        info,
        inCart,
        inStock,
        count,
        total
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;