const express=require("express");
const { serverPort } = require("./config");
const  v1router= require("./routes")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("Hellow server");
})

app.use("/api",v1router);


app.listen(serverPort.PORT,()=>{
console.log(`Server is running at ${serverPort.PORT}`);
})