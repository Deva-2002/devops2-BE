const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.json({
        message:"Hello World2"
    })
})

app.listen(3030,()=>{
    console.log(`listening to port 3030`)
})