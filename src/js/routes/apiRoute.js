const express = require("express");
const router = express.Router();
const { getAllUsers, AddNewUser, getUser, updateUser, deleteUser } = require("../controllers/apiController");

router
  .get("/users", getAllUsers)
  .get("/user/:id", getUser)
  .post("/user", AddNewUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);

module.exports = router;
