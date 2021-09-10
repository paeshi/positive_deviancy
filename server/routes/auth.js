const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
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
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     !user && res.status(400).json("Wrong credentials!");

//     const validated = await bcrypt.compare(req.body.password, user.password);
//     !validated && res.status(400).json("Wrong credentials!");
//     if (user) {
//       const accessToken = generateAccessToken(user);
//       const refreshToken = generateRefreshToken(user);
//       refreshTokens.push(refreshToken);
//       res.json({
//         id: user._id,
//         username: user.username,
//         role: user.role,
//         accessToken,
//         refreshToken,
//       });
//     }
//     const { password, ...args } = user._doc;
//     res.status(200).json(args);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// let refreshTokens = [];

// router.post("/api/refresh", (req, res) => {
//   const refreshToken = req.body.token;
//   if (!refreshToken) return res.status(401).json("You are not authenticated!");
//   if (!refreshTokens.includes(refreshToken)) {
//     return res.status(403).json("Refresh token not valid");
//   }
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     err && console.log(err);
//     refreshTokens = refreshToken.filter((token) => token !== refreshToken);
//     const newAccessToken = generateAccessToken(user);
//     const newRefreshToken = generateRefreshToken(user);
//     refreshTokens.push(newRefreshToken);
//     res
//       .status(200)
//       .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
//   });
// });

// const generateAccessToken = (user) => {
//   return jwt.sign(
//     { id: user.id, role: user.role },
//     process.env.ACCESS_TOKEN_SECRET,
//     {
//       expiresIn: "7 days",
//     }
//   );
// };
// const generateRefreshToken = (user) => {
//   return jwt.sign(
//     { id: user.id, role: user.role },
//     process.env.REFRESH_TOKEN_SECRET,
//     {
//       expiresIn: "7 days",
//     }
//   );
// };

// const verify = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//       if (err) {
//         return res.status(403).json("Token is not valid!");
//       }
//       req.user = user;
//       next()
//     });
//   } else {
//     res.status(401).json("You are not authenticated");
//   }
// };

module.exports = router;
