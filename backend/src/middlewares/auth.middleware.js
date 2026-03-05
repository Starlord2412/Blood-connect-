// import {asyncHandler} from '../utils/asyncHandler';
import asyncHandler from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';
import {User} from '../models/user.model.js';


export const verifyJwt=asyncHandler(
    async(req,res,next)=>{

   try{
     const token=req.cookies?.accessToken || 
              req.headers.authorization?.replace(/^Bearer\s+/i, '');

    if(!token){
        return res.status(401).json({message:'Unauthorized'});

    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const user=await User.findById(decoded._id).select('-password -refreshToken');
if(!user){
    return res.status(401).json({message:'Unauthorizeddd'});  
}
    req.user=user;
    next();
   }catch(error){
    return res.status(401).json({message:'Unauthorizedddddddddddddddddd'});
   }

   
})