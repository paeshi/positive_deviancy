const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { register, login, refresh, logout } = require("../controllers/auth.js");
const jwt = require("jsonwebtoken");
const { userSignupValidator } = require("../validators/auth");
const { runValidation } = require("../validators");

//REGISTER
router.post("/register", userSignupValidator, runValidation, register);

//LOGIN

router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

module.exports = router;
