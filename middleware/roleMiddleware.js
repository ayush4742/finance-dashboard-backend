const User = require("../models/User");

const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      const userId = req.user.id; // from JWT

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      if (!roles.includes(user.role)) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

module.exports = authorizeRoles;