const curdRepositories=require("./curd-repositories")
const {Flight}=require("../models")

class flightrepo extends curdRepositories{
    constructor(){
        super(Flight);
    }
}

module.exports=flightrepo;