/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 */

const express = require("express");
const authorizeRoles = require("../middleware/roleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const { 
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  loginUser
} = require("../controllers/userController");


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", loginUser);



/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create User (Admin Only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post("/", authMiddleware, authorizeRoles("admin"), createUser);



/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get All Users (Admin & Analyst)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/", authMiddleware, authorizeRoles("admin", "analyst"), getUsers);



/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update User (Admin Only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put("/:id", authMiddleware, authorizeRoles("admin"), updateUser);



/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete User (Admin Only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteUser);

/**
 * @swagger
 * /api/users/seed:
 *   post:
 *     summary: Create demo users (Admin, Analyst, Viewer)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Demo users created
 */
router.post("/seed", async (req, res) => {
  const User = require("../models/User");
  const bcrypt = require("bcryptjs");

  try {

    const users = [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: await bcrypt.hash("123456", 10),
        role: "admin"
      },
      {
        name: "Analyst",
        email: "analyst@gmail.com",
        password: await bcrypt.hash("123456", 10),
        role: "analyst"
      },
      {
        name: "Viewer",
        email: "viewer@gmail.com",
        password: await bcrypt.hash("123456", 10),
        role: "viewer"
      }
    ];

    await User.deleteMany({
      email: { $in: ["admin@gmail.com","analyst@gmail.com","viewer@gmail.com"] }
    });

    await User.insertMany(users);

    res.json({
      success: true,
      message: "Demo users created successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});
module.exports = router;