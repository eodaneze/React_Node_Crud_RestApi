const employee = require("../models/employee");


exports.addUser = async (req, res) => {
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
  }

  exports.getAllUsers =  async (req, res) => {
    try {
      const result = await employee.find();
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  }

  exports.getSingleUser = async (req, res) => {
    try {
      // const id = req.params.id;
      const { id } = req.params;
      const result = await employee.findById(id);
      res.json(result);
      console.log(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  exports.updateUser = async (req, res) => {
    try {
      // const id = req.params.id;
      const { id } = req.params;
      const data = req.body;
      const result = await employee.findByIdAndUpdate(id, data, { new: true });
      res.json(result);
      console.log(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  exports.deleteUser = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const result = await employee.findByIdAndDelete(id);
      if (result) {
        res.json({
          status: "SUCCESS",
          message: `user with the id ${id} and name ${name} has been deleted`,
        });
      }
      res.json(result);
      console.log(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }