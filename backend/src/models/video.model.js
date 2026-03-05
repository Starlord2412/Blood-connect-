import mongoose from "mongoose";


const videoSchema=new mongoose.Schema({
    title:{
        type:String, 
        required:true
    },
    description:{   
        type:String,
        required:true
    },  thumbnail:{ 
        type:String,  //from cloudinary
        required:true
    },  videoFile:{
        type:String,  //from cloudinary
        required:true
    },  duration:{
        type:Number,
        required:true
    },  isPublished:{
        type:Boolean,
        default:false
    },  owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
});

videoSchema.plugin(mongooseAggreatePaginate);
export const Video=mongoose.model("Video",videoSchema);