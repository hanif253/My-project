const express=require("express")
const mongoose=require("mongoose");
const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/test");

const userSchema = new mongoose.schema({
    name:"string",
    rollNo:Number
})
const User  = new  mongoose.model("Users",userSchema)
app.get("/find-data-form-database",(req,res)=>{
    user.find({name:"hanif"},{name:0}).then(result =>{
        console.log(result)
        res.send(result)
    }).catch(err =>{
        console.log(err)
    })

});
const obj =new User(
    {
        name:"umar",
        rollNo:34
    },
    {
        name:"sohail",
        rollNo:67
    }
);
 User.updateOne({name:"hanif"},{$set:{rollNo:34}}).then(result =>{
    console.log(result);

 }).catch(err =>{
    console.log(err);

 })

app.listen("3000",function(req,res){
    console.log("server running")
})