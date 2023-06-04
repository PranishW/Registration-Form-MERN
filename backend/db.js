const mongoose = require('mongoose');
// "mongodb://localhost:27017/eRegistration"
const MongoURI = "mongodb://localhost:27017/eRegistration"
const connectToMongo = () =>{
    mongoose.connect(MongoURI,()=>{
        console.log("Connected to Mongoose")
    });
}
module.exports= connectToMongo;