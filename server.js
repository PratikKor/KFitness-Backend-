import express from 'express';
import { connectDb } from './db/connectDb.js';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectDb();
    console.log("App running on port 3000");
})
