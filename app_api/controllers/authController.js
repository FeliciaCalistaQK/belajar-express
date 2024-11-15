const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async(req,res)=>{
    const{nama,email,password,role}=req.body;
    try{
        let user =await user.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }

        user = new User({nama,email,password,role});
        await user.save();

        const payload = {userId: user.id,role: user.role};
        const token = jwt.sign(payload, process.env.JWT_SECRET,{
            expiresIn: "1h",
        });
        res.json({token});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.login = async(req,res)=>{
        const {email,password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({ message: "Invalid email ord password"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid email or password"});
        }
        const payload = { userId: user.id, role: user.role};
        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"1h",
        });
        res.json({token});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};