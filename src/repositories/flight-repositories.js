const { Sequelize}=require("sequelize");
const curdRepositories=require("./curd-repositories")
const {Flight,Airplane,Airport,city}=require("../models")
const db= require("../models");
const {addLockOnFlights}=require("./query")

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

    async upRemainingSeats(flightId,seats,dec=1){
        //this query is use for passimistic concurrency control using row_level lock . This will lock the row until the update process end
        await db.sequelize.query(addLockOnFlights(flightId));
        const flight= await Flight.findByPk(flightId);
        if(parseInt(dec)){
            //this decrement is the innner fucnction of sequelize and here flight we have to 
            await flight.decrement('totalSeats',{by:seats})
        }else{
            await flight.increment('totalSeats',{by:seats})
        }

        return flight;
    }
}

module.exports=flightrepo;