const express = require('express')
const  User = require('../../controller/user/User')

const router= express.Router()

router.post('/create', User.createUser)

router.get('/', User.getUser)

module.exports = router;