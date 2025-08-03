
const express=require("exprss");
const app=express();
const dataRoute=require("./routes/dataRoute")


app.use("students",dataRoute)
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})