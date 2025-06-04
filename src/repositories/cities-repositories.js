const curdRepositories=require("./curd-repositories");
const {city}=require("../models");

class cityrepo extends curdRepositories{
    constructor(){
        super(city);
    }
}
module.exports=cityrepo;