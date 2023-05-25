import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    card_no: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    pin: {
        type: Number,
        required: true,
    },
},{timestamps:true});

const userData = mongoose.model("User Data", userSchema);
export default userData;