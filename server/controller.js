
const houses = require("./db.json");

let globalId = 4

module.exports = {
    getHouse: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex((house) => {
            return house.id === +req.params.id;
        })
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;

        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }

        houses.push(newHouse);
        res.status(200).send(houses);
        globalId++
        
    },
    updateHouse: (req, res) => {

        let {id} = req.params;
        let {type} = req.body;

        // console.log(req.params);
        // console.log(req.body);

        let index = houses.findIndex((house) => {
            return house.id === +id;

        });

        let valueChange = 10000

        if (type === "plus") {
            houses[index].price += +valueChange;
            res.status(200).send(houses);
        } else if (type === "minus") {
            houses[index].price -= +valueChange;
            res.status(200).send(houses);
        }
        
    },


}