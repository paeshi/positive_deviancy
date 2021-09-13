const User = require("../models/User");

const adminMiddleware = (req, res, next) => {
  User.findById({ id: req.params.id }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    if (user.role !== "admin") {
      return res.status(400).json({
        error: "Admin resource. Access denied.",
      });
    }

    req.profile = user;
    next();
  });
};

const authPage = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (permissions.includes(userRole)) {
      next();
    } else {
      return res.status(401).json("You don't have permission");
    }
  };
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401).json("You don't have permisssion");
  }
};

module.exports = {
  authPage,
  adminMiddleware,
  admin,
};
