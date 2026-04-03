const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Dashboard API",
      version: "1.0.0",
      description: `
Finance Dashboard Backend API Documentation

📘 Full Documentation:
https://github.com/ayush4742/finance-dashboard-backend/blob/main/README.md

Please read README before testing APIs.
`,
    },

    servers: [
      {
        url: "https://finance-dashboard-backend-wu1m.onrender.com",
      },
    ],

    tags: [
      {
        name: "Users",
        description: "Authentication & User Management",
      },
      {
        name: "Transactions",
        description: "Transaction Management",
      },
      {
        name: "Dashboard",
        description: "Dashboard Analytics",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};