/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard Analytics APIs
 */

const express = require("express");
const router = express.Router();

const {
  getSummary,
  getCategorySummary,
  getMonthlyTrends,
  getRecentTransactions
} = require("../controllers/dashboardController");

const authorizeRoles = require("../middleware/roleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");


/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Get dashboard summary
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard summary retrieved
 */
router.get(
  "/summary",
  authMiddleware,
  authorizeRoles("admin", "analyst"),
  getSummary
);


/**
 * @swagger
 * /api/dashboard/category:
 *   get:
 *     summary: Get category wise summary
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Category summary retrieved
 */
router.get(
  "/category",
  authMiddleware,
  authorizeRoles("admin", "analyst"),
  getCategorySummary
);


/**
 * @swagger
 * /api/dashboard/monthly:
 *   get:
 *     summary: Get monthly trends
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Monthly trends retrieved
 */
router.get(
  "/monthly",
  authMiddleware,
  authorizeRoles("admin", "analyst"),
  getMonthlyTrends
);


/**
 * @swagger
 * /api/dashboard/recent:
 *   get:
 *     summary: Get recent transactions
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Recent transactions retrieved
 */
router.get(
  "/recent",
  authMiddleware,
  authorizeRoles("admin", "analyst", "viewer"),
  getRecentTransactions
);

module.exports = router;