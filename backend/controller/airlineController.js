const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const Airline = require('../model/Airline');
const User = require('../model/User');
const { sendEmail } = require('../utils/mail');

const saveAirlineFeedback = asyncHandler(async (req, res, next)=> {
    const airline = await new Airline(req.body).save()
    const user = await User.findOne({ _id: req.body.feedbackBy });
  await sendEmail({ userEmail: user.email ,userName:user.name,type:"Airlines"});
    res.status(201).json({
        success : true,
        data : airline
    })
});

const getAirlineFeedback = asyncHandler(async (req, res, next)=> {
    const airlines = await Airline.find({}).populate({ path: "feedbackBy", select: ["name", "_id"] })
    return res.status(200).json({
        success : true,
        data : airlines
    })
});

module.exports = {saveAirlineFeedback,getAirlineFeedback}