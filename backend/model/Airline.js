const mongoose = require('mongoose');
const { Schema } = mongoose;

const airlineFeedbackSchema = new Schema({
    name : {type : String, required : true},
    rating : {type : Number, required : true,},
    recommendation : {type : Number, required : true,},
    service : {type : Number, required : true,},
    staff : {type : Number, required : true,},
    feedbackMessage : {type : String, required : true, default:"NA"},
});

module.exports = new mongoose.model("airlinefeedback",airlineFeedbackSchema);