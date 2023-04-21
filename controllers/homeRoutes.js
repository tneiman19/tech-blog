const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Post, User, Answer } = require("../models");
const withAuth = require("../utils/auth");

module.exports = router;
