import { Application } from "express";

import productRoutes from "./product.routes"

export default (app: Application): void => {
  app.use("/api/product", productRoutes);
};
