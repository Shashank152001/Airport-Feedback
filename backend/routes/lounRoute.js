const express = require('express')

const router = express.Router()

const {saveLoungeFeedback,getLoungeFeedbacks} = require('../controller/loungeController')


router.post('/',saveLoungeFeedback)


router.get('/',getLoungeFeedbacks)

module.exports = router