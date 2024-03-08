import express from "express"
import { getAllBus } from "../../helper/getAllBus.js"
import { getBusStops } from "../../helper/getBusStops.js"
import { getBusEst } from "../../helper/getBusEst.js"
import { getBusShape } from "../../helper/getBusShape.js"
import { getRoutePassBy } from "../../helper/getRoutePassby.js"
import { searchStop } from "../../helper/searchStop.js"

const bus_router = express.Router()

bus_router.get("/", (_req, res) => res.send("hello bus router"))

bus_router.get("/:city", async (req, res) => {
    const { city } = req.params
    const data = await getAllBus(city)
    return res.json(data)
})

bus_router.get("/:city/stops/:bus", async (req, res) => {
    const { city, bus } = req.params
    const data = await getBusStops(bus, city)
    return res.json(data)
})

bus_router.get("/:city/est/:bus", async (req, res) => {
    const { city, bus } = req.params
    const data = await getBusEst(city, bus)
    return res.json(data)
})

bus_router.get("/:city/shape/:bus", async (req, res) => {
    const { city, bus } = req.params
    const data = await getBusShape(bus, city)
    return res.json(data)
})

bus_router.get("/:city/passby/:station", async (req, res) => {
    const { city, station } = req.params
    const data = await getRoutePassBy(city, station)
    return res.json(data)
})

bus_router.get("/:city/search/:q", async (req,res) => {
    const {city, q} = req.params
    const data = await searchStop(q, city)
    return res.json(data)
})

export default bus_router