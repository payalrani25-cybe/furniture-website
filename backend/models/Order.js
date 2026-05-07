const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    guestName: { type: String },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    items: [{
        productId: { type: String },
        title: { type: String },
        price: { type: Number },
        qty: { type: Number }
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Delivered', 'Cancelled'], default: 'Pending' },
    bookingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
