const express = require('express');
const LGA = require('../../controller/lga/LGA')

const router = express.Router()

router.post('/create', LGA.createLga)

module.exports = router;