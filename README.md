# Availability Tracker

# Step to Run the Program
1. Clone the Repository
2. Go the Repository And Run the following commands:
    1. Go to terminal -> `npm install`
         >It will download the dependencies
    2. Run `docker-compose up -d` 
         >It will run the mongodb container - used for store the location and driver Details
    3. Run `npm run loaddb`
         >It will create 2 collections `Driver` and `Location` and store some data.
    4. Run `npm start`
         >Server should start on port 3000


# Assumption Made
1. The application is prototype and not meant to handle large request.
2. For updating the location I have used API request so if request are very frequent there is high chance we loose some of the request and keep hanging (no timeout).
3. To handle large request we can use some `Kafka` or `RabbitMQ` (streaming) in intermediate to update the location (can discuss).
4. I have used NoSql database (Mongodb) as it has good support of geospatial queries.
5. I am not handling bad/invalid request.
6.
7. By default server is Running on port 3000.

# API Endpoint
There are in total 5 API end points.

## Driver Registration

> `method` : POST

> `url` : http://localhost:3000/driver

> `Body` : raw json
```json
// Sample Body Request
{
    "id": 2001,
    "name": "Raghu Nandan",
    "vechileNo": "TS0 AC 7883",
    "contact": "70000001"
}
```
<br>

## Get All Registered Driver

> `method` : GET

> `url` : http://localhost:3000/driver

<br>

## Get Driver details by id

> `method` : GET

> `url` : http://localhost:3000/driver/{id}
>         http://localhost:3000/driver/1001 

<br>

## Update Driver Location

> `method` : POST

> `url` : http://localhost:3000/location

> `Body` : raw json
```json
// Sample Body Request
{
    "driverId" : "1001",
    "lat" : "28.7041",
    "long" : "77.1029"
}
```

## List of Available Driver NearBy (Radius of 200 meters)

> `method` : GET

> `url` : http://localhost:3000/driver

> `Params` :
```json
lat       28.7043
long      77.1025
```

Please [click here](https://documenter.getpostman.com/view/7391495/TzRRDUHg) for web version of the documentation.

