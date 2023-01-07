const express = require("express");
const router = express.Router();
const {
  getAllGroups,
  getAlUsersIngroup,
  addNewGroup,
  deleteGroup,
  updateGroup,
} = require("./controller");

router
  .get("/groups", getAllGroups)
  .get("/users-in-group/:id", getAlUsersIngroup)
  .get("/add-group", addNewGroup)
  .get("/d-group/:id", deleteGroup)
  .get("/u-group/:id", updateGroup);

module.exports = router;