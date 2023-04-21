const router = require("express").Router();
const userRoutes = require("./usersRoutes");
const postRoutes = require("./postsRoutes");
const answerRoutes = require("./answerRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/answers", answerRoutes);

module.exports = router;
