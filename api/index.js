const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));


const bus_router = require("./router/bus")
app.use("/bus", bus_router)

module.exports = app;