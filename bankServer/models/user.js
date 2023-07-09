import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    card_no: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    pin: {
        type: Number,
        // required: true,
    }, 
},{timestamps:true});

const userData = mongoose.model("User Data", userSchema);
export default userData;