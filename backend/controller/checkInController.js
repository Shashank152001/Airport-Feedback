const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const CheckIn = require('../model/CheckIn');
const { sendEmail } = require('../utils/mail');
const User = require('../model/User');

const saveCheckInFeedback = asyncHandler(async (req, res, next)=> {
    const checkIn = await new CheckIn(req.body).save()
    const user = await User.findOne({ _id: req.body.feedbackBy });
  await sendEmail({ userEmail: user.email,userName:user.name,type:"Check In"});
    return res.status(201).json({
        success : true,
        data : checkIn
    })
});

const getCheckInFeedbacks = asyncHandler(async (req, res, next)=> {
    const checkIns = await CheckIn.find({}).populate({ path: "feedbackBy", select: ["name", "_id"] })
    return res.status(200).json({
        success : true,
        data : checkIns
    })
});

module.exports = {saveCheckInFeedback,getCheckInFeedbacks}