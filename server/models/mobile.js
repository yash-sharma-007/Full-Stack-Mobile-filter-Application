const mongoose = require('mongoose');

const Mobile = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    type: { type: String, required: true },
    processor: { type: String, required: true },
    memory: { type: String, required: true },
    OS: { type: String, required: true },
})


module.exports = mongoose.model("mobile",Mobile);