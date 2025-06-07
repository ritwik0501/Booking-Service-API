const { Op, where } = require("sequelize");
const { flightrepo } = require("../repositories");
const { sequelize } = require("../models");

const flight = new flightrepo();

async function createFlighService(data) {
  try {
    //check wheather arrivalTime is greater than departureTime
    let date1 = new Date(data.arrivalTime);
    let date2 = new Date(data.departureTime);
    const datetimeArrival = date1.getTime();
    const dateTimeDeparture = date2.getTime();

    if (datetimeArrival > dateTimeDeparture) {
      const responce = await flight.createdata(data);
      // console.log("responce service",responce)
      return responce;
    }

    return {
      error: `${data.arrivalTime} must be  comes later after ${data.departureTime}`,
    };
  } catch (error) {
    console.log("Unable to create flight", error);
    throw error;
  }
}

async function getFlightservice(query) {
  try {
    let data={};
    let customFilter = {};
    let sortFilter = [];
    const endTripTime = "23:59:59";
    //trips=MUM-DEL
    if (query.trips) {
      [departureAirportId, arrivalAirportId] = query.trips.split("-");
      (customFilter.departureAirportId = departureAirportId),
        (customFilter.arrivalAirportId = arrivalAirportId);
    }
    //price=1000-2000
    if (query.price) {
      [minPrice, maxPrice] = query.price.split("-");
      customFilter.price = {
        [Op.between]: [minPrice, maxPrice],
      };
     
    }
    //seats=2
    if (query.seat) {
      customFilter.totalSeats = {
        [Op.gte]: query.seat,
      };
    }

    if (query.tripdate) {
      console.log(query.tripdate);

      customFilter.departureTime = {
        [Op.gte]: query.tripdate,
      };
    }

    // sort=departureTime_DESC,price_ASC
    if (query.sort) {
      const params = query.sort.split(",");
      const sortitem = params.map((param) => param.split("_"));
      sortFilter = sortitem;
    }
    console.log(customFilter, sortFilter);
    const responce = await flight.getAllFlights(customFilter, sortFilter);
    return responce;
  } catch (error) {
    return { error: `Unable to get data${error}` };
  }
}

async function getFlightbyIdService(id){
   try {
     const responce= await flight.finddata(id);
     return responce;
}
   catch (error) {
    console.log("Unable to get flight by id",error);
   }

  }

async function UpdateRemaningSeatsService(data) {
  console.log(data);
  
  try {
    const responce= await flight.upRemainingSeats(data.flightId,data.seats,data.dec);
    return responce;
  } catch (error) {
    console.log("unable to update seats");
    return error;
  }
}
module.exports = {
  createFlighService,
  getFlightservice,
  getFlightbyIdService,
  UpdateRemaningSeatsService
};
