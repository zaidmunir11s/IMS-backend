import { Request, Response } from "express";
import ProductService from "./product.service";


class ProductController{
    private productService: ProductService;

    constructor() {
      this.productService= new ProductService();
    }

async createProductCategory (req: Request, res: Response) {
  try {
    const newCategory = await productService.createProductCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async getProductCategories(req: Request, res: Response) {
  try {
    const categories = await productService.getProductCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async getProductCategoryById(req: Request, res: Response) {
  try {
    const category = await productService.getProductCategoryById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async updateProductCategory  (req: Request, res: Response){
  try {
    const updatedCategory = await productService.updateProductCategory(req.params.id, req.body);
    if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async deleteProductCategory  (req: Request, res: Response){
  try {
    const isDeleted = await productService.deleteProductCategory(req.params.id);
    if (!isDeleted) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

}

export default new ProductController()
