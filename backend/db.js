if(process.env.NODE_ENV !=="production"){
    require('dotenv').config();
}
 const dbUrl = process.env.DB_URL
const mongoose = require('mongoose');
// "mongodb://localhost:27017/eRegistration"
const MongoURI = dbUrl||"mongodb://localhost:27017/eRegistration";
const connectToMongo = () =>{
    mongoose.connect(MongoURI,()=>{
        console.log("Connected to Mongoose")
    });
}
module.exports= connectToMongo;