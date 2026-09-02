const mongoose = require('mongoose');

async function connectDB(){

    await mongoose.connect(process.env.mongodb_connect);
    console.log("Database is connected successfully");
    
}

module.exports = connectDB;