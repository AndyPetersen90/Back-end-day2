
const express = require("express");
const cors = require("cors"); 

const app = express();

const {getHouse, deleteHouse, createHouse, updateHouse} = require("./controller.js")

app.use(express.json());
app.use(cors());

app.get("/api/houses", getHouse);
app.delete("/api/houses/:id", deleteHouse);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);



app.listen(5501, () => {
    console.log("port is running on 5501");
})