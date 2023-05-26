import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import pushTransaction from './routes/pushTransaction.js'
import pushPin from './routes/pushPin.js'
import pushUser from './routes/pushUser.js'

//base config

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));

//routes
app.use('/pushTransaction', pushTransaction)
app.use('/pushPin', pushPin)
app.use('/pushUser', pushUser)




//connect to MongoDB
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`SERVER LISTENING AT ${PORT}`))
}).catch((err) => console.log(err.message));

