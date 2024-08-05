// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

const app=express();


dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("DB is connected");
    });
})
.catch((error)=>{
   console.log("MongoDB connection failed"); 
})















// 1st APPROACH
// const app= express();

// // to connect to a database use iffi 
// ;( async ()=> {
//    try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error)=>{
//         console.log("ERROR", error);
//         throw error
//     })
//     app.listen(process.env.PORT, ()=>{
//         console.log(`Database is connected and listening on port ${process.env.PORT}`)
//     })
//    } catch (error) {
//      console.error("ERROR", error);
//      throw error
//    }
// })()

