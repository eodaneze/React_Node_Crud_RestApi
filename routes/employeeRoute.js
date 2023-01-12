const express = require("express");
const employee = require("../models/employee");
const router = express.Router();



// adding a user
router.post("/api/user", async (req, res) => {
  //   console.log(req.body);
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


// getting all users
router.get("", async (req, res) => {
  try {
    const result = await employee.find();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;

// getting a single user by id

router.get("/:id", async(req,res) => {
    try{
        // const id = req.params.id;
        const {id} = req.params
        const result = await employee.findById(id);
        res.json(result);
        console.log(result);
    }catch(err){
        res.status(400).send(err.message);
    }
})


// updating an existing user
router.put("/:id", async(req,res) => {
    try{
        // const id = req.params.id;
        const {id} = req.params;
        const data = req.body;
        const result = await employee.findByIdAndUpdate(id, data, {new: true});
        res.json(result);
        console.log(result);
    }catch(err){
        res.status(400).send(err.message);
    }
})
