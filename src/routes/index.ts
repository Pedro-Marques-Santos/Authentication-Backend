import { Router } from "express";
import { createUserRoutes } from "./createUser.routes";
import { listUserRoutes } from "./listUser.routes";

const router = Router();

router.use("/createUser", createUserRoutes);
router.use("/listUser", listUserRoutes);

export { router }