const {cityService}=require("../services")


async function CreateCityController(req,res){
    try {
        console.log("citycontroller",req.body);
        const responce=await cityService.createCityService({
            name:req.body.name
        })

    res.status(200).json({
        success:true,
        message:"created data successfully",
        data:req.body,
        error:{}
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"unable to create data",
            data:{},
            error
        })
    }
}

module.exports={CreateCityController};