const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const Washroom = require('../model/Washroom');
const { sendEmail } = require('../utils/mail');
const User = require('../model/User');

const saveWashroomFeedback = asyncHandler(async (req, res, next)=> {
    const washroom = await new Washroom(req.body).save()
    const user = await User.findOne({ _id: req.body.feedbackBy });
  await sendEmail({ userEmail: user.email,userName:user.name,type:"Washroom" });
    res.status(201).json({
        success : true,
        data : washroom
    })

});

const getWashroomFeedbacks = asyncHandler(async (req, res, next)=> {
    const washroom = await Washroom.find({}).populate({ path: "feedbackBy", select: ["name", "_id"] })
    res.status(200).json({
        success : true,
        data : washroom
    })
});

module.exports = {saveWashroomFeedback,getWashroomFeedbacks}