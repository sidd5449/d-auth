import mongoose from "mongoose";

const trasactionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    card_no: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    receiverAcc: {
        type: Number,
        required: true,
    },
    pin: {
        type: Number,
        // required: true,
    },
    status: {
        type: Boolean,
    }, 
},{timestamps:true});

const trasactionData = mongoose.model("Transaction Data", trasactionSchema);
export default trasactionData;