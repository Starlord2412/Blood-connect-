import asyncHandler from '../utils/asyncHandler.js';   
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
//import { uploadToCloudinary } from '../utils/cloudinary.js'; 
import {ApiResponse} from '../utils/ApiResponse.js';  
import react from 'react';
//import { upload } from '../middlewares/multer.middleware.js';

const generateAccessAndRefreshTokens = async(userId)=>{
  try{
    const user = await User.findById(userId);
   const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
  await  user.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
  }catch(error){
throw new ApiError(500,"something went wrong while generating tokens")
  }
  
}


const registerUser=asyncHandler(async(req,res)=>{   

//get user from frontend
//validation -not empty
//check if user already exists:username,email
//check for images ,check for images ,check for avatar
//upload them to cloudiary
//create user in db
//remove password and refrea token field from response 
//check for user creation 
//return res



 const {fullName,email,password,phone,address,userType}=req.body
 console.log("email:",email)


 if(!fullName || !email || !password){
   
    throw new ApiError(400,"All fields are required")
 }

 const existedUser=await User.findOne({
   $or:[{email},{phone}],
   $and:[{userType}]
 });

   if(existedUser){  throw new ApiError(409,"User already exists")  };
 
// const avatarLocalPath=req.files?.avatar[0]?.path;
// const coverImageLocalPath=req.files?.coverImage[0]?.path
// if(!avatarLocalPath){
//   throw new ApiError (400,"Avatar is required")       ;
// }

// const avatar=await uploadToCloudinary(avatarLocalPath,"UserAvatars");

// const coverImage=await uploadToCloudinary(coverImageLocalPath,"UserCoverImages");

const user= await User.create({
  fullName,
  // avatar:avatar.url,
  // coverImage:coverImage?.url || "",
  email,
  password,
  phone,
  address,
  userType
  // username:username.toLowerCase()
})





const createdUser=await User.findById(user._id).select("-password -refreshToken");

if(!createdUser){
  throw new ApiError(500,"User creation failed")
}
return res.status(201).json(
  new ApiResponse(201,createdUser,"User created successfully")
)
});




//for login
const loginUser = asyncHandler(async (req, res) => {
  
  //get email or username  and password
  //find userby email or username
  //if not found throw error
  //if found compare password
  //if wrong password throe error
  //if corrrect generate access token and refresh token
  //store refresh token in db
  //set refresh token in http only cookie
  //return access token in response
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({
    $or: [
      { email: email },
      
    ]
  }).select("+password");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }

 const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

 const LoggedInUser=await User.findById(user._id).select("-password -refreshToken");
 


  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true
  });

  return res.status(200)
  .cookie("refreshToken",refreshToken)
  .cookie("accessToken",accessToken)
  .json(new ApiResponse(200,{
  user:{
   LoggedInUser: LoggedInUser,
   isAvailable:true
  },
  accessToken,
  refreshToken
  },"Login successful"))
});


//find the bloodbanks based on the city/loction of user 
// const getBloodBanks = asyncHandler(async (req, res) => {

 

//   const bloodbanks = await BloodBank.find({  });
   


//   res.status(200).json(
//     new ApiResponse(200, bloodbanks, `${bloodbanks.length} open blood banks found`)
//   );
// });


const logoutUser=asyncHandler(async(req,res)=>{
  //get user id from req.user
  //find user by id

   await User.findByIdAndUpdate(req.user._id,{
    $set:{
      refreshToken:undefined
    }
  },
    {
      new:true
    }
   );

   const options={
    httpOnly:true,
    secure:true
   }

   return res
   .status(200)
   .clearCookie("refreshToken",options)
   .clearCookie("accessToken",options)
   .json(new ApiResponse(200,null,"Logout successful"))


});




export {registerUser,loginUser,logoutUser};