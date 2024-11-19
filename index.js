const express=require("express");
const app=express();
const mongoose=require("mongoose");
const db_url="mongodb+srv://gauravchoundiye5148:VlfO4Q2lfrZ8dYFW@userdb.c4q3j.mongodb.net/?retryWrites=true&w=majority&appName=UserDB"

// async function connection(){
//     try{
//         await mongoose.connect(db_url);
//         console.log("Connected to MongoDB");
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// connection();

  

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})



// const userSchema = mongoose.Schema({

//     name: {

//         type:String,

//         required:[true, "Don't forget to add your name!"],

//         minLength: [6, "Name should be atleast 6 characters long!"]

 

//       },

//       email: {

//           type:String,

//           required:[true, "Don't forget to add your email!"],

//           validate:{

//             validator:function(emaill){

//                 return emaill.includes('@') // use regex to identify emails

//             }

//           },

//           unique:[true, "Email already exists!"]

//       },

     

//       age: {

//         type:Number,

//         required:[true, "Don't forget to add your age!"],

//         min: [18, "You should be atleast 18 years old!"]

//       },

//       roles:{

//           type:[String],

//           required:true,

//           enum:["admin","user"]

 

//       },

     

// },

// {

//   timestamps:true,

// }

// )





