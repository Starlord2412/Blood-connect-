import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const uploadToCloudinary=async(filePath)=>{
    try{
        if(!filePath)return null
        //upload the file to clodinary
       const response=await cloudinary.uploader.upload(filePath,{
            resource_type:"auto", //jpeg,png,mp4,mp3
        })
        //file uploaded successfully

    }catch(error){
        fs.unlinkSync(filePath); //delete the file from local storage
        return null;
    }
}

    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    
    
    export {uploadToCloudinary};