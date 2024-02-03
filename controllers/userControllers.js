const User = require('../models/user');

const registerController = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    await User.create({ name, email, phone, password });
    return res.render('index');
  } catch (error) {
    console.log(error);
  }
};

const loginController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerController,
  loginController,
};
