const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const DriverModel = mongoose.model("Driver");
const LocationModel = mongoose.model("Location");



router.post('/', (req, res) => {
    const obj = {
        "id": req.body.id,
        "name": req.body.name,
        "vechileNo": req.body.vechileNo,
        "contact": req.body.contact
    };

    const driver = new DriverModel(obj);
    driver.save((err, result) => {
        if (err) {
            res.status(400).send("Error!! occured while registering driver");
        } else {
            res.status(200).json(result);
        }
    })

});


router.get('/location', (req, res) => {

    let lat = req.query.lat;
    let long = req.query.long;

    const query = {
        location:
        {
            $near:
            {
                $geometry: { type: "Point", coordinates: [lat, long] },
                $maxDistance: 200
            }
        }
    };

    LocationModel.find(query).exec((err, result) => {
        if (err) {
            res.status(400).send("Error Occurred");
        } else {
            res.status(200).json(result);
        }
    })


});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    DriverModel.find({ id }).exec((err, driver) => {
        if (err) {
            res.status(400).send("Some Error Occurred");
        } else {
            res.status(200).json(driver);
        }
    });
});

router.get('/', (req, res) => {
    DriverModel.find().exec((err, drivers) => {
        if (err) {
            res.status(400).send("Some Error Occurred");
        } else {
            res.status(200).json(drivers);
        }
    });
});



module.exports = router;