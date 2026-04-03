const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Dashboard API",
      version: "1.0.0",
      description: "Finance Dashboard Backend APIs"
    },
    servers: [
      {
        url: "https://finance-dashboard-backend-wu1m.onrender.com"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      swaggerOptions: {
        defaultModelsExpandDepth: -1,   // hide schemas
        displayRequestDuration: false,
        docExpansion: "none",           // collapse all
        filter: true,
        showExtensions: false,
        showCommonExtensions: false
      }
    })
  );
};