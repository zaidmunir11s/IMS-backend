import { Application } from "express";

import userRoutes from "./user.routes";

export default (app: Application): void => {
  app.use("/api/user", userRoutes);
};
