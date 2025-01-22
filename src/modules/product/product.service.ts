import ProductCategory from "../../models/productCategory.model";
import { IProductCategory } from "../../models/productCategory.model";
import mongoose from "mongoose";
import Product, { IProduct } from "../../models/product.model"



class ProductService {
async createProductCategory  (categoryData: IProductCategory): Promise<IProductCategory>{
  try {
    const newCategory = new ProductCategory(categoryData);
    await newCategory.save();
    return newCategory;
  } catch (error:any) {
    throw new Error("Error creating category: " + error?.message);
  }
};

async getProductCategories(): Promise<IProductCategory[]>{
  try {
    return await ProductCategory.find();
  } catch (error:any) {
    throw new Error("Error fetching categories: " + error?.message);
  }
};

async getProductCategoryById  (id: string): Promise<IProductCategory | null>{
  try {
    return await ProductCategory.findById(id);
  } catch (error:any) {
    throw new Error("Error fetching category: " + error?.message);
  }
};

async updateProductCategory(id: string, updateData: IProductCategory): Promise<IProductCategory | null>  {
  try {
    return await ProductCategory.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error:any) {
    throw new Error("Error updating category: " + error?.message);
  }
};

async deleteProductCategory (id: string): Promise<boolean>{
  try {
    const result = await ProductCategory.findByIdAndDelete(id);
    return result !== null;
  } catch (error:any) {
    throw new Error("Error deleting category: " + error?.message);
  }
}
async createProduct  (productData: IProduct): Promise<IProduct>  {
    try {
      const newProduct = new Product(productData);
      await newProduct.save();
      return newProduct;
    } catch (error:any) {
      throw new Error("Error creating product: " + error.message);
    }
  };
  
 async getProducts (): Promise<IProduct[]> {
    try {
      return await Product.find().populate("category", "name");
    } catch (error:any) {
      throw new Error("Error fetching products: " + error.message);
    }
  };
  
 async getProductById  (id: string): Promise<IProduct | null> {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid product ID");
      }
      return await Product.findById(id).populate("category", "name");
    } catch (error:any) {
      throw new Error("Error fetching product: " + error.message);
    }
  };
  
  async updateProduct  (id: string, updateData: IProduct): Promise<IProduct | null>{
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid product ID");
      }
      return await Product.findByIdAndUpdate(id, updateData, { new: true }).populate("category", "name");
    } catch (error:any) {
      throw new Error("Error updating product: " + error.message);
    }
  };
  
 async deleteProduct  (id: string): Promise<boolean> {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid product ID");
      }
      const result = await Product.findByIdAndDelete(id);
      return result !== null;
    } catch (error:any) {
      throw new Error("Error deleting product: " + error.message);
    }
  };
}



export default ProductService

