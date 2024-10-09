const express = require("express");

const {
  getUserProfileById,
  putUserProfileById,
  getUserProfiles,
} = require("../controllers/userProfilesController");

const userProfilesRouter = express.Router();

//GET get UserProfile by id   /api/userProfiles/:userId
userProfilesRouter.get("/:userId", getUserProfileById);

//GET get UserProfiles   /api/userProfiles
userProfilesRouter.get("/", getUserProfiles);

//PUT update UserProfile by id   /api/userProfiles/:userId
userProfilesRouter.put("/:userId", putUserProfileById);

module.exports = userProfilesRouter;
