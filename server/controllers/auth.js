const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER WITHOUT EMAIL CONFIRMATION
exports.register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      role: req.body.role,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// REGISTER WITH EMAIL CONFIRMATION
// exports.register = async (req, res) => {

// }

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...args } = user._doc;
    res.status(200).json(args);
  } catch (err) {
    res.status(500).json(err);
  }
};
