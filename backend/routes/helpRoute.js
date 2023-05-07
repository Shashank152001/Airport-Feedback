const express = require('express')

const router = express.Router()

const {saveHelpDeskFeedback,getHelpDeskFeedbacks} = require('../controller/helpDeskController')


router.post('/',saveHelpDeskFeedback)


router.get('/',getHelpDeskFeedbacks)

module.exports = router