const express = require('express')

const router = express.Router()

const {saveStoreFeedback,getStoreFeedbacks} = require('../controller/storeController')


router.post('/',saveStoreFeedback)


router.get('/',getStoreFeedbacks)

module.exports = router