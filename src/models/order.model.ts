import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  product: mongoose.Types.ObjectId; // Reference to Product
  quantity: number;
  totalPrice: number;
  status: string;
}

const OrderSchema: Schema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model<IOrder>("Order", OrderSchema);
export default Order;
