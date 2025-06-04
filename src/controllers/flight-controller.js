const {flightService}=require("../services")

async function createFlightController(req,res) {
    try {
        const responce=await flightService.createFlighService({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            totalSeats:req.body.totalSeats
        })
        return res.status(200).json({
            success:true,
            message:"successfully created Flight",
            data:responce,
            error:{}

        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Inter serer error",
            data:{},
            error:error
        })
    }
    
}

module.exports={
    createFlightController
}