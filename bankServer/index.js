import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";

//base config

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));

//routes




//connect to MongoDB
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`SERVER LISTENING AT ${PORT}`))
}).catch((err) => console.log(err.message));

