const express=require("express")
const {infoController}=require("../../controllers")
const airplaneroute=require("./airplane-route")
const  cityRouter=require("./city-route")
const airportRouter=require("./airport-route");
const flightRouter=require("./flight-route")
const route =express.Router();

route.get("/info",infoController.info);
route.use("/airplane",airplaneroute);
route.use("/city",cityRouter);
route.use("/airport",airportRouter);
route.use("/flight",flightRouter);

module.exports=route;