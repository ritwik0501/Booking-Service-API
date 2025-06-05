const { Sequelize}=require("sequelize");
const curdRepositories=require("./curd-repositories")
const {Flight,Airplane,Airport,city}=require("../models")

class flightrepo extends curdRepositories{
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter,sort){
          try {
            console.log(sort)
            const responce =await this.model.findAll({
                where:filter,
                order:sort,
                include:[{
                    model:Airplane,
                    required:true,
                    as:"AirportDetails"
                },
                {
                    model:Airport,
                    required:true,
                    as:'DepartureAirport',
                    on:{
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"),"=",Sequelize.col("DepartureAirport.code"))
                    },
                    include:{
                        model:city,
                        required:true
                    }
                },
                  {
                // flight->airport->city
                    model:Airport,
                    required:true,
                    as:'ArrivalAirport',
                    on:{
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=",Sequelize.col("ArrivalAirport.code"))
                    },
                    //flight->airport->city
                    include:{
                        model:city,
                        required:true
                    }
                }
            ]
            });

            return responce;
        } catch (error) {
            console.log("Error to finall data",error);
            throw error;
        }
    }
}

module.exports=flightrepo;