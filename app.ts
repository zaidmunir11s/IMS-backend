import express, { Application, Request, Response } from "express";
import connectDB from "./src/config/db";
import authModule from "./src/modules/auth/auth.module";
import userModule from "./src/modules/user/user.module";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import session from "express-session";

const app: Application = express();

dotenv.config();
connectDB();

app.use(
  session({
    secret: crypto.randomBytes(64).toString("hex"),
    resave: false,
    saveUninitialized: false,
  })
);

const PORT: number = 8000;
app.use(cors());
app.use(express.json());

authModule(app);
userModule(app);

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});
