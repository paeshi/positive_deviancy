const router = require("express").Router();
const Post = require("../models/Post");

const {
  createController,
  updateController,
  deleteController,
  getController,
  getAllController,
} = require("../controllers/posts.js");

const { auth } = require("../middleware/middleware.js");

//CREATE POST
router.post("/", createController);

//UPDATE POST
router.put("/:id", auth, updateController);

//DELETE POST
router.delete("/:id", auth, deleteController);

//GET POST
router.get("/:id", getController);

//GET ALL POSTS
router.get("/", getAllController);

module.exports = router;
