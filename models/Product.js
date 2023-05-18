const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: Number,
    label: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    production_date: {
        type: Date
    },
    expiration_date: {
        type: Date
    }
}
);

module.exports = mongoose.model('Product', ProductSchema);