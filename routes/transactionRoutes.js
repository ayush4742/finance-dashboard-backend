/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Financial Transactions APIs
 */

const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getTransactions,
  deleteTransaction
} = require("../controllers/transactionController");

const authorizeRoles = require("../middleware/roleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");


/**
 * @swagger
 * /api/transactions:
 *   post:
 *     summary: Create Transaction (Admin & Analyst)
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Transaction created successfully
 */
router.post("/", authMiddleware, authorizeRoles("admin", "analyst"), createTransaction);



/**
 * @swagger
 * /api/transactions:
 *   get:
 *     summary: Get All Transactions (Pagination + Search + Filter)
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of records per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search transactions
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter by type (income / expense)
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *     responses:
 *       200:
 *         description: List of transactions
 */
router.get("/", authMiddleware, authorizeRoles("admin", "analyst", "viewer"), getTransactions);



/**
 * @swagger
 * /api/transactions/{id}:
 *   delete:
 *     summary: Delete Transaction (Admin Only)
 *     tags: [Transactions]
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
 *         description: Transaction deleted successfully
 */
router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteTransaction);


module.exports = router;