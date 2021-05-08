const connection = require('./model');
const express = require("express");
const application = express();
const path = require("path");
const bodyParser = require("body-parser");

const port = 3000;
const hostname = '127.0.0.1';

const DriverController = require('./controllers/driver.controller');
const LocationController = require('./controllers/location.controller');


application.use(bodyParser.json());
application.use(bodyParser.urlencoded({
    extended: true
}));

application.use("/driver", DriverController);
application.use("/location", LocationController);

application.get("/", (req, res) => {
    res.statusCode = 200;
    res.send("Welcome to Availability-Tracker Oye!RickShaw");
});


application.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});