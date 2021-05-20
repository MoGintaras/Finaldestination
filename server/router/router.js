const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const validateUser = require("../middle/validateUser")

//
router.post('/addUser',validateUser, controller.addUser)
router.get('/getUsers', controller.getUsers)
router.get('/deleteUser/:id', controller.deleteUser)



module.exports = router