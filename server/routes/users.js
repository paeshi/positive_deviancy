const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// const { verify } = require("../utils/Auth");

//UPDATE
router.put("/:id", async (req, res) => {
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
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    // console.log(user);
    if (user.id === req.params.id) {
      console.log("yes");
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      console.log("nope");
      res.status(401).json("You can only delete your account!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...args } = user._doc;
    res.status(200).json(args);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
