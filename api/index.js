import express from "express";
import { config } from "dotenv";
import bus_router from "./router/bus.js";
config()
const app = express();


app.get("/", (req, res) => res.send("Express on Vercel (using ESM)"));

app.use("/bus", bus_router)

export default app