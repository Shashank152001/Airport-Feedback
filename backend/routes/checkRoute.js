const express = require('express')

const router = express.Router()

const {saveCheckInFeedback,getCheckInFeedbacks} = require('../controller/checkInController')


router.post('/' , saveCheckInFeedback)


router.get('/' , getCheckInFeedbacks)

module.exports = router