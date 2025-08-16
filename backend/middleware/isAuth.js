import jwt from 'jsonwebtoken';


const isAuth =async(req,res,next)=>{
    try{
        let {token}=req.cookies;
        if(!token){
            return res.status(400).json({message:"user dose not have token"});
        }
        let verifyToken=jwt.verify(token,process.env.JWT_SECRET);
        if(!verifyToken){
            return res.status(400).json({message:"user dose not have token"});
        }
        req.userId=verifyToken.userId;
        next();
    }
    catch(error){
        console.log("isAuth error");
        return res.status(500).json({message:"Internal server error"});
    }
}

export default isAuth;