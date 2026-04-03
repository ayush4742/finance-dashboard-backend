const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    console.log("HEADERS:", req.headers);   // 👈 add this

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const token = authHeader.split(" ")[1];

    console.log("TOKEN:", token); // 👈 add this

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("AUTH ERROR:", error); // 👈 add this

    res.status(401).json({
      success: false,
      message: "User not authenticated",
    });
  }
};
console.log("SECRET:", process.env.JWT_SECRET);
module.exports = authMiddleware;