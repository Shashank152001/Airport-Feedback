const express = require('express')

const router = express.Router()

const {saveWashroomFeedback,getWashroomFeedbacks} = require('../controller/washroomController')


router.post('/',saveWashroomFeedback)


router.get('/',getWashroomFeedbacks)

module.exports = router