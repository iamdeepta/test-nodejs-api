const router = require("express").Router();
const User = require("../models/User");

//create user
router.post("/createUser", async (req, res) => {
  try {
    const newUser = await new User(req.body);

    const saveUser = await newUser.save();

    if (saveUser) {
      return res.status(200).json({ message: "User created successfully" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
});

//get all users
router.get("/getUsers", async (req, res) => {
  try {
    const users = await User.find();
    const { password, ...others } = await users._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
