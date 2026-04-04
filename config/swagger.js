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

📘 *Documentation:*  
[📖 View Full README Guide](https://github.com/ayush4742/finance-dashboard-backend?tab=readme-ov-file#-authentication-flow)

`,
    },

    servers: [
      {
        url: "https://finance-dashboard-backend-wu1m.onrender.com",
        description: "Production Server",
      },
      {
        url: "http://localhost:5000",
        description: "Local Server",
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

const swaggerOptions = {
  explorer: true,
  swaggerOptions: {
    filter: true,
    showExtensions: true,
    showCommonExtensions: true,
  },
};

module.exports = {
  swaggerUi,
  specs,
  swaggerOptions
};