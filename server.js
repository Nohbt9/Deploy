const express=require("express");
const path=require("path");
const app=express();
const distPath=path.join(__dirname,"dist");

//app.use(express.static(distPath));
app.get("/",(req,res)=>{
    console.log("request came");
res.sendFile(path.join(distPath,"index"));
});


const port=800 || process.env.PORT;
app.listen(port,()=>{
    console.log("server started to listen on port 4500");
});