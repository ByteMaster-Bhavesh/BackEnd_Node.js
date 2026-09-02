const mongoose = require('mongoose');

async function connectDB(){

    await mongoose.connect(process.env.mongodb_key);

    console.log("Database connected successfully");

}

module.exports = connectDB