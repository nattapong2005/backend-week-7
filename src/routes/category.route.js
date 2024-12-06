const express = require('express');
const app = express.Router();
const controller = require('../Controllers/category.controller');

app.get("/", controller.get);
app.get("/:id", controller.getById);

module.exports = app;