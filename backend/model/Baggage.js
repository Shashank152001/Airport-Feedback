const mongoose = require('mongoose');
const { Schema } = mongoose;

const baggageFeedbackSchema = new Schema({
    feedbackBy: { type: Schema.Types.ObjectId, ref: "user" },
    service : {type : Number, required : true,},
    rating : {type : Number, required : true,},
    staff : {type : Number, required : true,},
    feedbackMessage : {type : String, required : true, default:"NA"},
});

module.exports = new mongoose.model("baggagefeedback",baggageFeedbackSchema);