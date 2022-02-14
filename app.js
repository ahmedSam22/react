const express = require("express");
const app = express();

const path = require("path");
const { default: App } = require("./src/App");
const port = process.env.port || 3000;

if(process.env.MODE_ENV === "production"){
    app.use(express.static('build'));
    app.get('*',(req,res)=>{
        req.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}

app.listen(port,()=>{
    console.log("tamam");
    })