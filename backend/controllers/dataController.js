
const dataModel=require("../models/dataModel")

const dataSave=async(req,res)=>{
    const {name,rollno,subject,fees}=req.body
    const student=await dataModel.create({
        name:name,
        rollno:rollno,
        subject:subject,
        fees:fees
    })
    console.log(req.body);
    res.send("data successfully saved")
}
const dataDisplay=async(req,res)=>{
    const student=await dataModel.find();
    res.send(student)
}
const dataUpdate=async(req,res)=>{
    const student=await dataModel.find();
    res.send(student)
}
const dataDelete=async(req,res)=>{
    //console.log(req.params)
    const {id}=req.params;
    await  dataModel.findByIdAndDelete(id);
    res.send("data successfully deleted")

}

module.exports={
    dataSave,
    dataDisplay,
    dataUpdate,
    dataDelete
}