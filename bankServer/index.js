import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import pushTransaction from './routes/pushTransaction.js'
import pushPin from './routes/pushPin.js'
import pushUser from './routes/pushUser.js';
// import getUser from './routes/getUser.js';
import statusPush from './routes/statusPush.js';
import { addTransactionsToQueue } from "./utils/addTransactionToQueue.js";
import sessions from "express-session";
import cookieParser from "cookie-parser";

//base config

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: process.env.SECRET_KEY,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(cookieParser());
var session;

//routes
app.use('/pushTransaction', pushTransaction);
app.use('/pushPin', pushPin);
app.use('/pushUser', pushUser);
app.use('/status', statusPush);
// app.use('/getUser', getUser)

setInterval(() => {
    return(1+0);
}, 10000);



//connect to MongoDB
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`SERVER LISTENING AT ${PORT}`))
    addTransactionsToQueue();

}).catch((err) => console.log(err.message));



