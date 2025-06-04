const {cityController}=require("../../controllers")
const express=require("express")
const router=express.Router();

/*
HTTP Method:post
API:-http://localhost:3000/api/v1/city
*/ 
router.post("/",cityController.CreateCityController);

module.exports=router;