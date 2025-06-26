// in this folder we will connect to the database
import mongoose from "mongoose";


//i will create a function that will connect to the database
function connect(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to MongoDb");
    })
    .catch((err)=>{
        console.log("Error connecting to MongoDb", err);
    })
}

export default connect;