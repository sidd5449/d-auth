import userData from "../models/user.js";

export const userController = async(req, res) => {
    try {
        console.log(req);
        const data = req.query;
        const newUser = new userData(data);
        await newUser.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}