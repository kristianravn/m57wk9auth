require("dotenv").config();
const express = require("express");

const User = require("./users/model");

const port = process.env.PORT || 5001;

const app = express();
const syncTables = ()=> {
    User.sync();
}
app.use(express.json());



app.use("/health", (req, res) =>{
    res.status(200).json({message: "API is healthy"});
});
app.listen(port, () =>{
    syncTables();
    console.log(`server is listening on port ${port}`);

});