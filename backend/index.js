import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
let port=process.env.PORT || 6000;

let app=express()

// app.get("/",(req,res)=>{
//     res.send("hello home page");
// });

app.listen(port,()=>{
    console.log("Server start : ",port);
})

