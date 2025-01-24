import { Request, Response } from "express";
import ProductService from "./product.service";



const productService= new ProductService()

class ProductController{
   

async createProductCategory (req: Request, res: Response):Promise<any> {
  try {
    const newCategory = await productService.createProductCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

async getProductCategories(req: Request, res: Response):Promise<any> {
  try {
    const categories = await productService.getProductCategories();
    res.status(200).json(categories);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

async getProductCategoryById(req: Request, res: Response):Promise<any> {
  try {
    const category = await productService.getProductCategoryById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

async updateProductCategory  (req: Request, res: Response):Promise<any>{
  try {
    const updatedCategory = await productService.updateProductCategory(req.params.id, req.body);
    if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(updatedCategory);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

async deleteProductCategory  (req: Request, res: Response):Promise<any>{
  try {
    const isDeleted = await productService.deleteProductCategory(req.params.id);
    if (!isDeleted) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
async createProduct  (req: Request, res: Response) :Promise<any>{
    try {
      const newProduct = await productService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  async getProducts (req: Request, res: Response):Promise<any>{
    try {
      const products = await productService.getProducts();
      res.status(200).json(products);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  async getProductById  (req: Request, res: Response) :Promise<any>{
    try {
      const product = await productService.getProductById(req.params.id);
      if (!product) return res.status(404).json({ message: "Product not found" });
      res.status(200).json(product);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  async updateProduct (req: Request, res: Response) :Promise<any>{
    try {
      const updatedProduct = await productService.updateProduct(req.params.id, req.body);
      if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
      res.status(200).json(updatedProduct);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  async deleteProduct (req: Request, res: Response) :Promise<any> {
    try {
      const isDeleted = await productService.deleteProduct(req.params.id);
      if (!isDeleted) return res.status(404).json({ message: "Product not found" });
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };

}

export default new ProductController()
