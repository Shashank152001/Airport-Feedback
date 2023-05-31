const mongoose = require('mongoose');
const { Schema } = mongoose;

const washroomFeedbackSchema = new Schema({
    feedbackBy: { type: Schema.Types.ObjectId, ref: "user" },
    rating : {type : Number, required : true,},
    cleanliness : {type : Number, required : true,},
    // cleanlinesss : {type : Number, required : true,},
    availabilityOfToiletries : {type : Number, required : true,},
    feedbackMessage : {type : String, required : true, default:"NA"},
});

module.exports = new mongoose.model("washroomfeedback",washroomFeedbackSchema);