const express = require('express');
const app = express.Router();
const controller = require("../Controllers/customer.controller");

app.get("/", controller.get);
app.get("/:id", controller.getById);
app.get("/name/:name", controller.getName);

app.post("/", controller.create);

app.put("/:id", controller.edit);
app.patch("/:id", controller.editSome);

app.delete("/:id", controller.delete);









module.exports = app;