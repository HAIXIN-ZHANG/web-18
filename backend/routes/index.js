const express = require("express");

const userProfilesRouter = require("./userProfiles");
const userPostsRouter = require("./userPosts");

//create router
const router = express.Router();

router.use("/userProfiles", userProfilesRouter);
router.use("/userPosts", userPostsRouter);

module.exports = router;
