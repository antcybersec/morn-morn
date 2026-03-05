import express from "express";
import cors from "cors";
import { prisma } from './db';
import "dotenv/config";

import { authRouter } from "./routes/auth";
import { tasksRouter } from "./routes/tasks";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/tasks", tasksRouter);

// Basic health check
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});

export { app, prisma };