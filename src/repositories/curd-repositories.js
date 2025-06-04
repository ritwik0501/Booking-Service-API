const { where } = require("sequelize");

class curdRepositories{

    constructor(model){
        this.model=model;
    }

    async createdata(data){
        try {
            console.log(data)
            const responce =await this.model.create(data);
            return responce;
        } catch (error) {
            console.log("Error to create data",error);
            throw error;
        }
    }

    async destroy(data){
        try {
            const responce =await this.model.destroy({
                where:{
                    id:data
                }
            });
            return responce;
        } catch (error) {
            console.log("Error to delete data",error);
            throw error;
        }
    }

    async finddata(data){
        try {
            
            const responce =await this.model.findByPk(data);
            return responce;
        } catch (error) {
            console.log("Error to find data",error);
            throw error;
        }
    }

    async findAll(){
        try {
            const responce =await this.model.findAll();
            return responce;
        } catch (error) {
            console.log("Error to finall data",error);
            throw error;
        }
    }

    async updatedata(id,data){
        try {
            const responce =await this.model.update(data,{
                where:{id:id}
             
            });
            return responce;
        } catch (error) {
            console.log("Error to create data",error);
            throw error;
        }
    }
}

module.exports=curdRepositories;