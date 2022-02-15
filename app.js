const express = require("express")
const mongoose = require("mongoose")
const app = express()

console.log(mongoose.connection.readyState)

app.use(express.json())






app.listen(3000,()=>{
    console.log("tamam");
    })