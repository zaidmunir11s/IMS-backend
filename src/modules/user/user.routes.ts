import { Request, Response, Router } from "express";
import UserController from "./user.controller";

const router: Router = Router();
const userController = new UserController();

router.get("/", userController.getAllRoles);
router.get("/:id", userController.getRoleById);
router.post("/", userController.createRole);
router.put("/:id", userController.updateRole);
router.delete("/:id", userController.deleteRole);
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
