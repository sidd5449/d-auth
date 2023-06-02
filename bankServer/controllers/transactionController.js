import transactionData from "../models/transaction.js";

export const transactionController = async(req, res) => {
    try {
        console.log(req);
        const data = req.query;
        const newTransaction = new transactionData(data);
        await newTransaction.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}