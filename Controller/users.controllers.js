const express = require("express");
const app = express();
const data = require("../Model/users.router");

app.get("user", (req, res) => {
  res.send(data);
});

app.post("/user", (req, res) => {
  req.push({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  });
});

app.get('/user/:id', (req,res) => {
    const id = req.params.id
    res.status(200).json({id : id})
})
