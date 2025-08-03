
const mongoose=require("mongoose");
const dataSchema=new mongoose.Schema({
    name:String,
    rollno:Number,
    subject:String,
    fees:Number
})
module.exports=mongoose.model("student",dataSchema);