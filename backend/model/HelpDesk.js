const mongoose = require('mongoose');
const { Schema } = mongoose;

const helpDeskFeedbackSchema = new Schema({
    feedbackBy: { type: Schema.Types.ObjectId, ref: "user" },
    rating : {type : Number, required : true,},
    staffEfficiency : {type : Number, required : true,},
    staff : {type : Number, required : true,},
    feedbackMessage : {type : String, required : true, default:"NA"},
});

module.exports = new mongoose.model("helpdeskfeedback",helpDeskFeedbackSchema);