const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Post, User, Answer } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User],
      raw: true,
    });

    res.render("posts", { posts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
