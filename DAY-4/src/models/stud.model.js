const mongoose = require ('mongoose');


const studSchema = new mongoose.Schema({

    Roll_No : Number,
    Name : String,
    Marks : String,

})

const studModel = mongoose.model("stud",studSchema);

module.exports = studModel;