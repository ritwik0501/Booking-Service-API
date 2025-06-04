const curdRepositories=require("./curd-repositories")
const {Airplane}=require("../models")

class AirplaneRepo extends curdRepositories{
    constructor(){
        super(Airplane);
    }
}

module.exports=AirplaneRepo;