const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
}, { _id: false, });

const locationSchema = new mongoose.Schema({

    driverId: {
        type: Number,
        required: true,
    },

    location: {
        type: pointSchema,
        required: true

    },

    lastUpdate: {
        type: Date,
        default: Date.now
    }

});

locationSchema.index({ location: "2dsphere" });

mongoose.model("Location", locationSchema);