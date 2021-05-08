const mongoose = require('mongoose');

var driverSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    contact: {
        type: String
    },
    vechileNo: {
        type: String
    },
    registeredAt: {
        type: Date,
        default: Date.now
    }
});

driverSchema.index({ id: 1 });

mongoose.model("Driver", driverSchema);