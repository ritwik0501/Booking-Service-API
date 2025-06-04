const express=require("express")
const router=express.Router();
const {flightController}=require("../../controllers")

router.post("/",flightController.createFlightController);


module.exports=router;


