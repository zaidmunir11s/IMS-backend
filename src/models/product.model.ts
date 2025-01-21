import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  permissions: string[];
}

const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    description: {
        type: String,
        required: true,
        
      },
      price: {
        type: String,
        required: true,
        
      },
      quantity: {
        type: String,
        required: true,
        
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductCategory",
        required: true,
      },
      
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
