import User from './model/userModel.js';

export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const existUser=await User.findOne({email});
        if(existUser){
            return res.status(400).json({message:"User already exist"});
        }
        if(validator)
    }
    catch(error){

    }
}