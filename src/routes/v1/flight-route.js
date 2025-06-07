const express=require("express")
const router=express.Router();
const {flightController}=require("../../controllers")

router.post("/",flightController.createFlightController);
router.get("/",flightController.getFlightController);
router.get("/:id",flightController.getFlightbyIDController);
router.patch("/:id/seats",flightController.updateSeatsService)


module.exports=router;


