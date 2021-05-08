const model = require('../model');
const mongoose = require('mongoose');
const DriverModel = mongoose.model("Driver");
const LocationModel = mongoose.model("Location");

DriverModel.collection.drop();
LocationModel.collection.drop();

DriverModel.insertMany(
    [
        {
            "id": 1001,
            "name": "Mohan",
            "vechileNo": "DL 2C CF 1234",
            "contact": "900000001"
        },
        {
            "id": 1002,
            "name": "OmPrakash",
            "vechileNo": "DL 2C CF 1235",
            "contact": "900000002"
        },
        {
            "id": 1003,
            "name": "Chandan",
            "vechileNo": "DL 2C CF 1236",
            "contact": "900000003"
        },
        {
            "id": 1004,
            "name": "Ramesh",
            "vechileNo": "DL 2C CF 1237",
            "contact": "900000004"
        },
        {
            "id": 1005,
            "name": "Sohel",
            "vechileNo": "DL 2C CF 1238",
            "contact": "900000005"
        },
        {
            "id": 1006,
            "name": "Asif",
            "vechileNo": "DL 2C CF 1239",
            "contact": "900000006"
        },
        {
            "id": 1007,
            "name": "Abdul",
            "vechileNo": "DL 2C CF 1240",
            "contact": "900000007"
        }

    ], (err, result) => {
        console.log("Driver Details Registered");
    }
);


LocationModel.insertMany(
    [
        {
            "driverId": 1001,
            location: {
                type: "Point",
                coordinates: [-73.856077, 40.848447]
            },
            "lastUpdate": Date.now()
        },
        {
            "driverId": 1002,
            location: {
                type: "Point",
                coordinates: [28.7041, 77.1025]
            },
            "lastUpdate": Date.now()
        },
        {
            "driverId": 1003,
            location: {
                type: "Point",
                coordinates: [28.7043, -77.1025]
            },
            "lastUpdate": Date.now()
        },
        {
            "driverId": 1004,
            location: {
                type: "Point",
                coordinates: [-28.7053, 77.1025]
            },
            "lastUpdate": Date.now()
        },
        {
            "driverId": 1005,
            location: {
                type: "Point",
                coordinates: [-73.9375, 40.8503]
            },
            "lastUpdate": Date.now()
        },
        {
            "driverId": 1006,
            location: {
                type: "Point",
                coordinates: [-73.9575, 40.8303]
            },
            "lastUpdate": Date.now()
        },
        {
            "driverId": 1007,
            location: {
                type: "Point",
                coordinates: [28.7103, 77.1025]
            },
            "lastUpdate": Date.now()
        }
    ], (err, result) => {

        console.log("Location inserted");

    }
);

