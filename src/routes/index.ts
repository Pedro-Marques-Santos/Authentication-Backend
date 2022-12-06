import { Router } from "express";
import { createUserRoutes } from "./createUser.routes";

const router = Router();

router.use("/createUser", createUserRoutes);

export { router }