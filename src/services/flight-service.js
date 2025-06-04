const {flightrepo}=require("../repositories")

const flight= new flightrepo();

async function createFlighService(data) {
    try {
      
        let date1=new Date(data.arrivalTime);
        let date2=new Date(data.departureTime);
        const datetimeArrival=date1.getTime();
        const dateTimeDeparture =date2.getTime();

        if(datetimeArrival>dateTimeDeparture) {
        
        const responce= await flight.createdata(data);
        // console.log("responce service",responce)
        return responce;
        }

        return {error:`${data.arrivalTime} must be  comes later after ${data.departureTime}`};
        
       
    } catch (error) {
        console.log("Unable to create flight",error);
        throw error;
    }
}
module.exports={
    createFlighService
};