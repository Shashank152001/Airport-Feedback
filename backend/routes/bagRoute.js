const express = require('express')

const router = express.Router()

const {saveBaggageFeedback,getBaggageFeedbacks} = require('../controller/baggageController')


router.post('/' , saveBaggageFeedback)


router.get('/' , getBaggageFeedbacks)

module.exports = router