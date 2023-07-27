const express=require("express");
const path=require("path");
const app=express();
const distPath=path.join(__dirname,"dist");

app.use(express.static(distPath));
app.get("/",(req,res)=>{
res.sendFile(path.join(distPath,"index.html"));
});


app.listen(800,()=>{
    console.log("server started to listen on port 4500");
});