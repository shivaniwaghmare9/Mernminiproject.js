
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
const dataShow=async(req,res)=>{
    const {id}=req.query;
    const student=await dataModel.findById(id);
    res.send(student);
}
const editSave=async(req,res)=>{
    const {_id,name,rollno,subject,fees}=req.body;
    await dataModel.findByIdAndUpdate(_id, {
        name:name,
        rollno:rollno,
        subject:subject,
        fees:fees
    })
    res.send("data successfully updated")
}

module.exports={
    dataSave,
    dataDisplay,
    dataUpdate,
    dataDelete,
    dataShow,
    editSave
}