const express = require("express")
const mongoose = require("mongoose")
const app = express()
mongoose.connect('mongodb://localhost:27017/lab04')

console.log(mongoose.connection.readyState)

app.use(express.json())






app.listen(3000,()=>{
    console.log("tamam");
    })