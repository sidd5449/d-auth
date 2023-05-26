import trasactionData from "../models/transaction.js";

export const pinController = async(req, res) => {
    try {
        console.log(req);
        const pin = req.query.pin;
        const id = req.query.id;
        const transaction = { id: id };
        const updatedData = {
            $set:{
                pin: pin
            }

        }
        await trasactionData.updateOne(transaction, updatedData);
        res.status(200).json(updatedData);

    } catch (err) {
        res.status(404).json({message:err.message});
    }
}