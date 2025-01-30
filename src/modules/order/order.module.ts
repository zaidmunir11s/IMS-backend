import { Application } from "express";

import orderRoutes from "./order.routes";

export default (app: Application): void => {
  app.use("/api/user", orderRoutes);
};
