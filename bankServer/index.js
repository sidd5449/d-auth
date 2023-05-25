import mongoose from "mongoose";
import express from 'express';
import cors from cors;
import dotenv from dotenv;
import bodyParser from "body-parser";

//base config

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));

//routes


