const router = require("express").Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./commentRoutes.js");
const commentRoutes = require("./commentRoutes.js");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
