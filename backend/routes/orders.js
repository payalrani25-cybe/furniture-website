const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data.json');
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key';

const getJsonData = () => {
    try {
        if (!fs.existsSync(DATA_PATH)) fs.writeFileSync(DATA_PATH, JSON.stringify({ products: [], users: [], orders: [] }, null, 2));
        const content = fs.readFileSync(DATA_PATH, 'utf-8');
        const parsed = JSON.parse(content);
        if (!parsed.orders) parsed.orders = [];
        return parsed;
    } catch (e) { return { products: [], users: [], orders: [] }; }
};
const saveJsonData = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

// Middleware to verify Admin
const isAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Authorization required' });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.role !== 'admin') return res.status(403).json({ message: 'Admin access denied' });
        req.user = decoded;
        next();
    } catch (err) { res.status(401).json({ message: 'Invalid token' }); }
};

// POST Create Order (Booking)
router.post('/', async (req, res) => {
    try {
        const { phone, address, items, totalAmount, guestName, userId } = req.body;
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            const newOrder = { id: Date.now(), phone, address, items, totalAmount, guestName, userId, status: 'Pending', bookingDate: new Date() };
            data.orders.push(newOrder);
            saveJsonData(data);
            return res.status(201).json({ message: 'Booking Successful!', order: newOrder });
        }
        const newOrder = new Order({ phone, address, items, totalAmount, guestName, userId });
        await newOrder.save();
        res.status(201).json({ message: 'Booking Successful!', order: newOrder });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET All Orders (Admin only)
router.get('/', isAdmin, async (req, res) => {
    try {
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            return res.json(data.orders || []);
        }
        const orders = await Order.find().sort({ bookingDate: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
