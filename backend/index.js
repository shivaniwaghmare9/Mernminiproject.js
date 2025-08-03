
const express=require("exprss");
const app=express();
const dataRoute=require("./routes/dataRoute")
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
mongoose.connect("mongodb://localhost:27017/1stcruddb").then(()=>{
    console.log("Database Successfully Connected")
})

app.use("students",dataRoute)
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})