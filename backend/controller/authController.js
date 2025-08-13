import User from './model/userModel.js';
import validator from 'validator';
import bcrypt from "bcryptjs"
import { genToken } from '../config/token.js';


export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const existUser=await User.findOne({email});
        if(existUser){
            return res.status(400).json({message:"User already exist"});
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Entry valid Email"});
        }
        if(password.length<8){
            return res.status(400).json({message:"Enter strong password of 8 length"});
        }
        let hashPassword=await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashPassword});

        let token=await genToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 7*24*60*60*1000,  //ms
        });
        return res.status(201).json(user);
    }
    catch(error){
        console.log("signup error");
        return res.status(500).json({message:`signup/register error${error}`});
    }
}