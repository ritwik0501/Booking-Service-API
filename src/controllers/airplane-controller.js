const { AirplaneRepo } = require("../repositories/airplane-repositories");
const {airplaneService}=require("../services")


async function airplaneController(req,res) {
    try {
        console.log(req.body); 
        const airplane =await airplaneService.createairplaneservice({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        res.status(200).json({
            success:true,
            message:"successfully created data",
            error:{},
            data:req.body
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"something went wrong",
            error:error,
            data:{}
        })
        console.log("error in airplane controller",error);
      
    }
    
}


async function getallAirplaneController(req,res){
    try {
        const allAirplanedata=await airplaneService.getAirplane();
            res.status(200).json({
                success:true,
                message:"successfully fetch all airplane data",
                data:allAirplanedata,
                error:{}
            })

    } catch (error) {
        res.status(404).json({
            success:false,
            message:"error to get data",
            data:{},
            error
        })
    }
}

async function getairplaneidController(req,res) {
    try {
        const responce=await airplaneService.getAirplaneByID(req.params.id);
        res.status(200).json({
            success:true,
            message:"Get all data found by id",
            data:responce,
            error:{}

        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"cannot get all data by id",
            data:{},
            error
        })
    }
    
}

async function deleteAirplaneController(req,res){
    try {
        const responce=await airplaneService.deleteAirplaneService(req.params.id);
        res.status(200).json({
            success:true,
            message:"successfully deleted data from database",
            data:responce,
            error:{}
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Unable to delte data from db",
            error,
            data:{}
        })
    }
}

async function updateAirplaneController(req,res){
    try {
        console.log(req.body,req.params)
        const responce=await airplaneService.updateAirplaneService(req.params.id,{
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        });
        console.log(responce);
        
        res.status(200).json({
            success:true,
            message:"successfully Updated data",
        data:responce,
        error:{}
        });

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"unable to update data",
            data:{},
            error:error
        })
    }
}
module.exports={airplaneController,getallAirplaneController,getairplaneidController,deleteAirplaneController,updateAirplaneController}
