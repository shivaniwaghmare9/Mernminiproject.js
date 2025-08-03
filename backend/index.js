
const express=require("express");
const app=express();
const dataRoute=require("./routes/dataRoute")
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors")
mongoose.connect("mongodb://localhost:27017/1stcruddb").then(()=>{
    console.log("Database Successfully Connected")
})

//Bodyparser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use("/students",dataRoute)

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})