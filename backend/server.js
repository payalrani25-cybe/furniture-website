const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/data", (req, res) => {
    res.json({ message: "Hello from backend" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// ✅ Serve frontend folder as static files
app.use(express.static(path.join(__dirname, '../frontend')));

// ✅ Default to JSON immediately (no waiting for MongoDB timeout)
app.locals.dbType = 'json';
const dataPath = path.join(__dirname, 'data.json');
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify({ products: [], users: [], orders: [] }, null, 2));
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Try MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/furniture_shop';

mongoose.connect(MONGO_URI, { 
    serverSelectionTimeoutMS: 5000,
    autoIndex: true
})
.then(() => {
    console.log('✅ SUCCESS: MongoDB Connected!');
    app.locals.dbType = 'mongodb';
})
.catch((err) => {
    console.log('\n⚠️  DATABASE STATUS:');
    console.log('📁 MongoDB not found or not running.');
    console.log('📝 FALLBACK: Using local JSON database (data.json).\n');
    app.locals.dbType = 'json';
});

// Root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running → http://localhost:${PORT}`);
    console.log(`🌐 Open website  → http://localhost:${PORT}/index.html`);
});
