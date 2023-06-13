import transactionData from "../models/transaction.js";
import trasactionData from "../models/transaction.js";
import userData from "../models/user.js";

export const pinController = async(req, res) => {
    var session;
    try {
        session = req.session;
        console.log(req);
        const pinFromUser = req.body.pin;
        const id = req.body.id;
        console.log(id);
        session.uniqueId = id;
        const transactionFilter = { id: id };
        var [transaction] = await trasactionData.find(transactionFilter);
        var [userPin] = await userData.find({card_no: transaction.card_no}, {pin:1, _id:0});
        const updata1 = {
            $set: {
                status: 'Transaction Successful',
            }
        }
        const updata2 = {
            $set: {
                status: 'Transaction Failed',
            }
        }
        if(pinFromUser === userPin.pin.toString()){
            await trasactionData.updateOne(transactionFilter, updata1);
            res.send("Transaction Successful");    
        }
        else{
            await trasactionData.updateOne(transactionFilter, updata2);
            res.send("Transaction Failed");
        }

        res.status(200);
        req.session.destroy();

    } catch (err) {
        res.status(404).json({message:err.message});
    }
}