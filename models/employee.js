const mongoose = require("mongoose");
const validator = require("validator");
const employeeSchema = new mongoose.Schema({
   name:{
       type: String,
       required:true, 
   },
   email:{
       type: String,
       required:true, 
       unique: [true, "This email is already taken"],
       validator(value){
           if(validator.isEmail(value)){
                throw new Error("This email is not valid");
           }
               
       }
   },
   number:{
       type: Number,
       required:true, 
       min: 11,
   },
   nic:{
       type: String,
       required:true, 
   },
   address:{
       type: String,
       required:true, 
   },
})

const employee = new mongoose.model("staff", employeeSchema);
module.exports = employee;