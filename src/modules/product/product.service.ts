import ProductCategory from "../../models/productCategory.model";
import { IProductCategory } from "../../models/productCategory.model";



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
}}

export default ProductService

