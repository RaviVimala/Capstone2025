import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//New User Registration 
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // check if user already exists
        const existinguser = await Users.findOne({ email });
        if (existinguser) 
            return res.status(400).json({ message: " User Already Exists " });

    //password hashing 
    const hashpassword = await bcrypt.hash(password, 8);

    //Createing New User
    const User = await Users.create({ username, email, password, hashpassword });
    res.status(201).json({ message: "User's Credential Registered Successfully", User});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
// User Login 
export const login = async (req, res) => {
    try {
        const { email, password} = req.body;

        const user = await Users.findOne({email});
        if(!user) 
            return res.status(400).json({ message: "Invalid Credential"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) 
            return res.status(400).json({ message: "Username or Password"});

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            { expiresIn: "id" }
        );
        res.json({token});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};