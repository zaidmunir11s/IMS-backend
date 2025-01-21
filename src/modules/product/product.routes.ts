import express from "express";
import productController from "./product.controller";

const router = express.Router();

router.post("/category/create", productController.createProductCategory);
router.get("/categories", productController.getProductCategories);
router.get("/category/:id", productController.getProductCategoryById);
router.put("/category/update/:id", productController.updateProductCategory);
router.delete("/category/:id", productController.deleteProductCategory);

export default router;
