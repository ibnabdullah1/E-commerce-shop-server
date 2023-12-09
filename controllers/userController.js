const User = require("../models/User");

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(`Error getting user profile: ${error.message}`);
    res.status(500).send("Server Error");
  }
};

module.exports = { getUserProfile };
