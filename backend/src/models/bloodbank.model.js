import mongoose from "mongoose";
const bloodBankSchema = new mongoose.Schema({
id:{
    type:Number,
required:true,
unique:true
},
name:{
    type:String,
    required:true,
    index:true
},
address:{
    type:String,
required:true   
},
phone:{
    type:String,    
    unique:true
},
distance:{
    type:Number,    
    
},
isOpen:{
    type:Boolean,
    required:true

}
,inventory:{
    type:Map,
    of:Number
}

// city:{
//     type:String,
// required:true
// }



},{timestamps:true});
const BloodBank = mongoose.model("BloodBank", bloodBankSchema,"bloodbank");


export default BloodBank;       