import { Router, Request, Response } from "express";
import UserService from "../user/user.service";


const userService = new UserService();

class UserController {
  public router = Router();
 

  async getAllRoles(req: Request, res: Response): Promise<any> {
    try {
      const roles = await userService.getAllRoles();
      res.status(200).json({ roles });
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getRoleById(req: Request, res: Response) : Promise<any> {
    const { id } = req.params;
    try {
      const role = await userService.getRoleById(id);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json({ role });
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  async createRole(req: Request, res: Response): Promise<any>  {
    const { name, permissions } = req.body;
    try {
      const role = await userService.createRole(name, permissions);
      res.status(201).json({ role });
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateRole(req: Request, res: Response) : Promise<any> {
    const { id } = req.params;
    const { name, permissions } = req.body;
    try {
      const role = await userService.updateRole(id, name, permissions);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json({ role });
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteRole(req: Request, res: Response): Promise<any>  {
    const { id } = req.params;
    try {
      const result = await userService.deleteRole(id);
      if (!result) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json({ message: "Role deleted successfully" });
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }
  
  async createUser(req: Request, res: Response) : Promise<any> {
    try {
      const { username, email, password, role } = req.body;
      const newUser = await userService.createUser(username, email, password, role);
      res.status(201).json(newUser);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUser(req: Request, res: Response) : Promise<any> {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json(user);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<any>  {
    try {
      console.log("userss")
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<any>  {
    try {
  
      const {id,...updatedData} = req.body;
      const updatedUser = await userService.updateUser(id, updatedData);
      if (!updatedUser) return res.status(404).json({ message: "User not found" });
      res.status(200).json(updatedUser);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) : Promise<any> {
    try {
      const userId = req.params.id;
      const deletedUser = await userService.deleteUser(userId);
      if (!deletedUser) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
