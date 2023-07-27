const express=require("express");
const path=require("path");
const app=express();
const distPath=path.join(__dirname,"dist");

app.use(express.static(distPath));
app.get("/",(req,res)=>{
res.send("Hello world");
});


app.listen(800 || process.env.PORT,()=>{
    console.log("server started to listen on port 4500");
});