const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DATA_PATH = path.join(__dirname, '../data.json');
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key';

const getJsonData = () => {
    try {
        if (!fs.existsSync(DATA_PATH)) fs.writeFileSync(DATA_PATH, JSON.stringify({ products: [], users: [] }, null, 2));
        return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    } catch (e) { return { products: [], users: [] }; }
};
const saveJsonData = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            if (data.users.find(u => u.email === email)) return res.status(400).json({ message: 'User already exists' });
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = { id: Date.now(), name, email, password: hashedPassword, role: role || 'user' };
            data.users.push(newUser);
            saveJsonData(data);
            return res.status(201).json({ message: 'User registered successfully' });
        }
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            const user = data.users.find(u => u.email === email);
            if (!user) return res.status(400).json({ message: 'Invalid credentials' });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
            const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
            return res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
        }
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Sync Cart/Wishlist
router.post('/sync', async (req, res) => {
    try {
        const { email, cart, wishlist } = req.body;
        if (req.app.locals.dbType === 'json') {
            const data = getJsonData();
            const user = data.users.find(u => u.email === email);
            if (!user) return res.status(404).json({ message: 'User not found' });
            user.cart = cart || [];
            user.wishlist = wishlist || [];
            saveJsonData(data);
            return res.json({ message: 'Sync successful' });
        }
        const user = await User.findOneAndUpdate({ email }, { cart, wishlist }, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'Sync successful', cart: user.cart, wishlist: user.wishlist });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
