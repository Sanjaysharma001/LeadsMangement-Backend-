const mongoose = require("mongoose");

require("dotenv").config();
const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL,{
    
    })
    .then(() => console.log("DB Conncetion Successfull"))
    .catch((error ) => {
        console.log("Error while connecting DB")
        console.log(error.message);
    })
}
module.exports = dbConnection;