const curdRepositories=require("./curd-repositories")
const {Airport}=require("../models")

class AirportRepo extends curdRepositories{
    constructor(){
        super(Airport)
    }
}

module.exports=AirportRepo;