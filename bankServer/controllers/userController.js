import userData from "../models/user.js";
import bcrypt from 'bcrypt';

export const userController = async(req, res) => {
    try {
        // console.log(req);
        const {card_no, email, phoneNumber, pin} = req.query;
        const salt = await bcrypt.genSalt();
        const hashedPin = await bcrypt.hash(pin, salt);
        const newUser = new userData({
            card_no,
            email,
            phoneNumber, 
            pin: hashedPin,
        });
        await newUser.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}