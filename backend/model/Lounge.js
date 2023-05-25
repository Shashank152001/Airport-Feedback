const mongoose = require('mongoose');
const { Schema } = mongoose;

const loungeFeedbackSchema = new Schema({
    feedbackBy: { type: Schema.Types.ObjectId, ref: "user" },
    name : {type : String, required : true},
    rating : {type : Number, required : true,},
    recommendation : {type : Number, required : true,},
    food : {type : Number, required : true,},
    service : {type : Number, required : true,},
    staff : {type : Number, required : true,},
    feedbackMessage : {type : String, required : true, default:"NA"},
});

module.exports = new mongoose.model("loungefeedback",loungeFeedbackSchema);