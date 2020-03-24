const express = require("express");

const routes = express.Router();

routes.get("/users", (request, response) => {
  return response.json({
    event: "Semana Omnistack 11.0",
    student: "Leandro Vieira"
  });
});

module.exports = routes;
