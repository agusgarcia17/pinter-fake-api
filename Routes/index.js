const express = require('express');
const api = express.Router();

const userController = require('../Controllers/userController.js')
const likesController = require('../Controllers/likesController.js')

api.get("/users/:id", userController.findUserById);
api.post("/register", userController.register)
api.post("/login", userController.login)

api.get("/likes/:idUsername", likesController.getUserLikes);
api.post("/likes", likesController.postUserLikes);

module.exports = api
