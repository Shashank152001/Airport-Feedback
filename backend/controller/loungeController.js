const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const Lounge = require('../model/Lounge');
const User = require('../model/User');
const { sendEmail } = require('../utils/mail');

const saveLoungeFeedback = asyncHandler(async (req, res, next)=> {
    const lounge = await new Lounge(req.body).save()
    const user = await User.findOne({ _id: req.body.feedbackBy });
  await sendEmail({ userEmail: user.email,userName:user.name,type:"Lounge" });
    res.status(201).json({
        success : true,
        data : lounge
    })
});

const getLoungeFeedbacks = asyncHandler(async (req, res, next)=> {
    const lounges = await Lounge.find({}).populate({ path: "feedbackBy", select: ["name", "_id"] })
    return res.status(200).json({
        success : true,
        data : lounges
    })
});

module.exports = {saveLoungeFeedback,getLoungeFeedbacks}