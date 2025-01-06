import { Request, Response, Router } from "express";
import UserController from "./user.controller";

const router: Router = Router();
const userController = new UserController();

router.get("/", userController.getAllRoles);
router.get("/:id", userController.getRoleById);
router.post("/", userController.createRole);
router.put("/:id", userController.updateRole);
router.delete("/:id", userController.deleteRole);

export default router;
