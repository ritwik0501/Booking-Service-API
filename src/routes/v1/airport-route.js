const express= require("express")
const router=express.Router();
const {airportController}=require("../../controllers")

router.post("/",airportController.createAirportController);

module.exports=router;