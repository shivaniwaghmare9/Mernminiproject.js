
const express=require("express")
const route=express.Router();
const dataController=require("../controllers/dataController")


route.post("/save",dataController.dataSave);
route.get("/display",dataController.dataDisplay);
route.get("/update",dataController.dataUpdate);

module.exports=route;