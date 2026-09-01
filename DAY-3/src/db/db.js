const mongoose = require('mongoose');

async function connectDB(){

    await mongoose.connect("mongodb+srv://bux:Y1LGrYR25stDF2lJ@backendnjs.xuod3wf.mongodb.net/swan");

    console.log("Database connected successfully");

}

module.exports = connectDB