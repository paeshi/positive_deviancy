const { check } = require("express-validator");

exports.userSignupValidator = [
  check("username").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
];
