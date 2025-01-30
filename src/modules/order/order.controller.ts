import { Request, Response } from "express";
import OrderService from "./order.service";

class OrderController {
  async createOrder(req: Request, res: Response): Promise<any> {
    try {
      const { productId, quantity } = req.body;
      const order = await OrderService.createOrder(productId, quantity);
      return res.status(201).json(order);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getAllOrders(req: Request, res: Response): Promise<any> {
    try {
      const orders = await OrderService.getAllOrders();
      return res.status(200).json(orders);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getOrderById(req: Request, res: Response): Promise<any> {
    try {
      const orderId = req.params.id;
      const order = await OrderService.getOrderById(orderId);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      return res.status(200).json(order);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async updateOrderStatus(req: Request, res: Response): Promise<any> {
    try {
      const orderId = req.params.id;
      const { status } = req.body;
      const updatedOrder = await OrderService.updateOrderStatus(
        orderId,
        status
      );
      return res.status(200).json(updatedOrder);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new OrderController();
