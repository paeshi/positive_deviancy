// const jwt = require("jsonwebtoken");

// const User = require("../models/User");

// // register the user function

// const userRegister = async (userDets, role, res) => {
//   // validate the username and email
//   let usernameNotTaken = await validateUsername(userDets.username);
//   if (usernameNotTaken) {
//     return res.status(400).json({
//       message: "Username is already taken",
//     });
//   }
//   let emailNotRegistered = await validateEmail(userDets.email);
//   if (emailNotRegistered) {
//     return res.status(400).json({
//       message: "Email is already taken",
//     });
//   }

// };

// const validateUsername = async (username) => {
//   let user = User.findOne({ username: username });
//   if (user) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const validateEmail = async (email) => {
//   let user = User.findOne({ email });
//   if (user) {
//     return false;
//   } else {
//     return true;
//   }
// };

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

module.exports = {
  verify,
};
