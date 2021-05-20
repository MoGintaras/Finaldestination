const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const validateUser = require("../middle/validateUser")

//
// router.post('/addUser',validateUser, controller.saveItem)
// router.get('/getUsers', controller.getItems)
// router.get('/deleteUser/:id', controller.deleteItems)



module.exports = router