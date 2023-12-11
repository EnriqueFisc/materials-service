const app = require('express')();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
      openapi: "3.0.0",
      info: { title: "Materials Service", version: "1.0.0" },
    },
    apis: ["./src/routes/create/index.js", "./src/routes/price/index.js", "./src/routes/get/index.js", ],
};

const swaggerSpec = swaggerJSDoc(options);


app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/api/docs/json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(swaggerSpec);
});

module.exports = app;
