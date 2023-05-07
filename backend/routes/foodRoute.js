const express = require('express')

const router = express.Router()

const {getFoodCourtFeedbacks} = require('../controller/foodCourtController')





router.get('/',getFoodCourtFeedbacks)

module.exports = router