import { Request, Response } from "express";
import ProductService from "./product.service";




class ProductController{
    private productService: ProductService;

    constructor() {
      this.productService= new ProductService();
    }

async createProductCategory (req: Request, res: Response):Promise<any> {
  try {
    const newCategory = await this.productService.createProductCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

async getProductCategories(req: Request, res: Response):Promise<any> {
  try {
    const categories = await this.productService.getProductCategories();
    res.status(200).json(categories);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

async getProductCategoryById(req: Request, res: Response):Promise<any> {
  try {
    const category = await this.productService.getProductCategoryById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

async updateProductCategory  (req: Request, res: Response):Promise<any>{
  try {
    const updatedCategory = await this.productService.updateProductCategory(req.params.id, req.body);
    if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(updatedCategory);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

async deleteProductCategory  (req: Request, res: Response):Promise<any>{
  try {
    const isDeleted = await this.productService.deleteProductCategory(req.params.id);
    if (!isDeleted) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
async createProduct  (req: Request, res: Response) :Promise<any>{
    try {
      const newProduct = await this.productService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  async getProducts (req: Request, res: Response):Promise<any>{
    try {
      const products = await this.productService.getProducts();
      res.status(200).json(products);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  async getProductById  (req: Request, res: Response) :Promise<any>{
    try {
      const product = await this.productService.getProductById(req.params.id);
      if (!product) return res.status(404).json({ message: "Product not found" });
      res.status(200).json(product);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  async updateProduct (req: Request, res: Response) :Promise<any>{
    try {
      const updatedProduct = await this.productService.updateProduct(req.params.id, req.body);
      if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
      res.status(200).json(updatedProduct);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  async deleteProduct (req: Request, res: Response) :Promise<any> {
    try {
      const isDeleted = await this.productService.deleteProduct(req.params.id);
      if (!isDeleted) return res.status(404).json({ message: "Product not found" });
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };

}

export default new ProductController()
