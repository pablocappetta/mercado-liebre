const express = require("express");
const app = express();
const path = require("path");

app.listen(45345, () => {
  console.log("Servidor iniciado en puerto 45345");
  console.log("Servidor: http://localhost:45345");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.use(express.static("public"));
