import transactionData from "../models/transaction.js";


export const statusController = async(req, res) => {
    try {
        // console.log(req);
        const transactionID = req.params;
        const [transactionStatus] = await transactionData.find({id:transactionID.id}, {status:1, _id:0});
        console.log(transactionStatus);
        if(transactionStatus.status===true){
            res.send("success")
        }        
        else{
            res.send("fail");
        }
        res.status(200);
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}