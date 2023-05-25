const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const HelpDesk = require('../model/HelpDesk');
const { sendEmail } = require('../utils/mail');
const User = require('../model/User');

const saveHelpDeskFeedback = asyncHandler(async (req, res, next)=> {
    const helpDesk = await new HelpDesk(req.body).save()
    const user = await User.findOne({ _id: req.body.feedbackBy });
  await sendEmail({ userEmail: user.email,userName:user.name,type:"Help Desk" });
    res.status(201).json({
        success : true,
        data : helpDesk
    })
});

const getHelpDeskFeedbacks = asyncHandler(async (req, res, next)=> {
    const helpDesks = await HelpDesk.find({}).populate({ path: "feedbackBy", select: ["name", "_id"] })
    return res.status(200).json({
        success : true,
        data : helpDesks
    })
});

module.exports = {saveHelpDeskFeedback,getHelpDeskFeedbacks}