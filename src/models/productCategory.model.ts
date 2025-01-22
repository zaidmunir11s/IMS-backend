import mongoose, { Document, Schema } from "mongoose";

export interface IProductCategory extends Document {
  name: string;
}

const ProductCategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const ProductCategory = mongoose.model<IProductCategory>("ProductCategory", ProductCategorySchema);

export default ProductCategory;
