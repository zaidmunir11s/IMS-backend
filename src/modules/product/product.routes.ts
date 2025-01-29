import express from "express";
import productController from "./product.controller";

const router = express.Router();

router.post("/category/create", productController.createProductCategory);
router.get("/categories", productController.getProductCategories);
router.get("/category/:id", productController.getProductCategoryById);
router.post("/category/update/", productController.updateProductCategory);
router.delete("/category/:id", productController.deleteProductCategory);
router.post("/", productController.createProduct);
router.get("/",productController.getProducts);
router.get("/:id",productController.getProductById);
router.post("/update",productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;
