
const express=require("express")
const route=express.Router();
const dataController=require("../controllers/dataController")


route.post("/save",dataController.dataSave);
route.get("/display",dataController.dataDisplay);
route.get("/update",dataController.dataUpdate);
route.delete("/delete/:id",dataController.dataDelete)
route.get("/myedit",dataController.dataShow)
route.post("/editsave",dataController.editSave)
route.post("/search",dataController.searchData)

module.exports=route;