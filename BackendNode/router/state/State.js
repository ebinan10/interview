const express = require('express');
const State = require('../../controller/state/State')

const router = express.Router()

router.post('/create', State.createState)

module.exports = router;