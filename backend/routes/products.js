const express = require('express');
const Product = require('../models/Product');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data.json');
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key';

// Helper to handle JSON DB
const getJsonData = () => {
    try {
        if (!fs.existsSync(DATA_PATH)) {
            fs.writeFileSync(DATA_PATH, JSON.stringify({ products: [], users: [] }, null, 2));
        }
        const content = fs.readFileSync(DATA_PATH, 'utf-8');
        return JSON.parse(content);
    } catch (e) {
        return { products: [], users: [] };
    }
};

const saveJsonData = (data) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
};

// Middleware to verify Admin
const isAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Authorization required' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.role !== 'admin') return res.status(403).json({ message: 'Admin access denied' });
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// GET all products or by category
router.get('/', async (req, res) => {
    try {
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            const { category } = req.query;
            const products = category ? data.products.filter(p => p.category === category) : data.products;
            return res.json(products);
        }
        const { category } = req.query;
        const filter = category ? { category } : {};
        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET single product by custom ID
router.get('/:id', async (req, res) => {
    try {
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            const product = data.products.find(p => String(p.id) === String(req.params.id));
            if (!product) return res.status(404).json({ message: 'Product not found' });
            return res.json(product);
        }
        const product = await Product.findOne({ id: req.params.id });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST new product (Admin only)
router.post('/', isAdmin, async (req, res) => {
    try {
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            const newProd = { ...req.body };
            data.products.push(newProd);
            saveJsonData(data);
            return res.status(201).json(newProd);
        }
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE product (Admin only)
router.delete('/:id', isAdmin, async (req, res) => {
    try {
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            const initialLen = data.products.length;
            data.products = data.products.filter(p => String(p.id) !== String(req.params.id));
            if (data.products.length === initialLen) return res.status(404).json({ message: 'Product not found' });
            saveJsonData(data);
            return res.json({ message: 'Product deleted' });
        }
        const product = await Product.findOneAndDelete({ id: req.params.id });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
