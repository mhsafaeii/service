import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import loadTestRoutes from './routes/loadTestRoutes.js';
const swaggerUi = require('swagger-ui-express'); // Commented out for now


const app = express();
const port = process.env.PORT || 3000;

// Configure Swagger documentation options (replace with your actual options)
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'k6 API',
      version: '1.0.0',
      description: 'API for defining and running k6 load tests',
    },
    servers: [
      { url: `http://localhost:${port}` },
    ],
  },
  apis: ['./src/routes/*.js'],  // Update path to match your route files
};

const swaggerSpec = swaggerJsdoc(options);

// Uncomment these lines to enable Swagger UI if needed
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', loadTestRoutes(app));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
