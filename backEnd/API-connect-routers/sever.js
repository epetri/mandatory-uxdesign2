// $ curl localhost:8080/driver -XPOST -H 'Content-Type: application/json' -d '{"name": "Emma"}' -v      skapa en förare
// $ curl localhost:8080/cars -XPOST -H 'Content-Type: application/json' -d '{"model": "volvo"}' -v                              skapa en bil
const express = require('express');
const app = express();
//const uuid = require('uuid/v1');

app.use(express.json());

let drivers = [];
let cars = [];
let connections = [];

let userId =0;
function userid(){
    return userId++;
}

let carId =0;
function carid(){
    return carId++;
}

app.get('/driver', function (req, res) { //hämtar ut alla förare
    res.send(req.body)
});

app.get('/driver/:userId', function (req, res) {  //hämtar ut en spec förare
    let id = parseInt(req.params.userId);    //kollar id:t finns
    for(let driver of drivers){ 
        if(driver.userId === id){
            let matchingCars = [];
            for(connection of connections){
                if(connection.userId === driver.id){
                    for(car of cars){
                        if(connection.carId === car.carId){
                            matchingCars.push(car);
                        }
                    }
                }
            }
            res.json({cars: matchingCars, driver: driver});
            return;
        }
    }
    res.status(400).end();
});

app.get('/cars/:carId', function (req, res) {  //hämtar ut en spec bil
    let id = parseInt(req.params.carId);       //kollar om id:t som vi skickar i get anropet finns
    for(let vehicle of cars){                       //lopar igenom carArray för att kolla om id:t finns
        if(vehicle.carId === id){
            let matchingDriver = [];
            for(connection of connections){             //finns bil-Id:t lopa igenom connections-array för att 
                if(connection.carId === vehicle.carId){
                    for(driver of drivers){
                        if(connection.userId === driver.userId){
                            matchingDriver.push(driver);
                        }
                    }
                }
            }
            res.json({drivers: matchingDriver, vehicle: vehicle});
            return;
        }
    }
    res.status(404).end();
});

app.post('/driver', function(req,res) { //skickar en förare till föraraArrayn
    let person = {name: req.body.name, userId: userId}
    drivers.push(person);
    res.status(200).send(person)
})

app.post('/cars', function(req, res){ //skickar en car till carArrayn
    let vehicle = {model: req.body.model, carId: carId}
    cars.push(vehicle);
    res.status(200).send(vehicle);
})

app.post('/driver/:userId/car/:carId', function(req, res){ //kopplar ihop bil med en förare
    let connectCarDriver = { userID: parseInt(req.params.userId), carId: parseInt(req.params.carId)}
    connections.push(connectCarDriver);
    res.status(200).send(connectCarDriver);
})

const PORT = 8080;
app.listen(PORT, () => console.log(`port ${PORT}`));