var express = require("express")
var bus_router = express.Router()

bus_router.get("/", (_req, res) => res.send("hello bus router"))

bus_router.get("/:city", async (req, res) => {
    const { city } = req.params
    res.send(city)
})

module.exports = bus_router