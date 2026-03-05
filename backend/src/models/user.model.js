import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema=new mongoose.Schema({
    // username:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //     index:true
    // }, 
     email:{
        type:String,
        required:true,
        unique:true
    },  fullName:{
        type:String,
        required:true,
        index:true
    },  password:{
        type:String,
        select:false,
        required:[true,"password is required"]
      },
    //   avatar:{
    //     type:String  //from cloudinary
    //   },
    //   coverimage:{
    //     type:String//from cloudinary
    //   },
     phone:{
        type:String,
        
        unique:true
    },
    address:{
       type:String
    },
    userType:{
        type:String,
       
        required:true
    },
    city:{
        type:String,
        required:true
    },
    // //   watchHistory:[
    // //     {
    // //         type:mongoose.Schema.Types.ObjectId,    
    // //         ref:"Video"
    // //     }
    //   ],
      refreshToken:{
        type:String
      }

},{
    timestamps:true
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});




userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
return jwt.sign({
    _id:this._id,
    email:this.email,
    // username:this.username,
   
    userType:this.userType
}
,
process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRES_IN
})
}

userSchema.methods.generateRefreshToken=function(){
return jwt.sign({
    _id:this._id,
  
}
,
process.env.REFRESH_TOKEN_SECRET,{
    expiresIn:process.env.REFRESH_TOKEN_EXPIRES_IN
})
}


export const User=mongoose.model("User",userSchema);