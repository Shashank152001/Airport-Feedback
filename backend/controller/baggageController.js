const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const Baggage = require('../model/Baggage');
const User = require('../model/User');
const { sendEmail } = require('../utils/mail');

const saveBaggageFeedback = asyncHandler(async (req, res, next)=> {
    const baggages = await new Baggage(req.body).save()
    const user = await User.findOne({ _id: req.body.feedbackBy });
    await sendEmail({ userEmail: user.email,userName:user.name,type:"Baggage" });
    return res.status(201).json({
        success : true,
        data : baggages
    })
});

const getBaggageFeedbacks = asyncHandler(async (req, res, next)=> {
    const Baggages = await Baggage.find({}).populate({ path: "feedbackBy", select: ["name", "_id"] })
    return res.status(200).json({
        success : true,
        data : Baggages
    })
});

module.exports = {saveBaggageFeedback,getBaggageFeedbacks}