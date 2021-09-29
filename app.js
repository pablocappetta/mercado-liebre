const express = require("express");
const app = express();
const path = require("path");

app.listen(process.env.PORT || 45345, () => {
  console.log("Servidor iniciado en puerto 45345");
  console.log("Servidor: http://localhost:45345");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.post("/registro", (req, res) => {
  res.redirect("/");
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.post("/login", (req, res) => {
  res.redirect("/");
});

app.post("/search", (req, res) => {
  res.redirect("/");
});

app.use(express.static("public"));
