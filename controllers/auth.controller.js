import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async(req,res)=>{
    const {email,password,name} = req.body;

    try{
        if(!email || !password || !name){
            throw new Error("All fields required");
        }

        const userAlreadyExists =  await User.findOne({email});

        if (userAlreadyExists){
            return res.status(400).json({sucess:false,message:"User Already Exists"});
        }

        const user = new User({
            email,
            password,
            name,
            
        });

        await user.save();

        generateTokenAndSetCookie(res,user._id);

        res.status(201).json({
            sucess:true,
            message:"User created Sucessfully",
            user:{
                ...user._doc,
                password:undefined,
            },
        })

    }catch(error){
        res.status(400).json({sucess:false,message:error.message});
        console.log("Error",error.message);
    }
}

export const login = async(req,res)=>{
    res.send("Log-In");
}

export const logout = async(req,res)=>{
    res.send("Log-Out");
}
