const express = require("express");
const sendMail = require("./controllers/sendMail");
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/sendemail",sendMail);

const start = async () =>{
    try{
        app.listen(3000,()=>{
            console.log("I am running on PORT: http://localhost:3000");
        })
    }catch(err){
        console.log(err);
    }
}

start();