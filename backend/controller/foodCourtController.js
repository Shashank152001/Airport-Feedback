const mongoose = require("mongoose");
const asyncHandler = require("../middleware/asyncHandler");
const authentication = require("../middleware/authentication");

const FoodCourt = require("../model/FoodCourt");
const User = require("../model/User");
const { sendEmail } = require("../utils/mail");

const saveFoodCourtFeedback = asyncHandler(async (req, res, next) => {
  const foodCourt = await new FoodCourt(req.body).save();
  const user = await User.findOne({ _id: req.body.feedbackBy });
  await sendEmail({ userEmail: user.email,userName:user.name,type:"Food Court" });

  res.status(201).json({
    success: true,
    data: foodCourt,
  });
});

const getFoodCourtFeedbacks = asyncHandler(async (req, res, next) => {
  const foodCourts = await FoodCourt.find({}).populate({ path: "feedbackBy", select: ["name", "_id"] });
  res.status(200).json({
    success: true,
    data: foodCourts,
  });
});

module.exports = { saveFoodCourtFeedback, getFoodCourtFeedbacks };
