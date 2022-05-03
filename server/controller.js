
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
        
    },
    updateHouse: (req, res) => {
        
    },


}