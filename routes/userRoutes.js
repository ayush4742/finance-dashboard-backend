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


module.exports = router;