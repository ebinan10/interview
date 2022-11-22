const express = require('express')
const  Ward = require('../../controller/ward/Ward')

const router= express.Router()

router.post('/create', Ward.CreateWard)

module.exports = router;