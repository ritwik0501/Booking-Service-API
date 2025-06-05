const express=require("express")
const router=express.Router();
const {flightController}=require("../../controllers")

router.post("/",flightController.createFlightController);
router.get("/",flightController.getFlightController);


module.exports=router;


