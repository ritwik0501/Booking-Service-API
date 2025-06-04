const{airplaneControllerfunc}=require("../../controllers")
const express=require("express")
const route=express.Router();
route.post("/",airplaneControllerfunc.airplaneController);
route.get("/",airplaneControllerfunc.getallAirplaneController);
route.get("/:id",airplaneControllerfunc.getairplaneidController);
route.delete("/:id",airplaneControllerfunc.deleteAirplaneController);
route.put("/:id",airplaneControllerfunc.updateAirplaneController);
module.exports=route;