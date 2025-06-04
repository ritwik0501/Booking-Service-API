const {cityrepo}=require("../repositories")

const cities=new cityrepo();

async function createCityService(data) {
    try {
        const responce=await cities.createdata(data);
        return responce;
    } catch (error) {
        console.log("Error to create city-service ",error);
    }
    
}

module.exports={createCityService}