const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, 
    title: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    gallery: [String],
    desc: { type: String },
    specs: { type: String },
    stock: { type: Number, default: 10 },
    rating: { type: Number, default: 4.5 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
