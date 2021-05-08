const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/oye', { useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log("Database connection successful");
    } else {
        console.log(error);
        console.log("Database connection error!!")
    }
});

const Driver = require('./driver.model');
const Location = require('./location.model');