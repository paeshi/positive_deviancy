const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// const { verify } = require("../utils/Auth");
const {
  updateController,
  deleteController,
  getController,
  getAllController,
} = require("../controllers/users.js");

const { authPage } = require("../middleware/middleware.js");

//UPDATE
router.put("/:id", updateController);

router.delete("/:id", deleteController);

//GET USER
router.get("/:id", getController);

// GET ALL USERS
router.get("/", getAllController);

module.exports = router;
