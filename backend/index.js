const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (request, response) => {
  return response.json({
    event: "Semana Omnistack 11.0",
    student: "Leandro Vieira"
  });
});

app.listen(3333);
