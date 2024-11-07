const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your product name"]
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    },
 },
    {
        timestamps: true,  // default
    }
);
const product = mongoose.model('Product', productSchema);
module.exports = product