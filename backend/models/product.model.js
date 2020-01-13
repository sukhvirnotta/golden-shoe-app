const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Number,
    title: String,
    img: String,
    price: Number,
    brand: String,
    colour: String,
    info: String,
    inCart: Boolean,
    inStock: Boolean,
    count: Number,
    total: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;