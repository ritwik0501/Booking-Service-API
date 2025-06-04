const info=(req,res)=>{

try {
    return res.json({
        success:true,
        error:{},
        message:"Hellow from API"
    })
    
} catch (error) {
    res.json({
        success:false,
        message:"Something went wrong",
        error:{
            error
        }

    })
}
}

module.exports={info};