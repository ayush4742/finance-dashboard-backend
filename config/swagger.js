const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Dashboard Backend API",
      version: "1.0.0",
      description: `
# Finance Dashboard Backend API

This API provides:

## Features
- User Authentication (JWT)
- Role Based Access Control
- Transactions Management
- Dashboard Analytics

## Roles

- Admin → Full access  
- Analyst → Create & View  
- Viewer → Read only  

## How To Test

1. Create demo users → **POST /api/users/seed**
2. Login → **POST /api/users/login**
3. Copy token
4. Click **Authorize**
5. Test APIs
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
        description: "Financial Transactions APIs",
      },
      {
        name: "Dashboard",
        description: "Dashboard Analytics APIs",
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