import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser";


const app  = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"})) // to accept json
app.use(express.urlencoded())   // with url some characters are encoded like # -> %23

app.use(express.static("public"))
app.use(cookieParser());


export {app}











// Data from URLs comes from Params so we will use req.params, or req.body or from cookies
// if we use middlewares we use it using app.use(cors());
// cors - cross origin sharing which generally happens in the backend