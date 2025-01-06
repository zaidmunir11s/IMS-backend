import { Router, Request, Response } from "express";
import UserService from "../user/user.service";

class UserController {
  public router = Router();
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getAllRoles(req: Request, res: Response) {
    try {
      const roles = await this.userService.getAllRoles();
      res.status(200).json({ roles });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getRoleById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const role = await this.userService.getRoleById(id);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json({ role });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async createRole(req: Request, res: Response) {
    const { name, permissions } = req.body;
    try {
      const role = await this.userService.createRole(name, permissions);
      res.status(201).json({ role });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateRole(req: Request, res: Response) {
    const { id } = req.params;
    const { name, permissions } = req.body;
    try {
      const role = await this.userService.updateRole(id, name, permissions);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json({ role });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteRole(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.userService.deleteRole(id);
      if (!result) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json({ message: "Role deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default UserController;
