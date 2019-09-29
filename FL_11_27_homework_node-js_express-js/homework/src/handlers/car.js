const fs = require('fs')

const pathFileName = './db/data.json';

let jsonData;

fs.readFile(pathFileName, 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  jsonData = JSON.parse(data)
})

exports.getAll = function(req, res, next) {
    res.statusCode = 200;
    return res.json(jsonData);
} 

exports.get = function(req, res, next) {
    const id = parseInt(req.params.id, 10);
    
    const car = jsonData.find(car => parseInt(car.id, 10) === id);

    if (car) {
        res.statusCode = 200;
        return res.json(car);
    }

    res.statusCode = 404;
    return res.send();
}

exports.post = function(req, res, next) {
    const body = req.body;
    
    const car = jsonData.find(car => 
        car.brand === body.brand &&
        car.model === body.model &&
        car.year === body.year
    );

    if (car) {
        res.statusCode = 409;
        return res.json({"message": 'Car already exists.'} );
    }
    
    let maxId = jsonData.reduce((acc, cur) => {
        const id = parseInt(cur.id, 10);

        if (acc < id) {
            acc = cur.id;
        }

        return acc;
    }, 0);

    const newCar = {
        id: ++maxId,
        ...body
    }; 

    jsonData.push(newCar);

    res.statusCode = 201;
    return res.json(newCar);
}

exports.put = function(req, res, next) {
    const id = parseInt(req.params.id, 10);
    const body = req.body;
    
    let findCar = jsonData.find(car => parseInt(car.id, 10) === id);

    if (!findCar) {
        res.statusCode = 404;
        return res.send();
    }
    
    findCar = {
        ...findCar,
        ...body
    }
    findCar.id = id;

    for (let i = 0; i < jsonData.length; i++) {
        let car = jsonData[i];
        if (parseInt(car.id, 10) === id) {
            jsonData[i] = findCar;
        }
    }    

    res.statusCode = 200;
    return res.json(findCar);
}

exports.delete = function(req, res, next) {
    const id = parseInt(req.params.id, 10);
    
    let existsCar = jsonData.some(car => parseInt(car.id, 10) === id);

    if (!existsCar) {
        res.statusCode = 404;
        return res.send();    
    }

    jsonData = jsonData.filter(car => parseInt(car.id, 10) !== id);

    res.statusCode = 200;
    return res.json({"message": "The car has been successfully removed"});
}