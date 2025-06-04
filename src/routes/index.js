const express=require("express")
const v1router=require("./v1")
const Router=express.Router();

Router.use("/v1",v1router)
module.exports=Router;