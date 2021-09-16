const User = require("../models/User");
const jwt = require("jsonwebtoken");

// function auth(req, res, next) {
//   const token = req.header("auth-token");
//   if (!token) return res.status(401).send("Access Denied");
//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send("Invalid Token");
//   }
// }

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

// function auth(req, res, next) {
//   let token = req.header("authorization");
//   if (!token) return res.status(401).send("Access Denied!");

//   if (token.startsWith("Bearer ")) {
//     token = token.slice(7, token.length);
//   }

//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send("Invalid Token!");
//   }
// }

module.exports = {
  auth,
};
