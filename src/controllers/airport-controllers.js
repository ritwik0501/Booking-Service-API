const {airportService}=require("../services")

async function createAirportController(req,res){

    try {
        const responce= await airportService.createAirportService({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        })

        res.status(200).json({
            success:true,
            message:"successfully create Airport",
            data:responce,
            error:{}
        })
    } catch (error) {
        console.log("something went wrong in controller",error);
        res.status(500).json({
            success:false,
            message:"Unable to create Airport",
            data:{},
            error:error
        });

    }
}

module.exports={
    createAirportController
}