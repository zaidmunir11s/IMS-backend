import { Request, Response, Router } from "express";
import authController from "./auth.controller";
import { loginValidation, registerValidation } from "./auth.validation";

const router: Router = Router();

router.post("/register", registerValidation, authController.register);

router.post("/login", loginValidation, authController.login);

export default router;
