import { Request, Response } from "express";
import AuthService from "./auth.service";
import { validationResult } from "express-validator";

class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async register(req: Request, res: Response) {
    const { name, email, password, role } = req.body;

    try {
      const user = await this.authService.register({
        name,
        email,
        password,
        role,
      });
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await this.authService.login({ email, password });
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new AuthController();
