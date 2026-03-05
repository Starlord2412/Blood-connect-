import asyncHandler from '../utils/asyncHandler.js';   
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
//import { uploadToCloudinary } from '../utils/cloudinary.js'; 
import {ApiResponse} from '../utils/ApiResponse.js';  
//import { upload } from '../middlewares/multer.middleware.js';
import BloodBank from '../models/bloodbank.model.js';

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



 const {fullName,email,password,phone,address,userType,city}=req.body
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
  userType,
  city
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

  const existinguser = await User.findOne({
    $or: [
      { email: email },
      
    ]
  }).select("+password");

  if (!existinguser) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordCorrect = await existinguser.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }

  const accessToken = existinguser.generateAccessToken();
  const refreshToken = existinguser.generateRefreshToken();

  existinguser.refreshToken = refreshToken;
  await existinguser.save({ validateBeforeSave: false });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  });

  return res.status(200).json(
    new ApiResponse(200, { accessToken }, "Login successful")
  );
});


//find the bloodbanks based on the city/loction of user 

const getBloodBanks =asyncHandler(async(req,res)=>{
  //get user location from req.user
  //find bloodbanks in that location 
  //return response
const user=req.user
  const userLocation=user.city;

  const bloodBanks=await BloodBank.find({
    $and: [
      { city: userLocation },
      { isOpen: true }
    ]
  });

  return res.status(200).json(
    new ApiResponse(200,bloodBanks,"Blood banks fetched successfully")
  )
});



export {registerUser,loginUser,getBloodBanks};