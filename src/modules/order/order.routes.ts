import express from "express";
import OrderController from "./order.controller";

const router = express.Router();

router.post("/orders", OrderController.createOrder);

router.get("/orders", OrderController.getAllOrders);

router.get("/orders/:id", OrderController.getOrderById);

router.put("/orders/:id/status", OrderController.updateOrderStatus);

export default router;
