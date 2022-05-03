
const express = require("express");
const cors = require("cors"); 

const app = express();

app.use(express.json());
app.use(cors());





app.listen(5501, () => {
    console.log("port is running on 5501");
})