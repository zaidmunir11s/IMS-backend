import { Request, Response, Router } from "express";
import UserController from "./user.controller";

const router: Router = Router();
const userController = new UserController();

router.get("/roles", userController.getAllRoles);
router.get("/role/:id", userController.getRoleById);
router.post("/role", userController.createRole);
router.put("/role/:id", userController.updateRole);
router.delete("/role/:id", userController.deleteRole);
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/update", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
