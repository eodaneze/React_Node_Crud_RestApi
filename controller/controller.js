const employee = require("../models/employee");

exports.addUser = async (req, res) => {
  //   console.log(req.body);
  const data = new employee(req.body);
  const result = await data.save();

  if (!result) {
    res.json({
      status: "FAILED",
      message: "Registration failed",
    });
  } else {
    res.json({
      status: "SUCCESS",
      message: "Registration successful",
      result: data,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const result = await employee.find();
    if (result) {
      res.json({
        status: "SUCCESS",
        message: "Users found",
        result: result,
      });
    } else {
      res.json({
        status: "SUCCESS",
        message: "Users found",
      });
    }
    // res.json(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    // const id = req.params.id;
    const { id } = req.params;
    const result = await employee.findById(id);
    if (result) {
      res.json({
        status: "SUCCESS",
        message: `user with the id ${id} was found`,
        result: result,
      });
    } else {
      res.json({
        status: "FAILED",
        message: "No user found",
      });
    }

    console.log(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    // const id = req.params.id;
    const { id } = req.params;
    const name = req.body.name;
    const data = req.body;
    const result = await employee.findByIdAndUpdate(id, data, { new: true });
    if (result) {
      res.json({
        status: "SUCCESS",
        message: `user with the id ${id} and name ${name} was updated`,
        result: result,
      });
    } else {
      res.json({
        status: "FAILED",
        message: `No user found`,
      });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
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
    }else{
      res.json({
        status: "FAILED",
        message: `No user found`,
      });
    }
    res.json(result);
    console.log(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
