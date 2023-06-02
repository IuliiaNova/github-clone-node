const express = require('express')
const controller = require('../controllers/user.controller')

const api = express.Router()

api
.post('/post-user', controller.postUser)
.get('/get-user', controller.getUser)


module.exports = api