const express=require("express");
const app=express();
function checkStudent(req,res,next){
    const student=true;
    if(student){
        next();
    }
    else{
        res.send("Access Denied");
    }
}
app.use(checkStudent);
app.get("/student",(req,res)=>{
    res.send("Welcome student!");
});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});
