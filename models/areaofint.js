const mongoose = reequire("mongoose")
const bcrypt = require("bcryptjs");

const areaofintSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const areaofint = mongoose.model("areaofint", areaofintSchema);

module.exports = areaofint;