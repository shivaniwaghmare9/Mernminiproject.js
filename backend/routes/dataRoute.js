
const express=require("express")
const route=express.Router();
const dataController=require("../controllers/dataController")


route.post("/save",dataController.dataSave);

module.exports=route;