const {AirportRepo}=require("../repositories")
const Aipoort=new AirportRepo();

async function createAirportService(data) {
    try {
        const responce= await Aipoort.createdata(data);
        return responce;
    } catch (error) {
        console.log("Unable to create Airport",error);
    }
    
}

module.exports={
    createAirportService
}