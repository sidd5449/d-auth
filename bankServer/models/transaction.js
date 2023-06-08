import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
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
        type: String,
    }, 
},{timestamps:true});

const transactionData = mongoose.model("Transaction Data", transactionSchema);
export default transactionData;