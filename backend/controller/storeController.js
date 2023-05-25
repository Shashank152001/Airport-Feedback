const mongoose = require('mongoose')
const asyncHandler = require('../middleware/asyncHandler')

const Store = require('../model/Store');
const User = require('../model/User');
const { sendEmail } = require('../utils/mail');

const saveStoreFeedback = asyncHandler(async (req, res, next)=> {
    const store = await new Store(req.body).save()
    const user = await User.findOne({ _id: req.body.feedbackBy });
  await sendEmail({ userEmail: user.email,userName:user.name,type:"Stores" });
    res.status(201).json({
        success : true,
        data : store
    })
});

const getStoreFeedbacks = asyncHandler(async (req, res, next)=> {
    const stores = await Store.find({}).populate({ path: "feedbackBy", select: ["name", "_id"] })
    res.status(200).json({
        success : true,
        data : stores
    })
});

module.exports = {saveStoreFeedback,getStoreFeedbacks}