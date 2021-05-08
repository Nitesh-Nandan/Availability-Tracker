const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const LocationModel = mongoose.model("Location");


router.post('/', (req, res) => {
    var query = { driverId: req.body.driverId };
    var values = {
        'location': { type: "Point", coordinates: [req.body.lat, req.body.long] },
        'lastUpdate': Date.now()
    }

    LocationModel.findOneAndUpdate(query, values, { upsert: true }, function (err, result) {
        if (err) {
            res.status(400).send("Error!! occured while updating location");
        } else {
            res.status(200).json(result);
        }
    })
});

module.exports = router;