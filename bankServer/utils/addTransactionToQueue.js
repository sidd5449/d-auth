import mongoose from "mongoose";
import trasactionData from "../models/transaction.js";
import userData from "../models/user.js";
import nodemailer from 'nodemailer';
0

const sendMail = async(email, id) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sidd5449@gmail.com',
        pass: 'jvxyxnppiyfkaaiq'
    }
  });

  let info = await transporter.sendMail({
    from: '"Siddhesh Thakare" <sidd5449@gmail.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "Authenticate Transaction", // Subject line
    text: "", // plain text body
    html: `<a href = 'http://localhost:3000/${id}'>Authenticate Transaction</a>`, // html body
  });

//   console.log("Message sent: %s", info.messageId);
}

export const addTransactionsToQueue = async(req, res) => {
    try {
        setInterval(() => {
            trasactionData.find({status:'Processing'}).then((data) => {
                if(data !== null){
                    data.forEach(async (item) => {
                        const [mailAddress] = await userData.find({card_no:item.card_no}, {email:1, _id:0});
                        
                        // console.log(mailAddress.email)
                        // sendMail(mailAddress.email, item.id);
                    })
                }
                
            })
        }, 50);
    } catch (err) {
        console.log(err.message);
    }
}

