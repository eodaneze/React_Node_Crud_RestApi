const express = require("express");
const {
  addUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controller/controller");
const router = express.Router();

// adding a user
router.post("/api/user", addUser);

// getting all users
router.get("/", getAllUsers);

// getting a single user by id

router.get("/:id", getSingleUser);

// updating an existing user
router.put("/:id", updateUser);

// delete a user
router.delete("/:id", deleteUser);

module.exports = router;
