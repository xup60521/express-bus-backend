import express from "express"
var bus_router = express.Router()

bus_router.get("/", (_req, res) => res.send("hello bus router"))

bus_router.get("/:city", async (req, res) => {
    const { city } = req.params
    
    return res.json(city)
})

export default bus_router