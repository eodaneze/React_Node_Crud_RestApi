const express = require("express");
const employee = require("../models/employee");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const data = new employee(req.body);
  const result = await data.save();

  if (!result) {
    res.json({
      status: "400",
      message: "Registration failed",
    });
  } else {
    res.json({
      status: "200",
      message: "Registration successful",
      result: data,
    });
  }
});


module.exports = router;
