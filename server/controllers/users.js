const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.updateController = async (req, res) => {
  console.log(req.body);
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your account!");
  }
};

exports.deleteController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    // console.log(user);
    if (user.id === req.params.id || user.role === "admin") {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete your account!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...args } = user._doc;
    res.status(200).json(args);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllController = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
