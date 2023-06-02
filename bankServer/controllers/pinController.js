import transactionData from "../models/transaction.js";
import trasactionData from "../models/transaction.js";
import userData from "../models/user.js";

export const pinController = async(req, res) => {
    var session;
    try {
        session = req.session;
        const pinFromUser = req.query.pin;
        const id = req.query.id;
        console.log(id);
        session.uniqueId = id;
        const transactionFilter = { id: id };
        var [transaction] = await trasactionData.find(transactionFilter);
        var [userPin] = await userData.find({card_no: transaction.card_no}, {pin:1, _id:0});
        const updata = {
            $set: {
                status: true,
            }
        }
        if(pinFromUser === userPin.pin.toString()){
            await trasactionData.updateOne(transactionFilter, updata);
            res.send("Transaction Successful");    
        }
        else{
            res.send("Transaction Failed");
        }

        res.status(200);
        req.session.destroy();

    } catch (err) {
        res.status(404).json({message:err.message});
    }
}