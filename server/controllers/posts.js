const Post = require("../models/Post");
const User = require("../models/User");

exports.createController = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateController = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    const post = await Post.findById(req.params.id);
    console.log(user);
    if (post.username === req.body.username || user.role === "admin") {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only update your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteController = async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({ username: req.body.username });
    const post = await Post.findById(req.params.id);
    console.log(user);
    if (post.username === req.body.username || user.role === "admin") {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getController = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllController = async (req, res) => {
  const username = req.query.user;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
