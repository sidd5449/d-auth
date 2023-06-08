import transactionData from "../models/transaction.js";


export const statusController = async(req, res) => {
    try {
        // console.log(req);
        const transactionID = req.params;
        const [transactionStatus] = await transactionData.find({id:transactionID.id}, {status:1, _id:0});
        console.log(transactionStatus);
        res.status(200).json(transactionStatus.status);
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}