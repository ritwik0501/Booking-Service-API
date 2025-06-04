const {AirplaneRepo}=require("../repositories")
const airplane=new AirplaneRepo();
async function createairplaneservice(data) {
    try {
        const responce=await airplane.createdata(data);
        return responce;
    } catch (error) {
        console.log("Error in airplane service",error);
        throw error;
    }
}

async function getAirplane(){
    try {
        const responce= await airplane.findAll();
        return responce;
    } catch (error) {
        console.log("Error to get all airplane data",error);
    }
}

async function getAirplaneByID(id){
    try {
        const data=await airplane.finddata(id);
        return data;
    } catch (error) {
        console.log("error to get data by id ");
    }
}

async function deleteAirplaneService(id) {
    try {
        const responce=await airplane.destroy(id);
        return responce;
    } catch (error) {
        console.log("error to delete data",error);
    }
    
}

async function updateAirplaneService(id,data){
    try {
        const responce=await airplane.updatedata(id,data);
        return responce;
    } catch (error) {
        console.log("Unable to update data from db");
    }
}
module.exports={
    createairplaneservice,
    getAirplane,
    getAirplaneByID,
    deleteAirplaneService,
    updateAirplaneService
}