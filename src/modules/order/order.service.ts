import Order from "../../models/order.model";
import Product from "../../models/product.model";
import { IOrder } from "../../models/order.model";

class OrderService {
  async createOrder(productId: string, quantity: number): Promise<IOrder> {
    const product: any = await Product.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }

    const totalPrice = parseFloat(product?.price) * quantity;

    const order = new Order({
      product: productId,
      quantity,
      totalPrice,
    });

    return await order.save();
  }

  async getAllOrders() {
    return await Order.find().populate("product");
  }

  async getOrderById(orderId: string) {
    return await Order.findById(orderId).populate("product");
  }

  async updateOrderStatus(orderId: string, status: string) {
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }

    order.status = status;
    return await order.save();
  }
}

export default new OrderService();
